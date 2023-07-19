function quitarclase1(){

    jQuery('.slider-prev .fa-minus-circle').addClass('fa-angle-left').removeClass('fa-minus-circle');
    jQuery('.slider-next .fa-minus-circle').addClass('fa-angle-right').removeClass('fa-minus-circle');


}

function elementosteams(){
     jQuery(".slide-out-widget-area-toggle a > span").remove();
     jQuery(".slide-out-widget-area-toggle a").append('<div class="menu-runwild"><img src="/wp-content/uploads/menu2.gif"><div class="text-menu">Menu</div></div>');
     jQuery(".off-canvas-menu-container").append('<div class="menu-socials-down"><div class="menu-info-down"><div class="info-down-left"><h6><a href="mailto:info@runwildagency.com">info@runwildagency.com</a></h6></div><div><h6 class="pr-xsm"><a href="https://www.instagram.com/runwildagency/" target="_blank">instagram</a></h6></div><div><h6 class="pr-xsm"><a href="https://www.linkedin.com/company/runwildagency/" target="_blank">linkedin</a></h6></div></div></div>');

     jQuery(".pum-close").prepend('<div class="cerrarpopup"></div>');
     jQuery(".talent-btn").prepend('<div class="title-viewas"><h6>View as:</h6></div');
     jQuery(".menu li:nth-child(1) a").prepend('<span class="menu-num-sm">01</span>');
     jQuery(".menu li:nth-child(2) a").prepend('<span class="menu-num-sm">02</span>');
     jQuery(".menu li:nth-child(3) a").prepend('<span class="menu-num-sm">03</span>');
     jQuery(".menu li:nth-child(4) a").prepend('<span class="menu-num-sm">04</span>');
}


function menuthings(){
    jQuery('.menu-socials-down').hide();
    jQuery(".closed").click(function() {
        var res = jQuery(".text-menu").text();
        console.log(res);
        if (jQuery(".text-menu").text() == "MenuMenu"){
            jQuery(".text-menu").text("Close");
        }
        else{
            jQuery(".text-menu").text("Menu");
        }
        jQuery(".menu-socials-down").fadeToggle("fast");
      });

}

function offsetCalculate(){
  /*  var parentLeft = jQuery('.inner-toggle-wrap').offset();
    var widthdelcontainer = jQuery('.inner-toggle-wrap').width();
    jQuery('.nectar-inherit-h2').css({
        'left': parentLeft.left
    });
    jQuery('.nectar-inherit-h2 > i').css({
        'left': widthdelcontainer - 40 + 'px'
    })*/
}

function removeLoader(){
    setTimeout(()=>{
       let loader = document.getElementById('loader');
       jQuery(loader).fadeOut(300);
    },
               1200);
  }


  function popups(){
  // Talent 1 //
    jQuery('.talent1').on('click', function () {
        PUM.open(71)
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: visible');
    });
    jQuery('#pum-71').on('pumBeforeClose', function () {
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: hidden');
      });

// Talent 2 //
    jQuery('.talent2').on('click', function () {
        PUM.open(78);
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: visible');
    });

    jQuery('#pum-78').on('pumBeforeClose', function () { PUM.open(371);
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: visible');
    });

    jQuery('#pum-371').on('pumBeforeClose', function () {
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: hidden');
      });


// Talent 5 //
    jQuery('.talent5').on('click', function () {
        PUM.open(375);
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: visible');
    });

    jQuery('#pum-375').on('pumBeforeClose', function () {
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: hidden');
      });



}


function hidelogoscroll(){
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop()>100)
         {
            jQuery('.logoprincipal').fadeOut(50);
            jQuery('.logoprincipal').hide(0);
         }
        else
         {
            jQuery('.logoprincipal').show(0);
            jQuery('.logoprincipal').fadeIn(0);

         }
     });
}


jQuery(document).ready(function () {
   //  elementosteams();
   //  menuthings();
   //  popups();
   //  hidelogoscroll();

    if(window.outerWidth < 480) {
        jQuery(".privacy_terms").text("Privacy");
    }
        var width = jQuery(window).width();
        if (width < 480){
        jQuery(".privacy_terms").text("Privacy");
        }


   /* offsetCalculate();
    setTimeout(function() {
        quitarclase1();
    }, 1000);
});
jQuery(window).resize(function(){
    offsetCalculate();*/

    // Infinite slider
    const slider = document.querySelector('.strip-slider');
    // setInterval(() => {
    //     const currentScroll = slider.scrollLeft;
    //     slider.scrollLeft +=100;
    //     if (slider.scrollLeft === slider.scrollLeft) {
    //         clearInterval(this);
    //         console.log(slider.scrollLeft === currentScroll)
    //     }
    // }, 100);
    slider.scrollLeft = (slider.scrollWidth - slider.clientWidth)/2;

});
