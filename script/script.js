{
  const welcome = () => {
    console.log("Hej! strona o mnie. Zapraszam do zapoznania się :)");
  };

  const photoChange = () => {
    const buttonElement = document.querySelector(".js-button");
    const imageElement = document.querySelector(".js-image");
    const photo1 = "https://i.postimg.cc/JnCDkf3B/IMG-20160831-173342.jpg";
    const photo2 = "https://i.postimg.cc/66df04mb/pi-karze-2016-6.jpg";

    buttonElement.addEventListener("click", () => {
      imageElement.src = imageElement.src == photo1 ? photo2 : photo1;
    });
  };

  const init = () => {
    welcome();
    photoChange();
  };

  init();
}
