// Selección de elementos principales
const slider = document.querySelector("#slider");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

let sliderSections = document.querySelectorAll(".slider__section");
let totalSlides = sliderSections.length;
let currentSlide = 0; // Índice de la imagen actual
const indicators = document.querySelectorAll(".indicator");

// Función para actualizar el indicador activo
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active"); // Marca el indicador como activo
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Función para mostrar el siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Aumenta el índice, asegurándose de no desbordar
  slider.style.marginLeft = `-${currentSlide * 100}%`; // Mueve el slider
  updateIndicators(currentSlide); // Actualiza los indicadores
}

// Función para mostrar el slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Decrementa el índice, asegurándose de no desbordar
  slider.style.marginLeft = `-${currentSlide * 100}%`; // Mueve el slider
  updateIndicators(currentSlide); // Actualiza los indicadores
}

// Eventos para los botones
btnRight.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide(); // Pausa y reinicia el intervalo automático
});

btnLeft.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide(); // Pausa y reinicia el intervalo automático
});

// Intervalo automático para cambiar de slide
let autoSlide = setInterval(nextSlide, 3000);

// Reinicia el intervalo cuando se interactúa manualmente
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

// Inicializar el primer indicador activo
updateIndicators(currentSlide);

// Añadir evento de click a los indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    slider.style.marginLeft = `-${(currentSlide + 1) * 100}%`; // Mueve el slider
    updateIndicators(currentSlide); // Actualiza los indicadores
  });
});

