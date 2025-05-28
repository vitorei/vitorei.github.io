let index = 0;

// função para mover os slides usando os botões de navegação
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    index += step;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${index * 600}px)`;

    updateRadioSelection();
}

// função para atualizar a seleção do radio button
function updateRadioSelection() {
    const radios = document.querySelectorAll('.radio-buttons input');
    radios.forEach((radio, i) => {
        if (i === index) {
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });
}

// função para alterar o slide quando o radio button é clicado
function changeSlide(slideIndex) {
    index = slideIndex;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${index * 600}px)`;
    updateRadioSelection();
}
    setInterval(() => {
    moveSlide(1);
}, 3000);