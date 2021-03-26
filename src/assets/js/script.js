import * as $ from 'jquery';

$(document).ready(function(){
    let slider = $('.slider_wrapper');

    $(slider).slick({
        infinite: true,
        loop:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows:true,
        dots:false
    });
})
