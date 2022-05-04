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

var images = [],
    x = -1;
images[0] = "img/bag.gif";
images[1] = "img/watch.gif";
images[2] = "img/jacket.gif";




//number count
let happyusercount = setInterval(updated);
let reviewcount = setInterval(review_updated);
let downloadcount = setInterval(download_update);


let happyuser = 0;
let review = 0;
let download = 0;


// $(window).scroll(function() {
//     if (document.getElementById("powerful-solutions")) {
//         if (happyusercount === 0) {
//             happyusercount = setInterval(updated);
//         }

//     }
// });


function updated() {
    var count = document.getElementById("counter");
    count.innerHTML = ++happyuser + "k";
    if (happyuser === 500) {
        clearInterval(happyusercount);
    }
}

function review_updated() {
    var reviews_count = document.getElementById("reviews-count");
    reviews_count.innerHTML = ++review + "k";
    if (review === 50) {
        clearInterval(reviewcount);
    }
}

function download_update() {
    var download_count = document.getElementById("download-count");
    download_count.innerHTML = ++download + "k";
    if (download === 100) {
        clearInterval(downloadcount);
    }
}