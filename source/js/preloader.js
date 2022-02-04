// Hide The Scrollbars
var tempStyle = document.createElement("style");
tempStyle.innerHTML = "html, body { overflow: hidden; }";
document.getElementsByTagName("head")[0].appendChild(tempStyle);

// Main Preloader
$(window).on("load",function(){
    $(".preloader-container").fadeOut(1500);

    // Remove Hiding Scrollbars
    tempStyle.parentNode.removeChild(tempStyle);
});
