// Definindo as variáveis
let slideIndex = 0;

// Função para mover o slide
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

// Função para atualizar o carrossel
function updateCarousel(slides) {
    // Reseta todos os slides
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

// Inicialização automática do carrossel
setInterval(() => {
    moveSlide(1);  // Move automaticamente a cada 3 segundos
}, 3000);

