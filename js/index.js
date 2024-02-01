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
					location.href = "https://youtu.be/am1_JLFDFMw?t=19";
				}, 5000); // 5000 milisegundos = 5 segundos
			};

			const ebitarKCRompaMyBobo = () => {
				vuttonNo.style.position = "absolute";
				vuttonNo.style.top = Math.random() * window.innerHeight + "px";
				vuttonNo.style.left = Math.random() * window.innerWidth + "px";
			};

			vuttonSi.addEventListener("click", zomosNobios);
			vuttonNo.addEventListener("mouseover", ebitarKCRompaMyBobo);