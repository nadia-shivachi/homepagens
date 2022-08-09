console.log("Hej! strona o mnie. Zapraszam do zapoznania się :)")

let imageElement = document.querySelector(".js-image");
let buttonElement = document.querySelector(".js-button");

let photo1 = "https://i.postimg.cc/JnCDkf3B/IMG-20160831-173342.jpg";
let photo2 = "https://i.postimg.cc/66df04mb/pi-karze-2016-6.jpg";

buttonElement.addEventListener("click", () => {
    imageElement.src = photo2;
})
