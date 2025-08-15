const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let currentIndex = 0;

document.querySelector('.arrow.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
});

document.querySelector('.arrow.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${(100 / totalSlides) * currentIndex}%)`;
}
