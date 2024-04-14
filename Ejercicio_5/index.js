/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {

    constructor(nombre,edad,dni,sexo,peso, altura,añoNac){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNac = añoNac;
    }
    mostrarGeneracion(){
        const generaciones = [
            { nombre: "Silent", rango: { inicio: 1930, fin: 1948 } ,rasgo:"Austeridad" },
            { nombre: "Baby Boomer", rango: { inicio: 1948, fin: 1968 },rasgo:"Ambición"},
            { nombre: "X", rango: { inicio: 1969, fin: 1980 },rasgo:"Obsesión por el éxito" },
            { nombre: "Millennial", rango: { inicio: 1981, fin: 1993 },rasgo:"Frustración" },
            { nombre: "Z", rango: { inicio: 1994, fin: 2010 } ,rasgo:"Irreverencia"}
        ];
    
        const generacion = generaciones.find(generacion => {
            return this.añoNac >= generacion.rango.inicio && this.añoNac <= generacion.rango.fin;
        });
    
        return generacion ? `La generación ${generacion.nombre} su rasgo es ${generacion.rasgo}` : "Año de nacimiento inválido";
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.añoNac}`;
    }
    generarDNI(){
        const dni = Math.floor(Math.random() * 100000000);
        return dni;
    }

}

let persona1 = new Persona("Luis", 25, 123456789, "H", 70, 1.80, 1980);
let persona2 = new Persona("jour", 25, 123456789, "H", 70, 1.90,2000);

alert(persona1.mostrarGeneracion());
console.log(persona1.generarDNI());
console.log(persona1.esMayorDeEdad());
console.log(persona1.mostrarDatos());

alert(persona2.mostrarGeneracion());
console.log(persona2.generarDNI());
console.log(persona2.esMayorDeEdad());
console.log(persona2.mostrarDatos());