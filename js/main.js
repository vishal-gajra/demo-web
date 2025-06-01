
$(document).ready(function () {
    $(".header-menu-btn").click(function () {
        $(".header .navbar .navlink").toggleClass("navlink-active");
        $(".header-section").toggleClass("header-section-toggle");
        $(".header .navbar .navlink").slideToggle(350);
       
    });
    $(".footer-heading").click(function (e) {
        $(this).parent().siblings().removeClass("active-menu");
        $(this).parent().toggleClass("active-menu");
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    })
   
});