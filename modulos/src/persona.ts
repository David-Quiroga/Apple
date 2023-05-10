export class Persona{
    nombre          :string;
    identificacion  : number;
    
    constructor(nombre:string,identificacion:number){
        this.nombre         = nombre;
        this.identificacion = identificacion;
    }
    presentarPersona(): void{
    console.log("mi nombre es " + this.nombre + "y mi identifiacion es " + this.identificacion)
    }
}
