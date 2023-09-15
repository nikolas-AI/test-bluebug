const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds

// Initial slide display
showSlide(slideIndex);
