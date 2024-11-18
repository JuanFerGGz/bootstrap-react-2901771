 // Índice actual de la imagen
let currentIndex = 0;

// Seleccionamos elementos
const sliderInner = document.querySelector('.slider--inner');
const images = document.querySelectorAll('.slider--inner img');
const totalImages = images.length;

// Seleccionamos los botones
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Función para cambiar a la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;  // Avanza al siguiente índice, y vuelve al inicio al llegar al final
    updateSliderPosition();
}

// Función para cambiar a la imagen anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;  // Retrocede, y va al final si el índice es menor que 0
    updateSliderPosition();
}

// Función para actualizar la posición del slider
function updateSliderPosition() {
    const offset = -currentIndex * 100;  // Calculamos el desplazamiento en base al índice actual
    sliderInner.style.transform = `translateX(${offset}%)`;
}

// Event Listeners para los botones
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);