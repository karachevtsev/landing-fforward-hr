$(document).ready(function() {
    var nav = $('.navigation');
    // Responsive toggle navigation
    $('.toggle-navigation').click(function() {
        $(this).toggleClass('on');
        $('.navigation').slideToggle();
        return false;
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if (wid > 992 && nav.is(":hidden")) {
            nav.removeAttr('style');
        }
    });

    $('.slider-comments').owlCarousel({
        // loop: true,
        margin: 10,
        nav: true,
        navText : "",
        // autoplay: true,
        fluidSpeed : 600,
        autoplayHoverPause : true,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.slider-program').owlCarousel({
        // loop: true,
        margin: 10,
        nav: true,
        navText : "",
        // autoplay: true,
        fluidSpeed : 600,
        autoplayHoverPause : true,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});
