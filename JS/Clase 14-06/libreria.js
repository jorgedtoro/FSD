class Libreria {
  constructor(libros = []) {
    this.libros = libros;
    this.librosLeidos = []; // ISBN
  }
  guardarLibro(libro) {
    this.libros.push(libro);
  }
  existeLibro(libro) {
    return this.existeLibroISBN(libro.isbn);
  }
  existeLibroISBN(isbn) {
    return this.libros.find((l) => l.isbn === isbn);
  }
  isLeido(libro) {
    return this.librosLeidos.includes(libro.isbn);
  }
  libroLeido(libro) {
    if (!this.existeLibro(libro)) {
      console.log("No puedes leer un libro que no tienes!");
    } else {
      if (!this.isLeido(libro)) {
        this.librosLeidos.push(libro.isbn);
      }
    }
  }
  pesoTotal() {
    return this.libros.reduce((acc, libro) => {
      return (acc += libro.peso);
    }, 0);
  }
  librosSinLeer() {
    return this.libros.filter((libro) => {
      return !this.isLeido(libro);
    });
  }
  ultimoLibroLeido() {
    const ultimoISBN = this.librosLeidos[this.librosLeidos.length - 1];
    return this.existeLibroISBN(ultimoISBN);
  }
  contarGeneros() {
    const contador = {};
    this.libros.forEach((libro) => {
      if (typeof contador[libro.genero] === "undefined") {
        contador[libro.genero] = 1;
      } else {
        contador[libro.genero] = contador[libro.genero] + 1;
      }
    });
    return contador;
  }
  generoFavorito() {
    const generos = this.contarGeneros();
    return Object.keys(generos).reduce(
      (a, b) => (generos[a] > generos[b] ? a : b),
      0
    );
  }
}
