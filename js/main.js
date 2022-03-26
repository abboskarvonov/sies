// Navbar

// Swipper slider
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

$(document).ready(function(){
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 80) {
            $('#nav').addClass('bg-menu shadow-menu');
            $('#header').addClass('minus');
        }
        else {
            $('#nav').removeClass('bg-menu shadow-menu');
            $('#header').removeClass('minus');
        }
    });
});

$(document).ready(function(){
    $(window).bind('scroll', function(){
        if($(window).scrollTop() > 200) {
            $('#left-bar').addClass('left-bar-active')
        }
        else {
            $('#left-bar').removeClass('left-bar-active')
        }
    })
})