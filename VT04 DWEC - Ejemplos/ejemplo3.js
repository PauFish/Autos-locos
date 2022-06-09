var botonInsertar = document.getElementById('insertar'); // Selecciono el elemento "insertar"
var contenidoCampoTexto = document.getElementsByTagName('input')[0]; // Selecciono el input
var textoFijo = document.getElementsByClassName('insertado')[0]; // Selecciono el "insertado"

botonInsertar.onclick = function() {
							textoFijo.innerHTML = contenidoCampoTexto.value;
						};

grande.onclick = function() { // En Js puedo llamar directamente a los elementos por su ID, sin tener que hacer el getElementByID
					var tamano = textoFijo.style.fontSize; // Cojo su valor "200%"
					tamano = tamano.substring(0, tamano.length - 1); // Elimino el % 
					tamano = parseInt(tamano) + 5; // Lo paso a entero y le sumo 5
					tamano = tamano + "%"; // Le vuelvo a añadir el %
					textoFijo.style.fontSize = tamano; // Lo guardo en la propiedad
					console.log(tamano); // Lo muestro por consola
				};

pequeno.onclick = function() {
					var tamano = textoFijo.style.fontSize;
					tamano = tamano.substring(0, tamano.length - 1);
					tamano = parseInt(tamano) - 5;
					tamano = tamano + "%";
					textoFijo.style.fontSize = tamano;
					console.log(tamano);
				};

				