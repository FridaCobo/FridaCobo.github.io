document.addEventListener("DOMContentLoaded", function () {
  // Carrusel
  const track = document.querySelector(".slick-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".slick-next");
  const prevButton = document.querySelector(".slick-prev");
  let currentIndex = 0;
  let slideWidth = slides[0].getBoundingClientRect().width;

  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  function moveToSlide(index) {
    const amountToMove = slideWidth * index;
    track.style.transform = `translateX(-${amountToMove}px)`;
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
  });

  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentIndex);
  });

  // Categorías dinámicas
  const links = document.querySelectorAll(".menu a");
  const secciones = [
    document.querySelector(".bienvenida"),
    document.querySelector(".contenido"),
    document.querySelector(".Carousel")
  ];
  const detalle = document.getElementById("categoria-detalle");
  const volverBtn = document.getElementById("volver-btn");
  const titulo = document.getElementById("categoria-titulo");
  const galeria = document.getElementById("galeria");

  const dataCategorias = {
    "Ficción": {
      imagenes: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg", "f5.jpg", "f6.jpg", "f7.jpg", "f8.jpg","f9.jpg"]
    },
    "Romance": {
      imagenes: ["r1.jpg", "r2.jpg", "r3.jpg", "r4.jpg", "r5.jpg", "r6.jpg", "r7.jpg", "r8.jpg","r9.jpg"]
    },
      "Infantil": {
      imagenes: ["i1.jpg", "i2.jpg", "i3.jpg", "i4.jpg", "i5.jpg", "i6.jpg", "i7.jpg", "i8.jpg","i9.jpg"]
    },
    "Juvenil": {
      imagenes:  ["j1.jpg", "j2.jpg", "j3.jpg", "j4.jpg", "j5.jpg", "j6.jpg", "j7.jpg", "j8.jpg","j9.jpg"]
    }
  };

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const categoria = link.textContent;

      if (dataCategorias[categoria]) {
        secciones.forEach(sec => sec.classList.add("oculto"));
        titulo.textContent = categoria;
        galeria.innerHTML = "";

        dataCategorias[categoria].imagenes.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = `Imagen de ${categoria}`;
          galeria.appendChild(img);
        });

        detalle.classList.remove("oculto");
      }
    });
  });

  volverBtn.addEventListener("click", () => {
    detalle.classList.add("oculto");
    secciones.forEach(sec => sec.classList.remove("oculto"));
  });
});
// Manejar el evento de enviar mensaje
const enviarBtn = document.getElementById("enviar-btn");
const mensajeTextarea = document.getElementById("mensaje");

enviarBtn.addEventListener("click", () => {
  const mensaje = mensajeTextarea.value.trim();

  if (mensaje) {
    alert("Tu mensaje fue enviado: " + mensaje);
    mensajeTextarea.value = ''; // Limpiar el textarea después de enviar
  } else {
    alert("Por favor, escribe un mensaje.");
  }
});