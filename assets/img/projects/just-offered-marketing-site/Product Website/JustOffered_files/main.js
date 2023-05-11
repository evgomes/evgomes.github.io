// owl carousel customization..........


$(document).ready(function() {
    var owl = $('.owl-one');
    owl.owlCarousel({
        dots: false,
        nav: true,
        loop: false,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            425: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 3,
            },

        },
    });
});




$(document).ready(function() {
    var owl = $('.owl-two');
    owl.owlCarousel({
        nav: false,
        loop: false, 
        dotsEach: true, 
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 24,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            425: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 2,
            },

        },
    });

});



// dropdown sub menu on navigation........

$(function() {
    $(document).click(function(event) {
        $('.dropdown-submenu').collapse('hide');
    });
});