"use strict";
module.exports = function (grunt){
//shows the execution time how long a tasks takes to execute.
require('time-grunt')(grunt);

//Automatically loads the require modules for a grunt tasks
require('jit-grunt')(grunt,{
    useminPrepare:'grunt-usemin'
});

    // define the configuration for all the tasks

grunt.initConfig({

//convert scss to css
sass: { 
    dist: {
        files:{
         'css/styles.css': 'css/styles.scss'   
        }
    }
},
watch:{
    files:'css/*.scss',
    tasks:['sass']
},
browserSync:{
    dev:{
       bsFiles:{
        src:[
            'css/*.css',
            '*.html',
            'js/*.js'
        ]
        
       } 
    },
    options: {
        watchTask:true,
        server:{
            baseDir:'./'
        }
    }
},
copy:{
    html:{
        files:[{
            //for html
            expand:true,
            dot:true,
            cwd:'./',
            src:['*.html'],
            dest:'dist'
        }]
    },
    fonts:{
        files:[
            {
                //for font-awesome
                expand:true,
                dot:true,
                cwd:'node_module/font-awesome',
                src:['fonts/*.*'],
                dest:'dist'
            }
        ]
    }
},
clean:{
    build:{
        src:['dist/']
    }
},

imagemin:{
    dymanic:{
        files:[{
            expand:true,
            cwd:'./',
            src:['img/*.{png,jpg,gify}'],
            dest:'dist/'
        }]
    }
},

useminPrepare:{
    foo:{
        dest:'dist',
        src:['contactus.html','aboutus.html','index.html']
    },
    options:{
        flow:{
            steps:{
                css:['cssmin'],
                js:['uglify']
            },
            post:{
                css:[{
                    name:'cssmin',
                    createConfig: function(context, block){
                        var generated = context.options.generated;
                        generated.options={
                            keepSpecialComments:0, rebase:false
                        }
                    }
                }]
            }
        }
    }
},

//concat
concat:{
    options:{
        separator:";"
    },
    dist:{}
},
uglify:{
    dist:{}
},
cssmin:{
    dist:{}
},
//filerev
//when ever there is chnage in a css or a js file the filerev assigns a 
//unique id to the file from which the broswer shall notice that the file 
//has been updated and it will download the new file

filerev:{
    options:{
        encoding:'utf8',
        algorithm:'md5',
        length:20
    },
    release:{
        files:[{
            src:[
                'dist/js/*js',
                'dist/css/*css'
            ]
        }]
    }
},
usemin:{
    html:['dist/contactus.html','dist/aboutus.html','dist/index.html'],
    options:{
        assestDirs:['dist','dist/css','dist/js']
    }
},

htmlmin:{
    dist:{
        options:{
            collapseWhitespace:true
        },
        files:{
            'dist/index.html':'dist/index.html',
            'dist/contactus.html':'dist/contactus.html',
            'dist/aboutus.html':'dist/aboutus.html'
        }
    }
}




    });
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
    grunt.registerTask('build',
    ['clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin']);
}