const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    const slidesCount = document.querySelectorAll('.carousel-item').length;
    if (currentIndex < slidesCount - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
});

// Show the first slide initially
showSlide(currentIndex);


