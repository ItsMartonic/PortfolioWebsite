// PRELOADER

var tempStyle = document.createElement("style");
tempStyle.innerHTML = "html, body { overflow: hidden; }";
document.getElementsByTagName("head")[0].appendChild(tempStyle);

$(window).on("load",function(){
    var min = 1000, max = 5000;
    var delay = Math.floor(Math.random() * (max - min) + min);
    var fadeout = 1500;
    $(".preloader-container").delay(delay).fadeOut(fadeout);
    tempStyle.parentNode.removeChild(tempStyle);
});

// HIDE YOUTUBE EMBED & SCROLLBAR IN PRELOADER
