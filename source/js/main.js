// Preloader (W3Schools Discord Server)

var tempStyle = document.createElement("style");
tempStyle.innerHTML = "html, body { overflow: hidden; }";
document.getElementsByTagName("head")[0].appendChild(tempStyle);

$(window).on("load",function(){
    $(".scroll-top").fadeOut(1);
    $(".preloader-container").fadeOut(500);
    tempStyle.parentNode.removeChild(tempStyle);
});

// Scroll Top (https://codepen.io/airwin1391/pen/XepogN)

$(function(){ 
    // Scroll Event
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 500) $('.scroll-top').fadeIn('slow');
        if (scrolled < 500) $('.scroll-top').fadeOut('slow');
    });
    // Click Event
    $('.scroll-top').click(function () {
        $("html, body").animate({ scrollTop: "0" },  500);
    });
});
