const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");
slider.addEventListener("input", handleInputSlider);

const images = [
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img01.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img02.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img03.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img04.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img05.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img06.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img07.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img08.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img09.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img10.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img11.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img12.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img13.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img14.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img15.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img16.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img17.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img18.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img19.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img20.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img21.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img22.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img23.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img24.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img25.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img26.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img27.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img28.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img29.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img30.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img31.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img32.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img33.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img34.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img35.jpg",
 "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img36.jpg",

];
window.addEventListener("load", pageLoaded);

function pageLoaded() {
    for (let i = 0; i < images.length; i++) {
        const number = i.toString().padStart(2, "00");
        console.log(number);
        // const url = `https://stockx-360.imgix.net/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1561409052&w=1000`;
        const image = new Image();
        image.src = images[i];
     //   image.src = url;
        image.addEventListener("load", () => {
            images[i] = image;
            
            if (i == 0) {
                i = 0;
                loadImage(i);
                console.log("i = "+i);
               
            }
        });
    }
}

function loadImage(index) {
    console.log("Index = "+index);
    const ctx = canvas.getContext("2d");
    if(index<36){
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
}

function handleInputSlider() {
    console.log(this.value);
    loadImage(this.value);
}