abstract class Enfermera {
    nombre: string;
    apellido: string;
    edad: number;
    
    constructor(nombre: string,apellido: string, edad: number ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;   
    }
    mostrar():string {
        return `Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad}`;
    }
    atencionPaciente(){
        return  `Atencion Primaria`;
    }
}

class EnfermeraTraumatologia extends Enfermera{
    area: string;
    constructor(nombre: string,apellido: string,edad: number, area: string){
        super(nombre,apellido,edad);
        this.area = area;
    }
    atencionPaciente(){
        return `inmovilizar trauma, suministrar calmantes`;
    }
}
class EnfermeraCovid extends Enfermera{
    atencionPaciente(){
        return `controlar saturacion de oxigeno, fiebre, suministrar antivioticios`;
    }
}

const E1 = new EnfermeraTraumatologia("Erika","Sanchez",25,"Traumatologia grave");
const E2 = new EnfermeraCovid("Noelia","Pacheco",30);
E1.atencionPaciente();
E1.mostrar();
E2.atencionPaciente();
E2.mostrar();