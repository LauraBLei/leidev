export const carousel = () => {
  const prev = document.querySelector(".prevBtn");
  const next = document.querySelector(".nextBtn");
  const imgs = document.querySelectorAll(".carouselBox");
  const totalImgs = imgs.length;
  let imgPosition = 0;

  console.log(imgs);

  const updatePosition = () => {
    for (let img of imgs) {
      img.classList.remove("visible");
      img.classList.add("hidden");
    }
    imgs[imgPosition]?.classList.remove("hidden");
    imgs[imgPosition]?.classList.add("visible");
  };

  updatePosition();

  const nextImg = () => {
    if (imgPosition === totalImgs - 1) {
      imgPosition = 0;
    } else {
      imgPosition++;
    }
    updatePosition();
  };

  const prevImg = () => {
    if (imgPosition === 0) {
      imgPosition = totalImgs - 1;
    } else {
      imgPosition--;
    }
    updatePosition();
  };

  next.addEventListener("click", nextImg);
  prev.addEventListener("click", prevImg);
};
