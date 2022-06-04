// Mostramos la fecha actual
var fechaActual = new Date(Date.now()); // Creamos un objeto tipo Date y lo inicializamos con el momento actual

document.getElementById('fecha').innerHTML = fechaActual.getDate() + " de " + 
	fechaActual.toLocaleString("es-ES", {month: "long"}) + " de " + /* muestra el mes en el idioma */
	fechaActual.getFullYear(); 


// Mostramos el segundo actual
var segundoActual = fechaActual.getSeconds();

document.getElementById("segundos").innerHTML = segundoActual;


// Utilizamos Math para multiplicar el segundo actual por PI y redondear el valor.
var resultado = Math.round(segundoActual * Math.PI);

document.getElementById("resultado").innerHTML = resultado;


// Variable que cambiará el color de fondo
var color;


// La función cambia el valor de la variable dependiendo de su paridad y devuelve un texto.
function parOImpar(valor) {
	if (valor % 2 == 0) {
		color = "red";
		return "par";
	}
	else {
		color = "blue";
		return "impar";
	}
}


// Mostramos el texto de la paridad y cambiamos el color de fondo.
document.getElementById("paridad").innerHTML = parOImpar(resultado);
document.getElementsByTagName('body')[0].style.backgroundColor = color; // Equivale a la propiedad background-color de CSS.



