$(function(){"use strict";$(window).scroll(function(){if($(this).scrollTop()>100){$("#scroll").fadeIn();}else{$("#scroll").fadeOut();}});$("#scroll").on("click",function(e){$("html, body").animate({scrollTop:0},600);return false;});var $magnificPopup=$(".popup-youtube");if($magnificPopup.length&&$.fn.magnificPopup){$magnificPopup.magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false,});}
$("#play-video").on("click",function(e){e.preventDefault();$("#video-overlay").addClass("open");$("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');});$(".video-overlay, .video-overlay-close").on("click",function(e){e.preventDefault();close_video();});$(document).keyup(function(e){if(e.keyCode===27){close_video();}});function close_video(){$(".video-overlay.open").removeClass("open").find("iframe").remove();}
if($(".dropdown-menu a.dropdown-toggle").length){$(".dropdown-menu a.dropdown-toggle").on("click",function(e){if(!$(this).closest(".dropdown").hasClass("show")){$(this).closest(".dropdown").first().find(".show").removeClass("show");}
var $subMenu=$(this).closest(".dropdown");$subMenu.toggleClass("show");$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(e){$(".dropdown-submenu .show").removeClass("show");});return false;});}
if($.fn.twentytwenty){$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.7,});$(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct:0.3,orientation:"vertical",});}});

// SLIDER DEL FORMULARIO INICIAL
var $bannerSlider=$(".banner-slider");
if($bannerSlider.length&&$.fn.slick){
    $bannerSlider.slick({
        slidesToScroll:1,
        arrows:false,
        arrastrable:false,
        lazyLoad:'progressive',
        slidesToShow:1,
        dots:true,
        touchMove:false,
        touchThreshold: 0,
        vertical:false,
        verticalSwiping:false,
        infinite:false,
        autoplay:false, 
        autoplaySpeed:1000, 
        responsive:[{
            breakpoint:768,settings:{
                vertical:false,
                verticalSwiping:false,
                adaptiveHeight: true
            },
        }],
    });
}

$('#ingresar').on('click', function() {
    $('#banenerForm').slick('slickNext');
  });

  $('#nextBeneficiarios').on('click', function() {
    $('#banenerForm').slick('slickNext');
  });

  $('#continuarUserData').on('click', function() {
    $('#banenerForm').slick('slickNext');
  });
  

  //SLIDER SERVICE
  var $ourteamSlider=$(".our-team-slider");
  if($ourteamSlider.length&&$.fn.slick){
    $ourteamSlider.slick({
      dots:true,
      lazyLoad:'progressive',
      speed:1000,
      slidesToShow:4,
      slidesToScroll:4,
      arrows:false,
      autoplay:true,
      adaptiveHeight: true,
      responsive:[{
        breakpoint:1439,
        settings:{
          slidesToShow:3,
          slidesToScroll:3,
          infinite:true,
          arrows:false
          ,dots:true,
        },
        },
        {
          breakpoint:992,
          settings:{
            arrows:false,
            slidesToShow:2,
            slidesToScroll:2,
          },
        },{breakpoint:768,
          settings:{
            arrows:false,
            slidesToShow:2,
            slidesToScroll:2,
          },
        },{breakpoint:576,
          settings:{
            arrows:false,
            slidesToShow:1,
            slidesToScroll:1,
          },
        },
      ],
    });
  }

