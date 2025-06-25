let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    updateCarousel(slides);
}

function updateCarousel(slides) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

setInterval(() => {
    moveSlide(1);
}, 4000);
