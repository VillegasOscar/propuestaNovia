// Obtener el canvas y su contexto
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Crear una nueva imagen para el corazón
var heartImg = new Image();
heartImg.src = "image/cora.jpeg"; // Ruta de la imagen del corazón

// Crear una nueva imagen para la bola
var bolaImg = new Image();
bolaImg.src = "image/bola.jpeg"; // Ruta de la imagen de la bola

// Variable para contar los puntos
var puntos = 0;

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
    ctx.fillStyle = "red";
    ctx.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);
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
    var heartX = jugador.x + jugador.ancho / 2 - heartImg.width / 2;
    var heartY = jugador.y - heartImg.height;

    function moveHeart() {
        ctx.clearRect(heartX, heartY, heartImg.width, heartImg.height);
        heartY -= 3;
        ctx.drawImage(heartImg, heartX, heartY, heartImg.width, heartImg.height);
        if (heartY + heartImg.height < 0) return;
        requestAnimationFrame(moveHeart);
    }

    moveHeart();
    setTimeout(dispararCorazones, 1000);
}

// Función para generar bolas aleatorias
function generarBolasAleatorias() {
    var bolaX = Math.random() * (canvas.width - 30);
    var bolaY = -30;

    function moveBola() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dibujarJugador();
        bolaY += 2;
        ctx.drawImage(bolaImg, bolaX, bolaY, 25, 25);
        if (bolaY > canvas.height) return;
        requestAnimationFrame(moveBola);
    }

    moveBola();
}

// Comenzar el bucle del juego
dispararCorazones();
setInterval(generarBolasAleatorias, 2000);

// Mostrar los puntos
function mostrarPuntos() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Puntos: " + puntos, 10, 30);
}

// Bucle del juego
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarJugador();
    mostrarPuntos();
    requestAnimationFrame(gameLoop);
}

gameLoop();
