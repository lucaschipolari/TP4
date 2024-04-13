//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: 'rojo',
    marca: 'audi',
    modelo: 'a4',
    encendido: false,
    apagado: false,
    encender: function(){
        this.encendido = true;
        console.log('encendido');
    },
    apagar: function(){
        this.apagado = true;
        console.log('apagado');
    }
}
auto.encender();
auto.apagar();

