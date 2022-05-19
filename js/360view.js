const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");
slider.addEventListener("input", handleInputSlider);


var slide = document.getElementById("slider").value;



window.addEventListener("load", pageLoaded);

function pageLoaded() {
    for (let i = 0; i < imagesarray.length; i++) {
        const number = i.toString().padStart(2, "00");
        console.log(number);
     
        const image = new Image();
        image.src = imagesarray[i];
        //   image.src = url;
        image.addEventListener("load", () => {
            imagesarray[i] = image;

            if (i == 0) {
                i = 0;
                loadImage(i);
                console.log("i = " + i);

            }
        });
    }
}

function loadImage(index) {
    console.log("Index = " + index);
    const ctx = canvas.getContext("2d");
    
    if (index < imagesarray.length) {
         ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(imagesarray[index], 0, 0, canvas.width, canvas.height);
    }
}

function handleInputSlider() {
    console.log(this.value);
    loadImage(this.value);
}


