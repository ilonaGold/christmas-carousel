const next = document.getElementById("next");
const prev = document.getElementById("previous");
const img = document.getElementById("img");
const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0;
const allImgs = imgs.length;

let imgUrl = img.getAttribute("src");
let imgAlt = img.getAttribute("alt");


function displayImg(num) {
    imgUrl = imgs[num].src;
    imgAlt = imgs[num].alt;
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", imgAlt);
}

function moveToNextImg() {
   if (imgNum === allImgs - 1) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    displayImg(imgNum);
 }

function moveToPrevImg() {
   
    if (imgNum === 0) {
        imgNum = allImgs - 1;
    } else {
        imgNum--;
    }
    displayImg(imgNum);
}

next.addEventListener("click", moveToNextImg);
prev.addEventListener("click", moveToPrevImg);

