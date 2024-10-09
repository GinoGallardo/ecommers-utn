document.addEventListener("DOMContentLoaded", function () {
  let carouselInner = document.querySelector(".carousel-inner");
  let images = carouselInner.querySelectorAll("img");
  let index = 0;

  function updateCarousel() {
    let percentage = index * -100;
    carouselInner.style.transform = "translateX(" + percentage + "%)";
  }

  setInterval(function () {
    index++;
    if (index > images.length) {
      index = 1;
    }
    updateCarousel();
  }, 1000);
});
