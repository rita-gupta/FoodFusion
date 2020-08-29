$(document).ready(function(){
    $("[data-toggle ='tooltip']").tooltip();



    $("#mycarousel").carousel({interval:1000});
    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');

    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
        
    // });


    // using only one button to pause and play
$("#carouselButton").click(function(){
    if($("#carouselButton").children("span").hasClass('fa-pause')){
        $("#mycarousel").carousel('pause');

        $("#carouselButton").children("span").removeClass('fa-pause');
        
        $("#carouselButton").removeClass('btn-danger');

        $("#carouselButton").children("span").addClass('fa-play');

        $("#carouselButton").addClass('btn-success');

     } else if ($("#carouselButton").children("span").hasClass('fa-play')){

        $("#mycarousel").carousel('cycle');

        $("#carouselButton").children("span").removeClass('fa-play');

        $("#carouselButton").removeClass('btn-success');

        $("#carouselButton").children("span").addClass('fa-pause');

        $("#carouselButton").addClass('btn-danger');


     }
});
   

   });