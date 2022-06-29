class Estudiante {
	constructor(nombre, correo) {
		this.nombre = nombre;
		this.correo = correo;
		this.asignaturas = [];
	}

	get correoElectronico() {
		return this.correo + "@ilernaonline.com";
	}

	muestraAsignaturas() {
		return this.asignaturas;
	}

	matricular(asignatura) {
		this.asignaturas.push(asignatura);
		return "Lista de asignaturas: " + this.asignaturas;
	}

	aprobar(asignatura) {
		var posicion = this.asignaturas.indexOf(asignatura);
		this.asignaturas.splice(posicion, 1);
		return "Lista de asignaturas: " + this.asignaturas;
	}

	limpiarAsignaturas() {
		this.asignaturas = [];
		return "Se han vaciado las asignaturas";
	}

}

var dav = new Estudiante("david", "dmedrano");
console.log(dav);
console.log(dav.nombre);
console.log(dav.correoElectronico);
console.log(dav.matricular("Cliente"));
console.log(dav.muestraAsignaturas());
console.log(dav.matricular("Servidor"));
console.log(dav.aprobar("Cliente"));
console.log(dav.muestraAsignaturas());
console.log(dav.limpiarAsignaturas());
console.log(dav.muestraAsignaturas());

