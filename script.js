document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('animado');

    // Elementos del DOM
    const track = document.querySelector(".slick-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".slick-next");
    const prevButton = document.querySelector(".slick-prev");
    const menuItemsWithSubmenu = document.querySelectorAll(".menu-item-has-children"); // Selecciona los elementos de menú que tienen submenú
    const submenus = document.querySelectorAll(".submenu"); // Selecciona todos los submenús
    const links = document.querySelectorAll(".categoria-link");
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
                { src: "r5.jpg", alt: "Boulevard- Flor M. Salvador", descripcion: "La historia sigue a Hasley Weigel, una joven de 17 años, y Luke Howland, un chico de 19 años que lucha con problemas de adicción. Tras un encuentro casual, los dos desarrollan una relación profunda y emocionalmente compleja. Luke, atrapado en la desesperación y las drogas, encuentra en Hasley una fuente de apoyo, mientras que ella, aunque enfrentando sus propios desafíos, se convierte en su refugio emocional. Juntos, crean su propio *Boulevard*, un símbolo de su conexión y su camino compartido en medio de las dificultades que enfrentan. La novela aborda temas como la adicción y la salud mental, mostrando los efectos de la adicción y el abuso en los jóvenes, y cómo las relaciones pueden ser tanto sanadoras como desafiantes. Además, explora el crecimiento personal de los personajes, quienes enfrentan sus traumas y miedos en un proceso de autodescubrimiento y sanación. La saga tiene varias secuelas: Boulevard. Después de él, que continúa la historia desde la perspectiva de Hasley; Boulevard. Antes de ella, que es una precuela que explora el pasado de Luke y su relación anterior con Bella Adams; y Boulevard. Eterno, que revisita los eventos del primer libro desde el punto de vista de Luke, proporcionando una nueva perspectiva sobre su relación con Hasley. La novela está recomendada para lectores a partir de 14 años debido a su tratamiento de temas delicados como la adicción y el maltrato familiar. Aunque no contiene contenido sexual explícito, la trama es emocionalmente intensa, lo que la hace adecuada para adolescentes maduros. Es una historia de amor compleja que explora el lado oscuro de las emociones humanas y cómo la conexión con otrapersona puede ser el faro en medio de la tormenta." },
                { src: "r6.jpg", alt: "Farsa de amor a la española- Elena Armas", descripcion: "La historia sigue a Catalina Martín, conocida como Lina, una joven española que, tras una ruptura amorosa en Estados Unidos, regresa a España para la boda de su hermana. Presionada por las expectativas familiares y temerosa de enfrentar las preguntas sobre su soltería, Lina inventa un novio. Con solo cuatro semanas para encontrar a alguien que la acompañe y finja ser su pareja, se ve obligada a recurrir a Aaron Blackford, su compañero de trabajo al que no soporta. Aaron, con su actitud seria y distante, acepta la propuesta, y juntos emprenden un viaje transatlántico lleno de situaciones cómicas y tensiones románticas .​La novela se caracteriza por su tono humorístico, diálogos ágiles y una química palpable entre los protagonistas. A lo largo de la trama, se exploran temas como las expectativas sociales, la identidad personal y la evolución de las relaciones. Elena Armas logra combinar elementos de comedia romántica con una narrativa fresca y entretenida, consolidándose como una de las voces destacadas en el género romántico contemporáneo.​Para aquellos interesados en historias de amor con toques de humor y personajes entrañables, Farsa de amor a la española es una lectura recomendada." },
                { src: "r7.jpg", alt: "Las reglas del juego-Sarah Adams", descripcion: "La historia sigue a Bree Camden, una joven que, tras un accidente que pone fin a su sueño de ser bailarina, se dedica a dirigir su propia escuela de danza. Su vida da un giro inesperado cuando Nathan Donelson, su mejor amigo y estrella de fútbol americano, compra el edificio donde se encuentra su negocio. Aunque Bree se siente incómoda con la situación, un incidente en el que, bajo los efectos del alcohol, menciona en una entrevista que ella y Nathan están destinados hace que el mundo entero crea que están juntos. Con la Super Bowl a la vista, ambos se ven obligados a fingir una relación durante tres semanas para evitar una crisis de imagen. A lo largo de este tiempo, sus sentimientos reales comienzan a aflorar, lo que pone en riesgo su amistad y la posibilidad de algo más. La novela ha sido bien recibida por los lectores, destacando su tono ligero, divertido y la química entre los protagonistas. Aunque algunos mencionan que la historia es predecible, la consideran disfrutable para quienes buscan una lectura romántica sin complicaciones. La novela se ha convertido en un fenómeno en redes sociales y es recomendada para aquellos que disfrutan de historias de amor con toques de humor y situaciones entrañables." },
                { src: "r8.jpg", alt: "Rojo, blanco y sangre azul-Casey McQuiston", descripcion: "La historia sigue a Alex Claremont-Díaz, hijo de la primera presidenta de Estados Unidos, y Henry, el príncipe de Inglaterra. Alex es un joven carismático y ambicioso, mientras que Henry es reservado y vive bajo las estrictas expectativas de la realeza. Tras un incidente público en una boda real, los dos gobiernos deciden que deben fingir una amistad para evitar una crisis diplomática. Sin embargo, lo que comienza como una estrategia política se convierte en una relación más profunda y auténtica, desafiando las normas de sus respectivos mundos. La novela aborda temas como la lucha por la identidad y la autenticidad en medio de presiones políticas y sociales, el desarrollo de una relación romántica genuina, y las dinámicas familiares y políticas que afectan las decisiones personales. La obra recibió elogios por su representación positiva de una relación LGBT, por sus personajes bien desarrollados y por su trama divertida y emotiva. Fue incluida en la lista de los más vendidos del New York Times y ganó premios como el Goodreads Choice Award 2019 a la mejor novela romántica y al mejor debut." },
                { src: "r9.jpg", alt: "El mapa de los anhelos- Alice Kellen,", descripcion: "La historia sigue a Grace Peterson, una joven que ha vivido atrapada en la rutina de cuidar a su hermana Lucy, quien padece leucemia. Sin embargo, tras la muerte de Lucy, Grace se siente vacía y sin rumbo, enfrentando una profunda pérdida y un vacío existencial. Un día, recibe un juego llamado *El mapa de los anhelos* que la lleva a conocer a Will Tucker, un joven con un pasado doloroso. Juntos emprenden un viaje emocional que les permitirá confrontar sus miedos, secretos y deseos más profundos. A lo largo de la historia, Grace y Will aprenden que el verdadero propósito de la vida no siempre es salvar a los demás, sino aprender a salvarse a uno mismo. La novela ha sido muy bien recibida por los lectores, quienes destacan la forma en que aborda temas profundos como el duelo, la enfermedad y la salud mental. Los personajes son complejos y realistas, y la narrativa, intensa y emocional, ha conmovido a muchos. Aunque algunos mencionan que la trama puede ser predecible en algunos momentos, la profundidad emocional compensa este aspecto. Además, Netflix ha anunciado la adaptación de El mapa de los anhelos a una miniserie, destacando la importancia de tratar temas como la depresión y la ansiedad en la sociedad actual. Si te atraen historias de dolor, sanación y amor, esta novela es una excelente opción que promete tocar el corazón." }

            ]
        },
