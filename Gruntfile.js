"use strict";
module.exports = function (grunt){
//shows the execution time how long a tasks takes to execute.
require('time-grunt')(grunt);

//Automatically loads the require modules for a grunt tasks
require('jit-grunt')(grunt);

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
}


    });
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
}