$(document).ready(function(){

    var easter_egg = new Konami();
    easter_egg.load('https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/10945670_10153112801843401_803602855809665036_n.jpg?oh=38527a8de28be30d0281a8e57699b6f5&oe=578EDFAA&__gda__=1468148620_7b8d8671a54156d8e2670ca2f39822dd');

    var container = $('.cheidi .col-md-12').first();
    var page_id = container.attr('id');
    $('.'+page_id).addClass('selected');
});