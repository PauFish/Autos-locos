function ejecuta() {
	var a = "20";
	var b = 20.0;

	console.log("Condicionales: ")
	if (a == b){
		console.log("Son iguales")
	}
	if (a === b){
		console.log("Son iguales y del mismo tipo")
	} else {
		console.log("Son iguales pero de otro tipo")
	}

	console.log("Operaciones del mismo tipo:");
	var suma = a + 2; // Dos Number
	console.log(suma);
	var suma = b + "patitos"; // Dos String
	console.log(suma); // Suma cambia de tipo pero no hay que especificarlo
	console.log("Operaciones de distinto tipo:");
	console.log(a + b); // Number + String

	console.log("Comienzo del bucle:");
	for (var i = 0; i < 10; i++) {
		a = a + i;
		console.log(a);
	}
}
