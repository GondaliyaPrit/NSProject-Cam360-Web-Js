jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
        jQuery(".header-main").addClass("darkHeader");
        jQuery(".logo").addClass("hide")
        jQuery(".logo-2").removeClass("hide-2")
    } else {
        jQuery(".header-main").removeClass("darkHeader");
        jQuery(".logo").removeClass("hide")
        jQuery(".logo-2").addClass("hide-2")
    }
});

const playbtn = document.getElementById("video-btn");
const videoplay = document.getElementById("video-section-main");
const videohide = document.getElementById("video-popup-hide");
const videoclose = document.getElementById("video-close");

//Video-play-close
playbtn.onclick = function() {

    console.log("display if block")
    videohide.style.display = "block";
    videoplay.style.display = "none";
    videoclose.style.display = "flex"
    document.getElementById("mfp-iframe").src = "https://www.youtube.com/embed/auDrQk7UuW4";

}
videoclose.onclick = function() {
    videohide.style.display = "none";
    videoplay.style.display = "flex";
    videoclose.style.display = "none"
    videoplay.style.justifyContent = "center";
    videoplay.style.alignItems = "center";
    document.getElementById("mfp-iframe").src = "";
}

//change image every 5 sec

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    console.log("starttime");
    setInterval(displayNextImage, 10000);
}

var images = [], x = -1;
images[0] = "img/bag.gif";
images[1] = "img/watch.gif";
images[2] = "img/jacket.gif";




