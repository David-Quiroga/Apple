class Empleado {
    public nombre           : string;
    public horasTrabajadas  : number;
    public salarioPorHora   : number;

    constructor(nombre: string, horasTrabajadas: number, salarioPorHora: number) {
        this.nombre             = nombre;
        this.horasTrabajadas    = horasTrabajadas;
        this.salarioPorHora     = salarioPorHora;
    }
    public calcularSueldo(): number {
      return this.horasTrabajadas * this.salarioPorHora;
    }
}

const empleado1 = new Empleado("Juan", 500, 20);
console.log(`El sueldo de ${empleado1.nombre} es: ${empleado1.calcularSueldo()}`);

const empleado2 = new Empleado("María", 30, 15);
console.log(`El sueldo de ${empleado2.nombre} es: ${empleado2.calcularSueldo()}`);