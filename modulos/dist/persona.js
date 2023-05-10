"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    presentarPersona() {
        console.log("mi nombre es " + this.nombre + "y mi identifiacion es " + this.identificacion);
    }
}
exports.Persona = Persona;
