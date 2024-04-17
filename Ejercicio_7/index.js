
/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
import {Agenda} from './Agenda.js';
import {Contacto} from './Contacto.js';
const agenda = new Agenda();

let opcion;
do{
    opcion = prompt(`
    Por favor, seleccione una opción:
    1. Añadir contacto
    2. Comprobar si un contacto existe
    3. Listar todos los contactos
    4. Buscar contacto por nombre
    5. Eliminar contacto
    6. Verificar si la agenda está llena
    7. Verificar cuántos contactos están disponibles
    8. Salir del sistema
    `);
    if (opcion === null) {
        alert("Ha salido del sistema correctamente");
        break;
    }


switch (opcion) {
    case '1':
        let contacto = prompt('Ingrese el nombre del contacto');
        let telefono = prompt('Ingrese el telefono del contacto');
        let nuevoContacto = new Contacto(contacto, telefono);
        agenda.aniadirContacto(nuevoContacto);

        break;
    case '2':
        let nombre = prompt('Ingrese el nombre del contacto');
        if(agenda.existeContacto(nombre)){
            alert('El contacto existe');
        }else{
            alert('El contacto no existe');
        }
        break;
    case '3':
        const contactos=agenda.listarContactos();
        let contactoString = '';
        contactos.forEach(e => {
            contactoString += `Nombre: ${e.nombre}, Teléfono: ${e.telefono}\n`;
        });
        alert(contactoString);
        break;
    case '4':
        let nombreContacto = prompt('Ingrese el nombre del contacto');
        agenda.buscarContacto(nombreContacto);
        break;
    case '5':
        let nombreAEliminar = prompt('Ingrese el nombre del contacto');
        let telefonoAEliminar = prompt('Ingrese el telefono del contacto');
        agenda.eliminarContacto(new Contacto(nombreAEliminar, telefonoAEliminar));
        alert(`El contacto ${nombreAEliminar} ya ha sido eliminado`);
        break;
    case '6':
        if(agenda.agendaLlena()){
            alert('La agenda está llena');
        }else{
            alert('La agenda no está llena');
        }
        break;
    case '7':
        if(agenda.huecosLibres() > 0){
            alert('Hay '+ agenda.huecosLibres() +' contactos disponibles');
        }else{
            alert('No hay contactos disponibles');
        }
        break;
    case '8':
        alert("Ha salido del sistema correctamente");
        break;
    default:
        break;
}
}while(opcion!=='8');