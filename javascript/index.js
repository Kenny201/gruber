/*$(function() {
        var pull        = $('.ico__menu');
            menu        = $('.menu-list');
            menuHeight  = menu.height();
        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
    });*/

import 'slick-carousel';
import '../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

$(".video-inner").fancybox();

$(".slider").slick({
    autoplaySpeed: 1400,
    autoplay: true,
    infinite: true,
    prevArrow: '<div class="btn-inner--prev"><div class="btn-slider btn-prev"></div></div>',
    nextArrow: '<div class="btn-inner--next"><div class="btn-slider btn-next"></div></div>',
    dots: true,
});
$(".popular-goods__slider ").slick({
            autoplaySpeed: 1400,
            autoplay: false,
            infinite: true,
            dots: false,
            slidesToShow:4,
            prevArrow: '<div class="popular-goods__btn popular-goods__btn-prev"></div>',
            nextArrow: '<div class="popular-goods__btn popular-goods__btn-next"></div>',
        responsive: [
           {
                breakpoint: 576,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3,
                }
            },
            

            
        ]
});
$(document).ready(function () {
    $('.ico__menu').click(function () {
        var element = $('.menu-list');
        var display = element.css('display');
        if (display == 'none')
            $('.menu-list').slideDown(400);
        if (display == 'block')
            $('.menu-list').slideUp(400);
    });
});
$(document).ready(function () {
    $('.submenu__link').click(function () {
        var element = $(' .submenu-list');
        var display = element.css('display');
        if (display == 'none')
            $(' .submenu-list').slideDown(400);
        if (display == 'block')
            $('.submenu-list').slideUp(400);
    });
});

    