// const
const loadBtn = document.getElementById("load-btn");
const imageBoxes = document.getElementById("image-boxes");

let url = "https://picsum.photos/300?random=";

function loadImages(){

    let addedImages = 10; // amount of images i want to add;
    for(let index = 0; index < addedImages; index++){
        let random = Math.floor(Math.random() * 2000);
        let Finalurl = url + random;

        const loadImage = document.createElement("img");

        loadImage.src = Finalurl;

        imageBoxes.appendChild(loadImage);
    }
};

loadBtn.addEventListener("click", loadImages);