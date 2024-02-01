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

Howler.autoUnlock = false;
// Crear una nueva instancia de Howl
var sound = new Howl({
	src: ["music/1.mp3"],
	html5: true,
	autoplay: true,
	loop: true,
	onplayerror: function () {
		sound.once("unlock", function () {
			sound.play();
		});
	},
});

// Clear listener after first call.
sound.once("load", function () {
	sound.play();
});
