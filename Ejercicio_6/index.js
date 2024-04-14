/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  constructor(isbn, titulo, autor, paginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  getISBN() {
    return this.isbn;
  }
  setISBN(isbn){
    this.isbn = isbn;
  }
  
  getTitulo() {
    return this.titulo;
  }
  setTitulo(titulo){
    this.titulo = titulo;
  }
  
  getAutor() {
    return this.autor;
  }
  setAutor(autor){
    this.autor = autor;
  }
  
  getPaginas() {
    return this.paginas;
  }
  setPaginas(paginas){
    this.paginas = paginas;
  }
  mostrarLibro() {
    console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.paginas}`);
  }

}


const libro1 = new Libro('1234567890', 'Harry Potter', 'Autor 1', 100);

const libro2 = new Libro('1234567890', 'Cenicienta', 'Autor 2', 200);

libro1.mostrarLibro();

libro2.mostrarLibro();

if (libro1.getPaginas() > libro2.getPaginas()) {
    alert(`El libro ${libro1.getTitulo()} tiene más paginas que el libro ${libro2.getTitulo()}`);
}else{
    alert(`El libro ${libro2.getTitulo()} tiene más paginas que el libro ${libro1.getTitulo()}`);
}