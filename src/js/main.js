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

});
