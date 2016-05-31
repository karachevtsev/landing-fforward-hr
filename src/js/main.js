$(document).ready(function() {
    var nav = $('.navigation');
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
        loop: true,
        margin: 10,
        nav: true,
        navText : "",
        autoplay: true,
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
        loop: true,
        margin: 10,
        nav: true,
        navText : "",
        autoplay: true,
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

    // Form popup with magnificPopup
    $('.btn-popup').magnificPopup({
        type:"inline",
        mainClass: 'mfp-form'
    });

    $('.phone__order').magnificPopup({
        type:"inline",
        mainClass: 'mfp-form'
    });

    $('.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });



    //AJAX sending forms
    $('.form').submit(function() {
        $.ajax({
            type: 'POST',
            url: '/mail.php',
            data: $(this).serialize()
        }).done(function() {
            alert('Спасибо за заявку!');
            setTimeout(function() {
                $.magnificPopup.close();
                $('.form').trigger('reset');
            }, 1000);
        });
        return false;
    });

});
