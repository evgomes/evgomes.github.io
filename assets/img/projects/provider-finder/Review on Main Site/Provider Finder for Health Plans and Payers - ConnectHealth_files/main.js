// owl carousel customisation..........

$(document).ready(function() {
    $('.owl-one').owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        margin: 24,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            425: {
                items: 2,

            },
            768: {
                items: 3,

            },
            1024: {
                items: 3,
            }
        }
    })
})

$(document).ready(function() {
    $('.owl-two').owlCarousel({
        dots: true,
        dotsEach: true,
        loop: true,
        autoplay: true,
        margin: 14,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            1440: {
                items: 2

            },

        }
    })
})


// dropdown sub menu on navigation........

$(function() {
    $(document).click(function(event) {
        $('.dropdown-submenu').collapse('hide');
    });
});