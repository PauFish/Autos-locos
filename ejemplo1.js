
var listaEnlaces = document.getElementsByTagName('u');

// en lista listaEnlaces tengo [<u>PATATAS</u>, <u>MACARRONES</u>, <u>COLIFLOR</u>]


for (var i = 0; i < listaEnlaces.length; i++) { // Ejecuto tantas veces como elementos <u> tenga
	console.log(listaEnlaces[i].innerHTML);
	listaEnlaces[i].onclick = function() { // A cada elemento, le anado esta funcion
								document.getElementById('eleccion').innerHTML = this.innerHTML; // Con this nos referimos al propio elemento/objeto en el que estamos.
								console.log("Cambio");
							}
}


