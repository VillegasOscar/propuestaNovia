<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/styleGame.css" rel="stylesheet" />
    <title>Hola 🫦</title>
</head>

<body class="body">
	<div id="cuentaRegresiva"></div>
    <div id="container">
        <canvas id="gameCanvas"></canvas>
    </div>
    <div id="container2">
        <audio id="audioFondo" controls autoplay>
            <source src="music/1.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
        </audio>
        <h1 class="body__title">♥ Kierrez Zer My Mobia ♥</h1>
        <img
            src="https://pbs.twimg.com/media/FQRbN3nXMAUPrQ6.jpg"
            alt="Foto D My"
            class="body__img" />
        <br />
        <button id="yes" class="sbtn">Chi cheñol💞</button>
        <button id="no" class="sbtn">Nel PerrO😭</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/index.js"></script>
    <script src="js/game.js"></script>
</body>
</html>
