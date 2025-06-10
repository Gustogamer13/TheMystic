const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active', 'prev', 'next');
    if (i === index) {
        img.classList.add('active');
    } else if (i === (index - 1 + images.length) % images.length) {
        img.classList.add('prev');
    } else if (i === (index + 1) % images.length) {
        img.classList.add('next');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);