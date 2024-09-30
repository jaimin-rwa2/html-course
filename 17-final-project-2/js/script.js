// $("selector").events(function () {
//     // $(".class").hide();
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass('on-scroll-header');
    } else {
        $('header').removeClass('on-scroll-header');
    };
});

$(".toggle-nav").click(function () {

    $("header nav").slideToggle()
})