console.log('Maksim')
console.log('Bas')


$(document).foundation();
$(document).ready(function(){
    $('.zero-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    });
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.zero-header').addClass('fixed-header');
    }
    else {
        $('.zero-header').removeClass('fixed-header');
    }
});