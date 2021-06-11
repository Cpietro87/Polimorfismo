# Polimorfismo

El polimorfismo es la descripcion de multiples y posibles estados de una unica propiedad.Dicho de otra manera cuando invocamos un metodo en distintos objetos, cada uno de estos pueda responder de manera distinta.

La herencia esta estrechamente ligado al polimorfismo ya que de esa manera se lo puede aplicar.

Hay tres tipos de polimorfismo:
    
* Sobrecarga (overload): se aplica cuando existen funciones con el mismo nombre en clases que son independientes una de otra.

* Parámetrico: se utilizan funciones con el mismo nombre pero se una diferentes parámetros. 

* Sobreescritura (override):Es la forma por la cual una clase que hereda pouede re-definir los metodos de su clase Padre, de esta manera puede crear nuevos métodos con el mismo nombre de su superClase  

En el siguiente ejemplo vemos que se aplica el polimorfismo de sobreescritura por que las clases EnfermeraTraumatologia y EnfermeraCovid heredan de la clase Enfemera el metodo atencionPaciente y lo modifican por que la atencion del paciente es distinto en cada caso.

```typescript
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
```
### Autor: Alumno Cristian Pietrobon IES 9-023

