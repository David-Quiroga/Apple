"use strict";
class Empleado {
    constructor(nombre, horasTrabajadas, salarioPorHora) {
        this.nombre = nombre;
        this.horasTrabajadas = horasTrabajadas;
        this.salarioPorHora = salarioPorHora;
    }
    calcularSueldo() {
        return this.horasTrabajadas * this.salarioPorHora;
    }
}
const empleado1 = new Empleado("Juan", 500, 20);
console.log(`El sueldo de ${empleado1.nombre} es: ${empleado1.calcularSueldo()}`);
const empleado2 = new Empleado("María", 30, 15);
console.log(`El sueldo de ${empleado2.nombre} es: ${empleado2.calcularSueldo()}`);
