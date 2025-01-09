const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
const slideCount = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
      if (i === index) {
          slide.classList.add('active');
      } else {
          slide.classList.remove('active');
      }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slideCount) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideCount - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);