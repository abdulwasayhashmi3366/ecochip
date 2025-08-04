
$(".navbar-toggle").click(function () {
    $(this).toggleClass("active");
    $("nav").slideToggle();
})

$(document).ready(function () {
    $('.services-slide').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        // centerMode: true,
        // centerPadding: '140px',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev pull-left"> <img src="images/Icon awesome-arrow-right.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><img src="./images/right-arrow.png" alt=""> </button>',
        dots: true,
        autoplay: true,
        infinite: true,
        autoplayspeed: 1000,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});