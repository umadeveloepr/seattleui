/*global $, console */
/* eslint-disable no-console */

$(function () {

//        $("#t-btn").click(function(){
//            $(".overlay-menu").show();
//            $(".navbar-default .navbar-collapse").attr('style','display: block !important');
//        });
//        $(".close-btn").click(function(){
//            $(".navbar-default .navbar-collapse").attr('style','display: none !important');
//        });

   var windowWidth =  $(window).width();
    if(windowWidth<992){
        $(".contact .mobil a").attr("href","tel:00971569911676");
//        $(".collapse.navbar-collapse").addClass("overlay-menu");
}
//    if(windowWidth>992){
//        $(".collapse.navbar-collapse").removeClass("overlay-menu");
//    }
//    else{
//        $(".collapse.navbar-collapse").addClass("overlay-menu");
//    }
//
//    $(window).resize(function(){
//         if(windowWidth>992){
//        $(".collapse.navbar-collapse").removeClass("overlay-menu");
//    }
//    else{
//        $(".collapse.navbar-collapse").addClass("overlay-menu");
//    }
//
//    });
});

/*============ home page ==============*/
 if ($(window).width() > 1024){
   $(".hero-section").css({ height: $(window).innerHeight() });
}

$(document).ready(function(){
  // $(".hero-section").css({ height: $(window).innerHeight() });
   $(".first-slider ul li").click(function(){
     $(this).addClass("active").siblings().removeClass("active");
   });
   $(".sec-slider ul li").click(function(){
     $(this).addClass("active").siblings().removeClass("active");
   });
   $(".services-slider-bullets ul li").click(function(){
     $(this).addClass("active-c").siblings().removeClass("active-c");
   });

   // $(".bottom-header ul li ").click(function(){
   //   $(this).addClass("active-a").siblings().removeClass("active-a");
   // });

    $(".navbar-nav li a ").click(function(){
     $(this).addClass("active").siblings().removeClass("active");
   });




   $(".scroll").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$(".scroll2").click(function(e) {
 e.preventDefault();
 var section = $(this).attr("href");
 $("html, body").animate({
     scrollTop: $(section).offset().top
 });
});


$(".three-taps a").hover(function(){
  $(this).closest(".three-taps a").find('h2').toggleClass("pulse")
  //$(".three-taps a h2").closest().toggleClass("bounce")
});



});


function checkOffset() {
    if($('.go-chat').offset().top  + $('.go-chat').height()>= $('footer').offset().top - 10)
        $('.go-chat').css('bottom', '105px');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('.go-chat').css('bottom', '0'); // restore when you scroll up
}
$(document).scroll(function() {
    checkOffset();
});



$(window).scroll(function (){
          if ($(this).scrollTop() >= 130)
          {
            $(".go-chat").show();
          }
          else{
              $(".go-chat").hide();
          }
      });

 if ($(window).width() > 1024){
  $(window).scroll(function (){
            if ($(this).scrollTop() >= 720 && $(this).scrollTop() <=2500 )
            {
              $(".c-fixed").show();
            }
            else{
                $(".c-fixed").hide();
            }
        });
        $(window).scroll(function (){
                  if ($(this).scrollTop() >= 750 && $(this).scrollTop() <=1350 )
                  {
                    $("#one").css({"display":"inline-block"});
                    $("#two").css({"display":"none"});
                    $("#three").css({"display":"none"});
                  }
              });

              $(window).scroll(function (){
                        if ($(this).scrollTop() >= 1350 && $(this).scrollTop() <=2200 )
                        {
                          $("#two").css({"display":"inline-block"});
                          $("#one").css({"display":"none"});
                          $("#three").css({"display":"none"});
                        }
                    });


                    $(window).scroll(function (){
                              if ($(this).scrollTop() >= 2200 && $(this).scrollTop() <=2500 )
                              {
                                $("#three").css({"display":"inline-block"});
                                $("#one").css({"display":"none"});
                                $("#two").css({"display":"none"});
                              }
                          });
 }


 $(".open-btn").click(function(){
   $(".responsive-menu").fadeIn();
 });

 $(".close-holder").click(function(){
   $(".responsive-menu").fadeOut();
 });




$(".ar-holder").click(function(){
  $(this).css({"display":"none"});;
  $(".e-holder").css({"display":"inline-block"});
  $(this).fadeOut(1);
  $(".e-holder").fadeIn(1);
   $(".e-holder").css("display","inline-block");
});

$(".e-holder").click(function(){
  $(this).css({"display":"none"});;
  $(".ar-holder").css({"display":"inline-block"});
});
