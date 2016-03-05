
var grams = null;
var container = null;


function start_spinner() {
    $('body').css('opacity', '0.4');
    $('body main').append('<div id="spinner"><i class="fa fa-spinner fa-spin"></i></div>');
    $('#spinner').css('top', $(window).height() / 2)
}


function stop_spinner() {
    $('body').css('opacity', '1');
    $('#spinner').remove();
}


function new_grams() {
    var this_url = document.URL;
    $.ajax({
        type: "GET",
        url: this_url + '&ajax=true',
        success: function(html) {
            start_spinner();
            $('.container').replaceWith($(html));
            stop_spinner();
        }
    });
}


$(document).ready(function() {
    //$('.container').empty();
    var count = 0;
    grams = $('.grams');
    function changeQuote() {
        setInterval(function(){
            new_grams();
        }, 50000);
    }
    changeQuote();
});