$(document).ready(function(){
    $('.sliders').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        delay: 500,
		autoplay: true
    });

    $('.feedback-card').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		speed: 1000,
		autoplay: true
    });

    $('.feed__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		speed: 1000,
		autoplay: true
    });
});
