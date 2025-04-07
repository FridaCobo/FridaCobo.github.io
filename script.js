document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slick-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".slick-next");
    const prevButton = document.querySelector(".slick-prev");
  
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    // Establece el número de elementos a mostrar
    const slidesToShow = 1;  // Ajusta este valor según cuántos elementos quieras mostrar a la vez
  
    // Posicionar las diapositivas una al lado de la otra
    slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    });
  
    // Función para mover al índice actual
    function moveToSlide(index) {
      const amountToMove = slideWidth * index;
      track.style.transform = `translateX(-${amountToMove}px)`;
    }
  
    // Botón siguiente
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
        moveToSlide(currentIndex);
      } else {
        // Si estamos en el último elemento, vuelve al principio
        currentIndex = 0;
        moveToSlide(currentIndex);
      }
    });
  
    // Botón anterior
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        moveToSlide(currentIndex);
      } else {
        // Si estamos en el primer elemento, ir al último
        currentIndex = slides.length - 1;
        moveToSlide(currentIndex);
      }
    });
  
  });
  