const slider = document.querySelector(".slider");
const nextButton = document.querySelector(".slider-next");

nextButton.addEventListener("click", () => {
  const currentScrollPos = slider.scrollLeft;
  const slideWidth = slider.clientWidth;
  const maxScrollLeft = slider.scrollWidth - slideWidth;

  if (currentScrollPos >= maxScrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollTo({
      left: currentScrollPos + slideWidth,
      behavior: "smooth"
    });
  }
});