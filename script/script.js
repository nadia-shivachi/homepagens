console.log("Hej! strona o mnie. Zapraszam do zapoznania się :)")

let photo1 = "https://i.postimg.cc/JnCDkf3B/IMG-20160831-173342.jpg";
let photo2 = "https://i.postimg.cc/66df04mb/pi-karze-2016-6.jpg";

function changeImage(obj) {
    obj.src = (obj.src == photo1) ? photo2 : photo1;
}