$(document).ready(function(){
    var num = 30; //number of pixels before modifying styles

    var pos_left = $('#menu').offset().left;
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('#menu').addClass('fixed');

        } else {
            $('#menu').removeClass('fixed');
        }
    });

});