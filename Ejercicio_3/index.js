//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularPerimetro() {
    return this.alto * 2 + this.ancho * 2;
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
  mostrarArea() {
    console.log(this.calcularArea());
  }
}

const cuadrado = new rectangulo(5, 5);

console.log('El perimetro es: '+cuadrado.calcularPerimetro());
console.log('El area del rectangulo es: '+cuadrado.calcularArea());

cuadrado.mostrarArea();
