const slides = document.querySelectorAll(".slide");

let slideIndex = 1;

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

const left = document.querySelector(".left");
const right = document.querySelector(".right");

right.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

left.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});
