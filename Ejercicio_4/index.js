/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarDatos() {
      alert("El precio del producto es: " + this.precio +"\n El codigo del producto es: " + this.codigo + "\n El nombre del producto es: " + this.nombre);
    }
}

let producto1 = new Producto(1234, "Laptop", 1000);

let producto2 = new Producto(4321, "Tablet", 500);

let producto3 = new Producto(7654, "Mouse", 200);

let productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
  productos[i].mostrarDatos();
}
