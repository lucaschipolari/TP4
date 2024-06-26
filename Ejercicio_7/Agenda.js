
export class Agenda{
    constructor(tamaño=10){
        this.contactos = [];
        this.tamaño = tamaño;
    }
    aniadirContacto(contacto){
        if(this.contactos.length < this.tamaño){
            this.contactos.push(contacto);
        }else{1
            console.log('La agenda no puede almacenar más contactos');
        }
    }
    existeContacto(nombre){
        if( this.contactos.find(e => e.nombre === nombre)){
            return true;
        }else{return false}
       /* this.contactos.forEach(e => {
            if(e.nombre === nombre){
                alert('El contacto si existe');
            }
        });*/
    }
    listarContactos(){
        let contactoString = '';
        this.contactos.forEach(e => {
            contactoString += `Nombre: ${e.nombre}, Teléfono: ${e.telefono}\n`;
        });
       return contactoString;
    }
    buscarContacto(nombre){
        this.contactos.find(e =>{
            if(e.nombre === nombre){
               alert(`El telefono del contacto es: ${e.telefono}`);
            }   
        });
    }
    agendaLlena(){
        if(this.contactos.length === this.tamaño){
            return true;
        }else{
            return false;
        }
    }
    huecosLibres(){
        return this.tamaño-this.contactos.length;
    }
    eliminarContacto(contacto){ 
        this.contactos.forEach(e=> {
            if(e.nombre === contacto.nombre || e.telefono === contacto.telefono){
                this.contactos.splice(this.contactos.indexOf(e), 1);
            }
        });
    }
}