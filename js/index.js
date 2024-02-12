const vuttonSi = document.getElementById("yes");
const vuttonNo = document.getElementById("no");

const zomosNobios = () => {
	Swal.fire({
		title: "💞NoW ZoMos NobiOs💞",
		text: "😊",
		icon: "success",
		showConfirmButton: false,
		timer: 4000,
	});
	setTimeout(() => {
		location.href = "https://www.youtube.com/watch?v=uP-85Eaxd00";
	}, 5000); // 5000 milisegundos = 5 segundos
};

const ebitarKCRompaMyBobo = () => {
	vuttonNo.style.position = "absolute";
	vuttonNo.style.top = Math.random() * window.innerHeight + "px";
	vuttonNo.style.left = Math.random() * window.innerWidth + "px";
};

vuttonSi.addEventListener("click", zomosNobios);
vuttonNo.addEventListener("mouseover", ebitarKCRompaMyBobo);

// // Obtenemos el elemento donde mostraremos la cuenta regresiva
// var cuentaRegresivaElemento = document.getElementById('cuentaRegresiva');

// // Definimos el tiempo inicial en segundos
// var tiempoInicial = 30;

// // Función para actualizar la cuenta regresiva
// function actualizarCuentaRegresiva() {
// 	cuentaRegresivaElemento.textContent = 'Tiempo restante: ' + tiempoInicial + ' segundos';

// 	// Disminuimos el tiempo en 1 segundo
// 	tiempoInicial--;

// 	// Si el tiempo llega a 0, detenemos la cuenta regresiva
// 	if (tiempoInicial < 0) {
// 		clearInterval(intervalo);
// 		cuentaRegresivaElemento.textContent = '¡Tiempo agotado!';
// 	}
// }

// // Llamamos a la función inicialmente para mostrar el tiempo inicial
// actualizarCuentaRegresiva();

// // Configuramos un intervalo para llamar a la función cada segundo
// var intervalo = setInterval(actualizarCuentaRegresiva, 1000);

// // Obtén referencia a los elementos HTML
// const container1 = document.getElementById('container');
// const container2 = document.getElementById('container2');

// // Función para ocultar container1 y mostrar container2 después de 30 segundos
// setTimeout(function() {
// 	container1.style.display = 'none'; // Oculta container1
// 	container2.style.display = 'block'; // Muestra container2
// 	var audio = document.getElementById('audioFondo')
// 	audio.play();
// }, 30000); // 30000 milisegundos = 30 segundos
