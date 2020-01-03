$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
    });
    $(".slider2").owlCarousel({
        items: 5,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
