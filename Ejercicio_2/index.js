/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/
const cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function (cantidad) {
        this.saldo += cantidad;
    },
    extraer: function (cantidad) {
        this.saldo -= cantidad;
    },
    informar: function () {
        document.write(`Titular: ${this.titular}`);
        document.write(`</br>`);
        document.write(`Saldo: $${this.saldo}`);
        document.write(`</br>`);

    }
};

cuenta.informar();

cuenta.ingresar(100);

cuenta.informar();

cuenta.extraer(50);

cuenta.informar();