"Infantil": {
            imagenes: [
                { src: "i1.jpg", alt: "El gran lobo feroz- Émile Bravo" , descripcion: "Este álbum ilustrado, dirigido a niños de 3 a 6 años, ofrece una versión humorística y tierna del origen del famoso *Gran Lobo Feroz* de los cuentos clásicos. La historia comienza cuando el Pequeño Lobo, aún con colmillos de leche y su manta favorita, decide visitar a sus amigos los Tres Cerditos. Durante su viaje, se enfrenta a situaciones cómicas que lo llevan a convertirse en el Gran Lobo Feroz que todos conocemos. A lo largo del relato, se exploran temas como la rivalidad y la competitividad, presentados desde una perspectiva respetuosa y de crianza consciente. El libro destaca por sus ilustraciones expresivas y detalladas, que incluyen guiños a personajes de cuentos tradicionales, y por un final sorprendente que invita a la reflexión.La obra ha sido elogiada por su enfoque humorístico y educativo, ayudando a los niños a desmitificar y perder el miedo al *malo malísimo* de los cuentos. Además, las ilustraciones enriquecen la experiencia de lectura, permitiendo a los pequeños descubrir detalles adicionales en cada página.Este libro es una excelente opción para introducir a los niños en la literatura infantil, fomentando la imaginación y ofreciendo una visión fresca de los personajes clásicos." },
                { src: "i2.jpg", alt: " Principito de Antoine- Saint-Exupéry", descripcion: "El Principito comienza cuando un piloto se ve obligado a aterrizar su avión en medio del desierto del Sahara. Allí, inesperadamente, aparece un niño rubio y curioso que le pide que le dibuje un cordero. El piloto, sorprendido, accede y así comienza una profunda amistad. El niño, que se hace llamar El Principito, viene de un pequeño planeta llamado asteroide B-612. En él vivía solo, cuidando de tres volcanes y arrancando los baobabs que podían destruir su planeta. Un día, en su planeta apareció una rosa muy hermosa y vanidosa. Aunque el Principito la cuidaba con amor, la vanidad de la rosa le hizo dudar de sus sentimientos, por lo que decidió dejar su planeta para conocer otros mundos y aclarar sus ideas.En su viaje por el universo, el Principito visitó varios planetas, cada uno habitado por un adulto con comportamientos absurdos: un rey que creía gobernarlo todo, un vanidoso que solo quería ser admirado, un borracho que bebía para olvidar que bebía, un hombre de negocios obsesionado con poseer estrellas, un farolero que encendía y apagaba un farol sin descanso, y un geógrafo que registraba cosas sin conocerlas realmente. Estas experiencias le hicieron reflexionar sobre lo extraño y vacío que puede ser el mundo de los adultos.Finalmente llegó a la Tierra, donde conoció a una serpiente que le habló del poder de su mordedura para devolverlo a su planeta, y a un zorro que le enseñó una de las lecciones más importantes de su viaje: que lo esencial es invisible a los ojos, y que uno solo conoce bien lo que ha domesticado, es decir, lo que ha amado. El Principito se dio cuenta de que su rosa sí era única, no por ser la más hermosa, sino porque era la suya, la que había cuidado y amado. Esta comprensión le dio fuerzas para querer volver con ella.Después de pasar varios días junto al piloto, ayudándolo a reparar su avión, el Principito decidió que era hora de regresar a su planeta. Le dijo al piloto que su cuerpo era demasiado pesado para llevárselo, y permitió que la serpiente lo mordiera. Aunque su cuerpo quedó en la arena, el piloto entendió que el Principito había vuelto con su rosa. Años después, el piloto sigue recordándolo cada vez que mira las estrellas, preguntándose si el Principito ha regresado a salvo y si aún cuida de su flor." },
                { src: "i3.jpg", alt: "El Zorro en el Bosque-Sternritter A", descripcion: "Durante su viaje, el zorro se encuentra con diferentes animales y situaciones que le enseñan que no siempre se puede actuar con egoísmo o desconfianza. A través de sus errores y experiencias, comprende que vivir en armonía con los demás es más valioso que actuar solo por conveniencia.Es un cuento con un enfoque educativo, ideal para niños, que transmite valores positivos como la empatía, el respeto a la diversidad y la importancia de hacer amigos y cuidar de ellos." },
                { src: "i4.jpg", alt: "El Pollo Pepe-Nick Denchfield e ilustrado por Ant Parker", descripcion: "La historia sigue a Pepe, un pequeño pollito que tiene mucha hambre y está ansioso por comer. A lo largo del cuento, el pollo muestra lo grande que ha crecido debido a su apetito voraz. En cada página, se van mostrando partes de su cuerpo como el pico, las alas, las patas, etc., todo mientras el niño puede interactuar con el libro mediante pop-ups y solapas, lo que hace que el relato sea mucho más dinámico y atractivo para los más pequeños.El texto es sencillo y repetitivo, ideal para fomentar el desarrollo del lenguaje y la comprensión en los niños, al tiempo que les permite aprender nuevas palabras y conceptos. El diseño y las ilustraciones son vibrantes y coloridas, lo que capta la atención de los niños de manera efectiva.El libro está especialmente diseñado para que los niños puedan interactuar mientras escuchan la historia, fomentando no solo su aprendizaje, sino también el disfrute del acto de leer." },
                { src: "i5.jpg", alt: "Hay un cocodrilo debajo de mi cama-Mercer Mayer ", descripcion: "La historia sigue a un niño que, cada noche, se enfrenta al temor de que un cocodrilo se esconde debajo de su cama. Aunque sus padres no lo creen y nunca han visto al cocodrilo, el niño está convencido de su presencia. Decide entonces idear un plan para enfrentarse a su miedo. En lugar de simplemente gritar o esperar ayuda, el niño ofrece al cocodrilo un sándwich con manteca de cacahuate y un poco de tarta, pensando que tal vez eso lo atraería más que morderlo. Este enfoque ingenioso y humorístico muestra cómo, al enfrentar nuestros miedos con creatividad y valentía, podemos superarlos" },
                { src: "i6.jpg", alt: "George y el cuadro- Cris Martín ", descripcion: "En esta historia, George es un cerdito que, una mañana soleada, decide pintar un cuadro como regalo de cumpleaños para su papá, que es jardinero. George quiere mucho a su papá y a menudo lo acompaña al parque, donde pinta las plantitas mientras él trabaja. Inspirado por su amor y admiración, George se prepara para crear el regalo perfecto.Rápidamente, se pone el desayuno, mete sus acuarelas, su cuaderno de bocetos y sus pinceles en la mochila, y sale de casa con entusiasmo. A lo largo de su jornada, George se enfrenta a desafíos y aprende lecciones valiosas sobre la dedicación, el amor y la importancia de los pequeños gestos.El libro destaca la creatividad y el esfuerzo personal, mostrando cómo una acción sencilla puede expresar grandes sentimientos. Es una historia tierna que enseña a los niños sobre la importancia de la expresión artística y el amor familiar." },
                { src: "i7.jpg", alt: "Matilda-Roald Dahl", descripcion: "Matilda Wormwood es una niña excepcionalmente inteligente y curiosa, nacida en una familia que no aprecia sus talentos. Desde pequeña, Matilda muestra habilidades sorprendentes: aprende a leer a los tres años y devora libros clásicos como Jane Eyre y Grandes Esperanzas antes de los cinco. Sin embargo, sus padres, el Sr. y la Sra. Wormwood, son indiferentes y despectivos hacia ella, prefiriendo ver televisión y despreciando su amor por la lectura. A pesar de su entorno, Matilda encuentra consuelo en la biblioteca pública, donde desarrolla su amor por los libros y la lectura. Su vida da un giro cuando ingresa a la escuela primaria Crunchem Hall, donde conoce a la dulce y comprensiva Miss Honey, su maestra, quien pronto se da cuenta de las extraordinarias habilidades de Matilda.El verdadero desafío llega con la aparición de la temida Miss Trunchbull, la directora de la escuela, una mujer cruel y tiránica que maltrata a los estudiantes. A medida que la historia avanza, Matilda descubre que posee poderes telequinéticos, la capacidad de mover objetos con la mente. Utiliza estos poderes para enfrentarse a la injusticia y ayudar a Miss Honey a recuperar lo que le pertenece.La novela culmina con la derrota de Miss Trunchbull, la adopción de Matilda por Miss Honey y su liberación de la opresiva influencia de sus padres. Matilda encuentra finalmente un hogar lleno de amor y comprensión, donde puede desarrollar todo su potencial." },
                { src: "i8.jpg", alt: "Los Tres Cerditos", descripcion: "Había una vez tres cerditos que vivían en un pequeño pueblo. Un día, decidieron que era momento de construir sus propias casas para protegerse del lobo feroz que rondaba la zona.El primer cerdito, que era el más perezoso, construyó su casa de paja porque pensaba que era rápido y fácil.El segundo cerdito, un poco más prudente, construyó su casa de madera, ya que pensaba que sería más fuerte que la de paja, pero aún así no era lo suficientemente sólida.El tercer cerdito, el más trabajador y precavido, construyó su casa de ladrillo, ya que sabía que necesitaría una casa fuerte para resistir cualquier amenaza.Un día, el lobo feroz llegó a la casa de paja y, soplando con fuerza, la derribó. El primer cerdito huyó a la casa de su hermano, que estaba hecha de madera. Pero el lobo también sopló la casa de madera y la derribó fácilmente. Los dos cerditos corrieron a la casa de ladrillo de su hermano.Cuando el lobo llegó a la casa de ladrillo, sopló con todas sus fuerzas, pero la casa no se movió. El lobo intentó entrar por la chimenea, pero los tres cerditos habían preparado una trampa. Colocaron una olla de agua hirviendo en la chimenea, y cuando el lobo intentó bajar, cayó directamente en ella, quemándose y huyendo para siempre." },
                { src: "i9.jpg", alt: "La primera aventura del Ratón Pérez- Luis Coloma ", descripcion: "La historia comienza cuando un niño llamado Luisito pierde su primer diente de leche y, como es costumbre, lo coloca debajo de la almohada para que el Ratón Pérez se lo lleve a cambio de una pequeña recompensa, generalmente una moneda. Sin embargo, en este cuento, el Ratón Pérez vive una verdadera aventura.El ratón, que es muy pequeño y muy astuto, tiene una tienda secreta donde guarda todos los dientes que recoge. Se cuenta que Pérez es un ratón muy trabajador, que cada noche recorre la ciudad en busca de los dientes que los niños dejan atrás. La historia es muy mágica, pues el Ratón Pérez no solo recoge los dientes, sino que también deja a los niños algo que los motive, como un pequeño regalo o una moneda.Cuando el diente de Luisito es dejado bajo la almohada, el Ratón Pérez comienza su aventura. En su viaje, pasa por diferentes lugares y enfrenta varios desafíos, como evitar ser atrapado por los gatos o las personas que podrían descubrirlo. Con mucho ingenio y agilidad, logra cumplir su misión sin ser visto.Al final, el Ratón Pérez recoge el diente, dejando a Luisito una moneda como recompensa por su diente. Luisito, muy emocionado, se siente orgulloso de su *gran aventura* y de haber dejado su primer diente bajo la almohada, sin saber que su pequeño amigo ratón le sigue con su trabajo secreto." }
            ]
        },
        "Juvenil": {
            imagenes: [
                { src: "j1.jpg", alt: "EL ABISMO DEL UNIVERSO -BETANCOURT, STEPHEN", descripcion: "Estos poemas plasmados en estas hojas, son una brisa del tiempo, cuando me comenzaba a sumergir en las artes interpretativas en el ambito poetico. Tambien hacia dibujos y cosas asi pero mas que todo bucaba trascender de un modo artistico las horas vividas en Medellin Colombia. Son tiempos que no volveran con la misma frescura que acaricio mi juventud, pero que con nostalgia recordare, deseando compartir estas vivencias con ustedes. Espero que tambien lleven los otros libritos para que tengan un seguimiento de mi recorrido poetico. Oviamente se evoluciona mas con el tiempo. " },
                { src: "j2.jpg", alt: "El ladrón del rayo", descripcion: "Percy Jackson es un niño de 12 años que padece de TDAH y dislexia, lo que le ha causado problemas en la escuela y en su vida cotidiana. Durante una excursión escolar al Museo Metropolitano de Arte, su profesora de álgebra, la señorita Dodds, se revela como una de las Furias, criaturas mitológicas encargadas de castigar a los malhechores. Tras este encuentro, Percy es atacado por otras Furias y se ve obligado a huir con su madre, Sally, y su amigo Grover Underwood, un sátiro.Juntos llegan al Campamento Mestizo, un refugio secreto para semidioses, donde Percy descubre que es hijo de Poseidón, el dios griego del mar. Allí, se le informa que Zeus acusa a Percy de haber robado su rayo maestro, una poderosa arma que podría desatar una guerra entre los dioses del Olimpo. Para evitar el conflicto, Percy debe encontrar y devolver el rayo antes del solsticio de verano.Acompañado por Annabeth Chase, hija de Atenea, y Grover, Percy emprende una peligrosa misión que los lleva a enfrentarse con monstruos mitológicos, como Medusa y Ares, el dios de la guerra. Durante su viaje, Percy descubre secretos sobre su familia y su destino, enfrentándose a desafíos que pondrán a prueba su valentía y lealtad." },
                { src: "j3.jpg", alt: "La ladrona de libros- Markus Zusak", descripcion: "En 1939, Liesel Meminger, una niña de nueve años, es enviada a vivir con los Hubermann, una familia de acogida en el pueblo alemán de Molching, tras la muerte de su hermano y la desaparición de su madre comunista. Durante el viaje en tren hacia su nuevo hogar, Liesel presencia la muerte de su hermano y, en un impulso, roba un libro titulado El manual del sepulturero en la estación de tren. Este acto marca el inicio de su amor por la lectura y su conexión con las palabras.En su nuevo hogar, Liesel forma una relación cercana con su padre adoptivo, Hans Hubermann, quien le enseña a leer y escribir, y con su madre adoptiva, Rosa Hubermann, una mujer estricta pero cariñosa. A medida que la guerra avanza, Liesel se enfrenta a la pérdida, la persecución y la violencia, pero encuentra consuelo en los libros que roba y comparte con su comunidad, incluyendo a su mejor amigo Rudy Steiner y a Max Vandenburg, un joven judío que los Hubermann esconden en su sótano.La historia culmina con un devastador bombardeo en Himmel Street, donde Liesel pierde a casi todos sus seres queridos. A pesar de la tragedia, Liesel sobrevive y, años después, se reúne con Max y con Alex Steiner, el padre de Rudy. La Muerte, que ha sido testigo de su vida, recoge el manuscrito que Liesel escribió, La ladrona de libros, y lo presenta como testimonio de la resiliencia humana frente a la adversidad." },
                { src: "j4.jpg", alt: "Todo lo que nunca fuimos-Alice Kellen", descripcion: "Leah está rota. Desde el accidente que se llevó a sus padres, ha perdido su pasión por la pintura y se ha convertido en una sombra de sí misma. Axel, el mejor amigo de su hermano mayor, accede a acogerla en su casa durante unos meses. Su intención es ayudarla a encontrar y unir los pedazos de la chica llena de color que un día fue. Sin embargo, Axel desconoce que Leah siempre ha estado enamorada de él, a pesar de que sean casi familia. A medida que pasan el tiempo juntos, sus vidas están a punto de cambiar para siempre." },
                { src: "j5.jpg", alt: "A las puertas de la nada-Corinne Duyvis,", descripcion: "El 29 de enero de 2035, un gran cometa está a punto de impactar la Tierra. Denise, su madre y su hermana Iris han sido asignadas a un refugio provisional cerca de su casa en Ámsterdam. Sin embargo, Iris ha desaparecido y la madre de Denise, que lucha contra la drogadicción, no parece estar en condiciones de llegar a tiempo al refugio. En un giro del destino, encuentran una nave generacional que planea abandonar la Tierra después del impacto del cometa, con el objetivo de colonizar nuevos mundos. No obstante, se espera que todos los pasajeros tengan conocimientos prácticos con los que contribuir, y Denise teme que su autismo le impida quedarse. ¿Podrá Denise conseguir una plaza antes de que despegue la nave? ¿Qué pasará con su madre y su hermana? La novela plantea la pregunta: cuando el futuro de la humanidad está en peligro, ¿unas vidas importan más que otras?" },
                { src: "j6.jpg", alt: "El diario de Greg-Jeff Kinney", descripcion: "La historia sigue a Greg Heffley, un niño que, al comenzar la secundaria, se enfrenta a una serie de retos que lo ponen en situaciones embarazosas. Aunque Greg está decidido a tener un año escolar perfecto y ser más popular, todo lo que hace parece salir mal. A lo largo del libro, Greg narra sus vivencias a través de su diario, un formato lleno de humor y dibujos cómicos que capturan perfectamente las inseguridades, las malas decisiones y las frustraciones típicas de la adolescencia.En *Un Renacuajo Total*, Greg intenta lidiar con la difícil relación con su hermano mayor Rodrick, con sus problemas en la escuela, y su relación con su mejor amigo Rowley, quien, a pesar de ser un amigo leal, también es un poco ingenuo y tiene una forma diferente de ver las cosas. A medida que el libro avanza, Greg trata de encontrar su lugar en el mundo de la secundaria, a pesar de que todo parece ir en su contra." },
                { src: "j7.jpg", alt: "EL DIARIO DE GREG UN PRINCIPIO TOTAL-Jeff Kinney", descripcion: "La historia sigue a Greg Heffley, un niño que, al comenzar la secundaria, se enfrenta a una serie de retos que lo ponen en situaciones embarazosas. Aunque Greg está decidido a tener un año escolar perfecto y ser más popular, todo lo que hace parece salir mal. A lo largo del libro, Greg narra sus vivencias a través de su diario, un formato lleno de humor y dibujos cómicos que capturan perfectamente las inseguridades, las malas decisiones y las frustraciones típicas de la adolescencia.En *Un Renacuajo Total*, Greg intenta lidiar con la difícil relación con su hermano mayor Rodrick, con sus problemas en la escuela, y su relación con su mejor amigo Rowley, quien, a pesar de ser un amigo leal, también es un poco ingenuo y tiene una forma diferente de ver las cosas. A medida que el libro avanza, Greg trata de encontrar su lugar en el mundo de la secundaria, a pesar de que todo parece ir en su contra." },
                { src: "j8.jpg", alt: "El libro de los secretos vivientes-Madeleine Roux", descripcion: "Adelle y Connie son dos amigas unidas por su amor a una novela poco conocida llamada Moira. Al no poder localizar a su autora, Robin Amery, se conforman con releer el libro sin descanso mientras sueñan con vivir en el mundo de esa fantasía romántica. Sin embargo, cuando el misterioso señor Straven las tienta a entrar en el mundo del libro, se encuentran con que la realidad de Moira está patas arriba. Los fastuosos bailes y amores desdichados se entrelazan con horrores indescriptibles, y las chicas comprenden que detrás de su incursión en la ficción se esconde algo siniestro. Para escapar vivas de esta pesadilla, deberán reescribir sus propios argumentos." },
                { src: "j9.jpg", alt: "A través de la lluvia- Ariana Godoy", descripcion: "En A través de la lluvia, seguimos la historia de Apolo Hidalgo, el hermano menor de la familia, quien está a punto de comenzar la universidad con el sueño de estudiar psicología y ayudar a los demás. Sin embargo, su vida da un giro inesperado cuando es atacado en un callejón durante una noche lluviosa. En ese momento, una chica con un paraguas aparece y lo salva, quedando grabada en su memoria. Cuando finalmente se vuelven a encontrar, Apolo se siente aún más atraído por ella y, a través de ella, conoce a Xan, el dueño de un café donde pasan el rato. A medida que los tres se conocen, Apolo descubre que Rain y Xan ocultan mucho más de lo que imagina. A pesar de sus buenas intenciones, Apolo se dará cuenta de que, en la vida, eso no siempre es garantía de éxito, especialmente en el amor." }
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

    // Manejar el evento de enviar mensaje del textarea (¡ELIMINAR O COMENTAR ESTO!)
    // enviarBtn.addEventListener("click", () => {
    //     const mensaje = mensajeTextarea.value.trim();
    //     if (mensaje) {
    //         alert("Tu mensaje fue enviado: " + mensaje);
    //         mensajeTextarea.value = ''; // Limpiar el textarea después de enviar
    //     } else {
    //         alert("Por favor, escribe un mensaje.");
    //     }
    // });

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

    // ** Control de Submenús **
    menuItemsWithSubmenu.forEach(item => {
        const submenu = item.querySelector('.submenu');
        const parentLink = item.querySelector('a');

        if (submenu) {
            // Evitar que el enlace padre navegue al hacer clic (podrías tener otra lógica aquí si es necesario)
            parentLink.addEventListener('click', (e) => {
                e.preventDefault();
                submenu.classList.toggle('submenu-activo');
                // Cierra otros submenús abiertos
                submenus.forEach(otherSubmenu => {
                    if (otherSubmenu !== submenu && otherSubmenu.classList.contains('submenu-activo')) {
                        otherSubmenu.classList.remove('submenu-activo');
                    }
                });
            });

            // Cerrar el submenú al hacer clic fuera de él o en un enlace del menú principal
            document.addEventListener('click', (event) => {
                if (!item.contains(event.target) && submenu.classList.contains('submenu-activo')) {
                    submenu.classList.remove('submenu-activo');
                }
            });

            // Cerrar el submenú al seleccionar una opción del submenú
            const submenuLinks = submenu.querySelectorAll('a');
            submenuLinks.forEach(subLink => {
                subLink.addEventListener('click', () => {
                    submenu.classList.remove('submenu-activo');
                });
            });
        }
    });

    // Cerrar submenús al hacer clic en un enlace del menú principal que no tiene submenú
    links.forEach(link => {
        if (!link.parentNode.classList.contains('menu-item-has-children')) {
            link.addEventListener('click', () => {
                submenus.forEach(submenu => {
                    if (submenu.classList.contains('submenu-activo')) {
                        submenu.classList.remove('submenu-activo');
                    }
                });
            });
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

    menuItemsWithSubmenu.forEach(item => {
        const submenu = item.querySelector(".submenu");

        // Mostrar el submenú al pasar el cursor
        item.addEventListener("mouseenter", () => {
            submenu.style.display = "block";
        });

        // Ocultar el submenú al salir del área del menú
        item.addEventListener("mouseleave", () => {
            submenu.style.display = "none";
        });
    });

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    // Mostrar el submenú al pasar el cursor sobre el ícono del menú
    hamburger.addEventListener("mouseenter", () => {
        menu.style.display = "flex";
    });

    // Ocultar el submenú al salir del área del menú
    hamburger.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!menu.matches(":hover")) {
                menu.style.display = "none";
            }
        }, 200); // Pequeño retraso para evitar parpadeos
    });

    // Mantener el submenú visible mientras el cursor esté sobre él
    menu.addEventListener("mouseenter", () => {
        menu.style.display = "flex";
    });

    // Ocultar el submenú al salir del área del submenú
    menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
    });
});