// Obtener el canvas y su contexto
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var jugadorImg = new Image();
jugadorImg.src = "image/yo.jpg"; // Ruta de la imagen del jugador

// Crear una nueva imagen para el corazón
var heartImg = new Image();
heartImg.onload = function() {
    // Redimensionar la imagen del corazón
    heartImg.width = 20; // Ancho deseado
    heartImg.height = 20; // Alto deseado

    // Comenzar a disparar corazones después de cargar la imagen
    dispararCorazones();
};
heartImg.src = "image/cora.jpeg"; // Ruta de la imagen del corazón

// Crear una nueva imagen para la bola
var bolaImg = new Image();
bolaImg.onload = function() {
    // Redimensionar la imagen de la bola
    bolaImg.width = 25; // Ancho deseado
    bolaImg.height = 25; // Alto deseado

    setInterval(generarBolasAleatorias, 2000); // Generar una bola cada 2 segundos
};
bolaImg.src = "image/ella.jpg"; // Ruta de la imagen de la bola

// Definir la posición inicial del corazón
var heartX;
var heartY;

// Hacer que el canvas sea responsivo
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}

// Llamar a la función de redimensionamiento inicialmente
resizeCanvas();

// Variable para contar los puntos
var puntos = 0;

// Función para mostrar los puntos
function mostrarPuntos() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Puntos: " + puntos, 10, 30);
}

// Establecer la posición inicial del jugador
var jugador = {
    x: 50, // posición inicial en el eje x
    y: canvas.height - 70, // posición inicial en el eje y (un poco más arriba del borde inferior)
    ancho: 50, // ancho del jugador
    alto: 50, // altura del jugador
    velocidad: 5 // velocidad de movimiento
};

// Dibujar al jugador
function dibujarJugador() {
    ctx.drawImage(jugadorImg, jugador.x, jugador.y, jugador.ancho, jugador.alto);
}

// Función para actualizar la posición del jugador
function actualizarJugador(posX) {
    jugador.x = posX - jugador.ancho / 2; // Centrar el jugador en la posición tocada
}

// Función para detectar el movimiento del jugador
canvas.addEventListener("touchmove", function(event) {
    var touch = event.touches[0];
    actualizarJugador(touch.clientX);
}, false);

// Función para disparar corazones
function dispararCorazones() {
    // Calcular la posición inicial del corazón
    heartX = jugador.x + jugador.ancho / 2 - heartImg.width / 2;
    heartY = jugador.y - heartImg.height; // Poner el corazón arriba del jugador

    // Definir la velocidad de movimiento del corazón
    var velocidadCorazon = 3;

    // Función de animación para mover el corazón hacia arriba
    function moveHeart() {
        // Limpiar el canvas para evitar trazos residuales
        ctx.clearRect(heartX, heartY, heartImg.width, heartImg.height);

        // Mover el corazón hacia arriba
        heartY -= velocidadCorazon;

        // Dibujar el corazón en su nueva posición
        ctx.drawImage(heartImg, heartX, heartY, heartImg.width, heartImg.height);

        // Verificar si el corazón ha salido del canvas
        if (heartY + heartImg.height < 0) {
            // Detener la animación una vez que el corazón está fuera de la pantalla
            return;
        }

        // Continuar la animación en el próximo fotograma
        requestAnimationFrame(moveHeart);
    }

    // Comenzar la animación para mover el corazón hacia arriba
    moveHeart();

    // Repetir el disparo cada segundo
    setTimeout(dispararCorazones, 1000);
}

// Función para generar bolas aleatorias
function generarBolasAleatorias() {
    // Definir la posición inicial de la bola aleatoriamente
    var bolaX = Math.random() * (canvas.width - 30); // Posición aleatoria en el ancho del canvas
    var bolaY = -30; // Posición inicial arriba del canvas

    // Definir la velocidad de movimiento de la bola
    var velocidadBola = 2;

    // Función de animación para mover la bola hacia abajo
    function moveBola() {
        // Limpiar el canvas para evitar trazos residuales
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar al jugador
        dibujarJugador();

        // Mover la bola hacia abajo
        bolaY += velocidadBola;

        // Dibujar la bola en su nueva posición
        ctx.drawImage(bolaImg, bolaX, bolaY, 25, 25);

        // Verificar colisión con el corazón
        if (bolaX < heartX + heartImg.width &&
            bolaX + bolaImg.width > heartX &&
            bolaY < heartY + heartImg.height &&
            bolaY + bolaImg.height > heartY) {
            // Incrementar el contador de puntos
            puntos++;
            // Desaparecer la imagen de la bola
            bolaY = -30;
            return;
        }

        // Continuar la animación en el próximo fotograma
        requestAnimationFrame(moveBola);
    }

    // Comenzar la animación para mover la bola hacia abajo
    moveBola();
}

// Comenzar el bucle del juego
gameLoop();

// Bucle del juego
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    dibujarJugador(); // Dibujar al jugador
    mostrarPuntos(); // Mostrar los puntos
    requestAnimationFrame(gameLoop); // Repetir el bucle
}

// Actualizar el tamaño del canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);
