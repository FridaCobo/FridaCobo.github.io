document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add('animado');

  // Elementos del DOM
  const track = document.querySelector(".slick-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".slick-next");
  const prevButton = document.querySelector(".slick-prev");
  const links = document.querySelectorAll(".menu a");
  const secciones = [
      document.querySelector(".bienvenida"),
      document.querySelector(".contenido"),
      document.querySelector(".Carousel"),
      document.querySelector(".renta-seccion")
  ];
  const detalleCategoria = document.getElementById("categoria-detalle");
  const volverBtnCategoria = document.getElementById("volver-btn-categoria");
  const tituloCategoria = document.getElementById("categoria-titulo");
  const galeria = document.getElementById("galeria");
  const enviarBtn = document.getElementById("enviar-btn");
  const mensajeTextarea = document.getElementById("mensaje");
  const descripcionImagenSection = document.getElementById("descripcion-imagen");
  const volverBtnDescripcion = document.getElementById("volver-btn-descripcion");
  const tituloDescripcion = document.getElementById("titulo-descripcion");
  const textoDescripcion = document.getElementById("texto-descripcion");

  // Elementos de la sección de renta (modal)
  const modalRenta = document.getElementById('modal-renta');
  const botonRenta = document.getElementById('boton-renta');
  const cancelarRentaBtn = document.getElementById('cancelar-renta');
  const enviarRentaBtnRenta = document.getElementById('enviar-renta');
  const mensajeRentaDiv = document.getElementById('mensaje-renta');
  const folioRentaSpan = document.getElementById('folio-renta');

  let currentIndex = 0;
  let slideWidth = slides[0].getBoundingClientRect().width;

  // Función para mover el carrusel
  function moveToSlide(index) {
      const amountToMove = slideWidth * index;
      track.style.transform = `translateX(-${amountToMove}px)`;
  }

  // Inicializar el carrusel y agregar listeners a las imágenes
  slides.forEach((slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
      const img = slide.querySelector('img');
      if (img) {
          img.addEventListener('click', () => mostrarDescripcion(img.alt, img.dataset.descripcion));
      }
  });

  // Eventos de los botones del carrusel
  nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToSlide(currentIndex);
  });

  prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      moveToSlide(currentIndex);
  });

  // Adaptar el carrusel al cambio de tamaño de la ventana
  window.addEventListener("resize", () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      moveToSlide(currentIndex);
  });

  // Datos de las categorías
  const dataCategorias = {
      "Ficción": {
          imagenes: [
              { src: "f1.jpg", alt: "“La quinta estación” de N. K. Jemisin", descripcion: "Cuenta la historia de Essun, una mujer con el poder de controlar la energía de la tierra, en un mundo llamado la Quietud, donde los desastres naturales son frecuentes y devastadores. Tras el asesinato de su hijo y la desaparición de su hija, Essun emprende un viaje en medio de una nueva catástrofe global: una “quinta estación” que amenaza con destruirlo todo. A través de su historia, que también incluye sus etapas como niña (Damaya) y joven (Syenite), se explora cómo los orógenes —personas como ella— son entrenados, usados y oprimidos por la sociedad. La novela combina drama personal con crítica social, destacando temas como la discriminación, el control, la resistencia y la fuerza para sobrevivir en un mundo roto." },
              { src: "f2.jpg", alt: "El problema de los tres cuerpos-Cixin Liu", descripcion: "es una novela de ciencia ficción que comienza en la Revolución Cultural China, cuando la astrofísica Ye Wenjie es testigo del asesinato de su padre y, desilusionada con la humanidad, contacta accidentalmente a una civilización alienígena: los Trisolarianos, que habitan un planeta inestable con tres soles. Años después, el científico Wang Miao investiga suicidios de físicos y descubre un videojuego llamado Tres Cuerpos, que simula la historia del planeta Trisolaris. Pronto descubre que los alienígenas planean invadir la Tierra con ayuda de un grupo humano que ha perdido la fe en la civilización. La novela combina ciencia dura, dilemas morales y una trama sobre el destino de la humanidad frente a una amenaza superior"},
              { src: "f3.jpg", alt: "El temor de un hombre sabio-Patrick Rothfuss", descripcion: "La novela continúa la historia de Kvothe, un joven músico y arcanista, quien narra su vida al Cronista durante su estancia en la posada Roca de Guía.La historia comienza con Kvothe en la Universidad, donde enfrenta diversos conflictos que lo llevan a abandonar temporalmente sus estudios. Viaja a Vintas para servir al noble Maer Alveron, descubriendo un complot de asesinato y liderando una expedición para eliminar bandidos que amenazan las rutas comerciales. Durante su travesía, Kvothe se adentra en el mundo Fata, donde conoce a Felurian, una criatura mítica, y aprende sobre magia y el arte del amor. Posteriormente, se une a los Adem, una sociedad de guerreros, donde adquiere habilidades de combate y una comprensión más profunda del mundo. A lo largo de la novela, Kvothe continúa su búsqueda de conocimiento sobre los Chandrian, los misteriosos seres responsables de la muerte de sus padres. La narrativa explora temas como la identidad, el poder del conocimiento y la construcción de la leyenda personal. Con una prosa rica y detallada, Rothfuss expande el universo introducido en El nombre del viento, ofreciendo una historia que combina aventura, magia y reflexión filosófica"},
              { src: "f4.jpg", alt: "“The Battle for WondLa” Tony DiTerlizzi.", descripcion: "La historia sigue a Eva Nine, una joven que ha pasado su vida en un santuario subterráneo y ahora debe enfrentar un mundo exterior desconocido y transformado. Después de huir al Bosque Errante para proteger a sus seres queridos, Eva se entera de que la ciudad de Solas ha sido tomada por el humano Cadmus Pryde. Con la ayuda de un aliado inesperado, se embarca en una misión para detener a Loroc, quien amenaza con dominar tanto a los humanos como a las criaturas alienígenas del planeta Orbona. La novela explora temas como la identidad, la convivencia entre especies, y el equilibrio entre naturaleza y tecnología, mientras Eva lucha por proteger lo que ama y encontrar su lugar en un mundo cambiante." },
              { src: "f5.jpg", alt: "La ciencia de la ciencia ficción-Manuel Moreno Lupiáñez y Jordi José Pont", descripcion: "Es un libro de divulgación científica que explora cómo las obras de ciencia ficción –tanto literarias como cinematográficas– se relacionan con principios científicos reales. A lo largo de sus páginas, los autores analizan películas y series emblemáticas como Star Wars, Interstellar, El marciano, Star Trek, Godzilla, E.T., Spiderman o 2001: Una odisea del espacio, evaluando qué tan fieles son a conceptos de física, biología, tecnología o cosmología. El enfoque es ameno, accesible y educativo, usando ejemplos populares para explicar temas científicos complejos como la relatividad, los viajes espaciales, la genética o la inteligencia artificial. El libro no solo entretiene, sino que también enseña, haciendo que el lector aprenda ciencia de forma sencilla y divertida, sin necesidad de conocimientos previos. Es ideal tanto para amantes de la ciencia ficción como para quienes desean acercarse a la ciencia desde una perspectiva entretenida." },
              { src: "f6.jpg", alt: "El desván de Tesla-Neal Shusterman y Eric Elfman ", descripcion: "La historia sigue a Nick Slate, un joven de catorce años que, junto a su hermano menor y su padre, se muda a una antigua casa victoriana heredada. Al explorar el desván, Nick descubre una serie de objetos aparentemente comunes, como una tostadora, un bate de béisbol y un guante, que poseen propiedades extraordinarias. Pronto se da cuenta de que el desván actúa como un vórtice magnético, atrayendo problemas y peligros. Con la ayuda de sus nuevos amigos Mitch, Caitlin y Vincent, Nick se enfrenta a una misteriosa organización secreta llamada los Accelerati, que busca controlar el poder de estos artefactos. La novela combina elementos de ciencia ficción, aventura y humor, ofreciendo una reflexión sobre el conocimiento y el poder." },
              { src: "f7.jpg", alt: "Carbono Modificado-Richard K. Morgan", descripcion: "Ambientada en un futuro distópico, plantea un mundo donde la conciencia humana puede digitalizarse y transferirse de un cuerpo a otro, gracias a un dispositivo llamado *almacenamiento cortical*. Esto ha hecho posible la inmortalidad para los ricos y poderosos.El protagonista es Takeshi Kovacs, un exsoldado de élite que es revivido siglos después de su muerte para investigar un aparente suicidio: el de Laurens Bancroft, un millonario que cree haber sido asesinado. A medida que Kovacs se adentra en la investigación, descubre una compleja red de corrupción, poder y decadencia moral, mientras enfrenta dilemas éticos sobre identidad, cuerpo y alma.La novela combina acción, misterio, crítica social y filosofía, con un estilo noir en un entorno futurista y decadente. Carbono Modificado es la primera entrega de una trilogía protagonizada"},
              { src: "f8.jpg", alt: "El Coleccionista de Brujas-Charissa Weaks", descripcion: "La historia sigue a Raina Bloodgood, una bruja muda que utiliza hechizos manuales, quien busca vengar la desaparición de su hermana a manos de Alexus Thibault, conocido como el Coleccionista de Brujas. Cada Luna de Cosecha, Alexus visita Hueco de Plata para llevarse a una bruja y entregarla como ofrenda al Rey de la Escarcha. Sin embargo, cuando el Príncipe del Este ataca la ciudad, Raina se ve obligada a salvar a Alexus con su magia para mantener viva la posibilidad de encontrar a su hermana. Así, sus destinos se entrelazan, enfrentándose a una antigua maldición que pondrá a prueba sus lealtades y sentimientos.La novela ha sido bien recibida por su desarrollo de personajes, especialmente la protagonista femenina, Raina, y su relación con Alexus. Los lectores destacan la construcción del sistema mágico y la trama de venganza y sacrificio. El libro está disponible en formato físico y digital, con un precio aproximado de $159 MXN en plataformas como Apple Books"},
              { src: "f9.jpg", alt: "El nombre del viento-atrick Rothfuss", descripcion: "La historia se estructura en forma de narración: un escribano llamado Cronista encuentra a Kvothe y lo convence de contar su verdadera historia en tres días. Este primer libro cubre el primer día del relato. Kvothe narra su infancia como parte de una troupe de artistas itinerantes, la tragedia que lo deja huérfano a manos de los Chandrian (unas misteriosas criaturas legendarias), y su lucha por sobrevivir en la miseria.Posteriormente, Kvothe logra ingresar a la Universidad, donde estudia magia (llamada *nominación*) y busca respuestas sobre los Chandrian. A lo largo del libro, enfrenta desafíos intelectuales, económicos y personales, incluyendo su tensa relación con el maestro Hemme, su amistad con Sim y Wil, y su amor frustrado por la esquiva Denna.El libro es una mezcla de fantasía épica, narrativa lírica y construcción de un mundo profundo, con un protagonista tan brillante como arrogante, en una historia que reflexiona sobre el poder de los mitos, la música, el conocimiento y el nombre de las cosas." }
          ]
      },
      "Romance": {
          imagenes: [
              { src: "r1.jpg", alt: "Antes de diciembr-Joana Marcús", descripcion: "La historia sigue a Jenna Brown, una joven que inicia su primer año universitario lejos de su familia y amigos. Su novio, Montgomery (Monty), propone una relación abierta a distancia, permitiéndoles explorar nuevas experiencias sin comprometer su amor. Jenna acepta, aunque con dudas, y se ve atraída por Jack, el mejor amigo del compañero de habitación de su amiga Caitlin. A medida que se acerca diciembre, fecha en la que se reencuentra con Monty, Jenna se enfrenta a dilemas emocionales y personales que cuestionan su relación y sus propios sentimientos .​La novela ha sido bien recibida por su desarrollo de personajes y la química entre los protagonistas. Los lectores destacan la trama envolvente y los giros inesperados que mantienen el interés a lo largo de la historia. Sin embargo, algunos comentan que ciertos temas se tratan de manera superficial, lo que puede restar profundidad a la trama .​" },
              { src: "r2.jpg", alt: "La química del amor-Ali Hazelwood ", descripcion: "La historia sigue a Bee Königswasser, una neuroingeniera que, tras años de sacrificios en el mundo académico, recibe la oportunidad de liderar un proyecto de neuroingeniería en la NASA. Sin embargo, se ve obligada a trabajar junto a Levi Ward, su antiguo compañero de universidad y archienemigo.​A medida que avanzan en el proyecto, Bee enfrenta sabotajes y obstáculos que amenazan su carrera. Sorprendentemente, Levi comienza a apoyarla, desafiando su percepción de él y despertando sentimientos inesperados. La novela explora temas como la rivalidad transformada en colaboración, la superación personal y el amor en un entorno científico.​Los lectores destacan la química entre los protagonistas, el humor presente en la narrativa y la representación de mujeres en campos científicos. Es una lectura recomendada para quienes disfrutan de historias románticas con un toque de ciencia y feminismo." },
              { src: "r3.jpg", alt: "Bajo la misma estrella-John Green", descripcion: " La historia sigue a Hazel Grace Lancaster, una adolescente de 16 años que padece cáncer de tiroides con metástasis en los pulmones, lo que le obliga a usar un tanque de oxígeno llamado Philip. Sus padres la inscriben en un grupo de apoyo para jóvenes con cáncer, donde conoce a Augustus Waters, un joven de 17 años que perdió una pierna debido a un osteosarcoma. A pesar de sus circunstancias, ambos desarrollan una profunda conexión y se enamoran.​Juntos, Hazel y Augustus emprenden un viaje a Ámsterdam para conocer al autor del libro favorito de Hazel, Un dolor imperial. Sin embargo, descubren que el escritor es un hombre amargado y decepcionante. A pesar de esta experiencia, su relación se fortalece. Lamentablemente, la salud de Augustus empeora y fallece, dejando a Hazel devastada pero agradecida por el amor que compartieron.​La novela aborda temas como el amor, la muerte, la enfermedad y la búsqueda de significado en la vida. Ha sido aclamada por su emotividad y realismo, y fue adaptada al cine en 2014, protagonizada por Shailene Woodley y Ansel Elgort." },
              { src: "r4.jpg", alt: "La hipótesis del amor-Ali Hazelwood", descripcion: "La historia sigue a Olive Smith, una estudiante de doctorado en biología en la Universidad de Stanford, quien no cree en las relaciones amorosas duraderas. Para demostrarle a su mejor amiga Ahn que ha superado a su exnovio, Olive finge estar en una relación con Adam Carlsen, un joven y reputado profesor conocido por su actitud distante y su carácter difícil. Lo que comienza como una farsa se complica cuando ambos comienzan a desarrollar sentimientos genuinos el uno por el otro. La novela explora temas como la identidad personal, la química entre los protagonistas y los desafíos en el mundo académico. Es una historia que combina romance, humor y una crítica sutil a la discriminación de género en la ciencia .​La novela ha sido bien recibida por su desarrollo de personajes y su mezcla de comedia romántica con temas científicos. Es especialmente popular entre los lectores que disfrutan de historias de amor ambientadas en el ámbito académico." },
              { src: "r5.jpg", alt: "Boulevard- Flor M. Salvador", descripcion: "La historia sigue a Hasley Weigel, una joven de 17 años, y Luke Howland, un chico de 19 años que lucha con problemas de adicción. Tras un encuentro casual, los dos desarrollan una relación profunda y emocionalmente compleja. Luke, atrapado en la desesperación y las drogas, encuentra en Hasley una fuente de apoyo, mientras que ella, aunque enfrentando sus propios desafíos, se convierte en su refugio emocional. Juntos, crean su propio *Boulevard*, un símbolo de su conexión y su camino compartido en medio de las dificultades que enfrentan. La novela aborda temas como la adicción y la salud mental, mostrando los efectos de la adicción y el abuso en los jóvenes, y cómo las relaciones pueden ser tanto sanadoras como desafiantes. Además, explora el crecimiento personal de los personajes, quienes enfrentan sus traumas y miedos en un proceso de autodescubrimiento y sanación. La saga tiene varias secuelas: Boulevard. Después de él, que continúa la historia desde la perspectiva de Hasley; Boulevard. Antes de ella, que es una precuela que explora el pasado de Luke y su relación anterior con Bella Adams; y Boulevard. Eterno, que revisita los eventos del primer libro desde el punto de vista de Luke, proporcionando una nueva perspectiva sobre su relación con Hasley. La novela está recomendada para lectores a partir de 14 años debido a su tratamiento de temas delicados como la adicción y el maltrato familiar. Aunque no contiene contenido sexual explícito, la trama es emocionalmente intensa, lo que la hace adecuada para adolescentes maduros. Es una historia de amor compleja que explora el lado oscuro de las emociones humanas y cómo la conexión con otra persona puede ser el faro en medio de la tormenta." },
              { src: "r6.jpg", alt: "Farsa de amor a la española- Elena Armas", descripcion: "La historia sigue a Catalina Martín, conocida como Lina, una joven española que, tras una ruptura amorosa en Estados Unidos, regresa a España para la boda de su hermana. Presionada por las expectativas familiares y temerosa de enfrentar las preguntas sobre su soltería, Lina inventa un novio. Con solo cuatro semanas para encontrar a alguien que la acompañe y finja ser su pareja, se ve obligada a recurrir a Aaron Blackford, su compañero de trabajo al que no soporta. Aaron, con su actitud seria y distante, acepta la propuesta, y juntos emprenden un viaje transatlántico lleno de situaciones cómicas y tensiones románticas .​La novela se caracteriza por su tono humorístico, diálogos ágiles y una química palpable entre los protagonistas. A lo largo de la trama, se exploran temas como las expectativas sociales, la identidad personal y la evolución de las relaciones. Elena Armas logra combinar elementos de comedia romántica con una narrativa fresca y entretenida, consolidándose como una de las voces destacadas en el género romántico contemporáneo.​Para aquellos interesados en historias de amor con toques de humor y personajes entrañables, Farsa de amor a la española es una lectura recomendada." },
                { src: "r7.jpg", alt: "Las reglas del juego-Sarah Adams", descripcion: "La historia sigue a Bree Camden, una joven que, tras un accidente que pone fin a su sueño de ser bailarina, se dedica a dirigir su propia escuela de danza. Su vida da un giro inesperado cuando Nathan Donelson, su mejor amigo y estrella de fútbol americano, compra el edificio donde se encuentra su negocio. Aunque Bree se siente incómoda con la situación, un incidente en el que, bajo los efectos del alcohol, menciona en una entrevista que ella y Nathan están destinados hace que el mundo entero crea que están juntos. Con la Super Bowl a la vista, ambos se ven obligados a fingir una relación durante tres semanas para evitar una crisis de imagen. A lo largo de este tiempo, sus sentimientos reales comienzan a aflorar, lo que pone en riesgo su amistad y la posibilidad de algo más. La novela ha sido bien recibida por los lectores, destacando su tono ligero, divertido y la química entre los protagonistas. Aunque algunos mencionan que la historia es predecible, la consideran disfrutable para quienes buscan una lectura romántica sin complicaciones. La novela se ha convertido en un fenómeno en redes sociales y es recomendada para aquellos que disfrutan de historias de amor con toques de humor y situaciones entrañables." },
                { src: "r8.jpg", alt: "Rojo, blanco y sangre azul-Casey McQuiston", descripcion: "La historia sigue a Alex Claremont-Díaz, hijo de la primera presidenta de Estados Unidos, y Henry, el príncipe de Inglaterra. Alex es un joven carismático y ambicioso, mientras que Henry es reservado y vive bajo las estrictas expectativas de la realeza. Tras un incidente público en una boda real, los dos gobiernos deciden que deben fingir una amistad para evitar una crisis diplomática. Sin embargo, lo que comienza como una estrategia política se convierte en una relación más profunda y auténtica, desafiando las normas de sus respectivos mundos. La novela aborda temas como la lucha por la identidad y la autenticidad en medio de presiones políticas y sociales, el desarrollo de una relación romántica genuina, y las dinámicas familiares y políticas que afectan las decisiones personales. La obra recibió elogios por su representación positiva de una relación LGBT, por sus personajes bien desarrollados y por su trama divertida y emotiva. Fue incluida en la lista de los más vendidos del New York Times y ganó premios como el Goodreads Choice Award 2019 a la mejor novela romántica y al mejor debut." },
                { src: "r9.jpg", alt: "El mapa de los anhelos- Alice Kellen,", descripcion: "La historia sigue a Grace Peterson, una joven que ha vivido atrapada en la rutina de cuidar a su hermana Lucy, quien padece leucemia. Sin embargo, tras la muerte de Lucy, Grace se siente vacía y sin rumbo, enfrentando una profunda pérdida y un vacío existencial. Un día, recibe un juego llamado *El mapa de los anhelos* que la lleva a conocer a Will Tucker, un joven con un pasado doloroso. Juntos emprenden un viaje emocional que les permitirá confrontar sus miedos, secretos y deseos más profundos. A lo largo de la historia, Grace y Will aprenden que el verdadero propósito de la vida no siempre es salvar a los demás, sino aprender a salvarse a uno mismo. La novela ha sido muy bien recibida por los lectores, quienes destacan la forma en que aborda temas profundos como el duelo, la enfermedad y la salud mental. Los personajes son complejos y realistas, y la narrativa, intensa y emocional, ha conmovido a muchos. Aunque algunos mencionan que la trama puede ser predecible en algunos momentos, la profundidad emocional compensa este aspecto. Además, Netflix ha anunciado la adaptación de El mapa de los anhelos a una miniserie, destacando la importancia de tratar temas como la depresión y la ansiedad en la sociedad actual. Si te atraen historias de dolor, sanación y amor, esta novela es una excelente opción que promete tocar el corazón." }

            ]
        },
        "Infantil": {
            imagenes: [
                { src: "i1.jpg", alt: "Libro 1", descripcion: "" },
                { src: "i2.jpg", alt: "Libro 2", descripcion: "" },
                { src: "i3.jpg", alt: "Libro  3", descripcion: "" },
                { src: "i4.jpg", alt: "Libro  4", descripcion: "" },
                { src: "i5.jpg", alt: "Libro  5", descripcion: "" },
                { src: "i6.jpg", alt: "Libro  6", descripcion: "" },
                { src: "i7.jpg", alt: "Libro  7", descripcion: "" },
                { src: "i8.jpg", alt: "Libro  8", descripcion: "" },
                { src: "i9.jpg", alt: "Libro  9", descripcion: "" }
            ]
        },
        "Juvenil": {
            imagenes: [
                { src: "j1.jpg", alt: "Libro  1", descripcion: "   " },
                { src: "j2.jpg", alt: "Libro  2", descripcion: "" },
                { src: "j3.jpg", alt: "Libro  3", descripcion: "" },
                { src: "j4.jpg", alt: "Libro  4", descripcion: "" },
                { src: "j5.jpg", alt: "Libro  5", descripcion: "" },
                { src: "j6.jpg", alt: "Libro  6", descripcion: "" },
                { src: "j7.jpg", alt: "Libro  7", descripcion: "" },
                { src: "j8.jpg", alt: "Libro  8", descripcion: "" },
                { src: "j9.jpg", alt: "Libro  9", descripcion: "" }
            ]
        }
    };

    // Función para mostrar la descripción de la imagen con animación
    function mostrarDescripcion(titulo, texto) {
        tituloDescripcion.textContent = titulo;
        textoDescripcion.textContent = texto;
        secciones.forEach(sec => sec.classList.add("oculto"));
        detalleCategoria.classList.add("oculto");
        descripcionImagenSection.classList.remove("oculto");

        // Agregar clase para la animación
        setTimeout(() => {
            descripcionImagenSection.classList.add("mostrar");
        }, 50); // Pequeño retraso para asegurar que la clase se aplique después de que el display cambie
    }

    // Eventos de los enlaces de categoría
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const categoria = link.textContent;

            // Ocultar la descripción del libro al cambiar de categoría
            descripcionImagenSection.classList.add("oculto");

            if (dataCategorias[categoria]) {
                secciones.forEach(sec => sec.classList.add("oculto"));
                tituloCategoria.textContent = categoria;
                galeria.innerHTML = "";

                dataCategorias[categoria].imagenes.forEach(libro => {
                    const img = document.createElement("img");
                    img.src = libro.src;
                    img.alt = libro.alt;
                    img.dataset.descripcion = libro.descripcion;
                    img.addEventListener('click', () => mostrarDescripcion(libro.alt, libro.descripcion));
                    galeria.appendChild(img);
                });

                detalleCategoria.classList.remove("oculto");
            }
        });
    });

    // Evento del botón "Volver" de la sección de categorías
    volverBtnCategoria.addEventListener("click", () => {
        detalleCategoria.classList.add("oculto");
        secciones.forEach(sec => sec.classList.remove("oculto"));

        // Ocultar la descripción del libro al volver
        descripcionImagenSection.classList.add("oculto");
    });

    // Evento del botón "Volver" de la sección de descripción de la imagen
    volverBtnDescripcion.addEventListener("click", () => {
        descripcionImagenSection.classList.remove("mostrar"); // Remover clase de animación al ocultar
        setTimeout(() => {
            descripcionImagenSection.classList.add("oculto");
            // Mostrar la sección anterior, que podría ser la bienvenida/contenido/carrusel o la categoría
            if (!detalleCategoria.classList.contains("oculto")) {
                detalleCategoria.classList.remove("oculto");
            } else {
                secciones.forEach(sec => sec.classList.remove("oculto"));
            }
        }, 300);
    });

    // Manejar el evento de enviar mensaje del textarea
    enviarBtn.addEventListener("click", () => {
        const mensaje = mensajeTextarea.value.trim();

        if (mensaje) {
            alert("Tu mensaje fue enviado: " + mensaje);
            mensajeTextarea.value = ''; // Limpiar el textarea después de enviar
        } else {
            alert("Por favor, escribe un mensaje.");
        }
    });

    // ** Sección de Renta de Libros (Modal) **
    botonRenta.addEventListener('click', function() {
        modalRenta.style.display = 'flex'; // Usamos flex para centrar el modal
        mensajeRentaDiv.style.display = 'none'; // Asegurarse de que el mensaje esté oculto
    });

    cancelarRentaBtn.addEventListener('click', function() {
        modalRenta.style.display = 'none';
    });

    enviarRentaBtnRenta.addEventListener('click', function() {
        const folioAleatorio = Math.random().toString(36).substring(2, 10).toUpperCase();
        folioRentaSpan.textContent = folioAleatorio;
        mensajeRentaDiv.style.display = 'block';
        modalRenta.style.display = 'none';

        // Opcional: Limpiar el formulario
        document.getElementById('nombre-renta').value = '';
        document.getElementById('libro-renta').value = '';
        document.getElementById('fecha-renta').value = '';
        document.getElementById('fecha-entrega').value = '';
        document.getElementById('correo-renta').value = '';
    });

    // Cerrar el modal si se hace clic fuera del contenido del formulario
    window.addEventListener('click', function(event) {
        if (event.target === modalRenta) {
            modalRenta.style.display = 'none';
        }
    });

    // Agregar event listeners a las imágenes del carrusel que se cargan dinámicamente
    const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('slick')) {
                        const img = node.querySelector('img');
                        if (img) {
                            img.addEventListener('click', () => mostrarDescripcion(img.alt, img.dataset.descripcion));
                        }
                    }
                });
            }
        }
    });

    observer.observe(track, { childList: true });
});