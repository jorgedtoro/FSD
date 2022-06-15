//
// Título
// Género
// Autor
// ISBN
// Peso
// Portada: url

class Libro {
  constructor(...info) {
    this.titulo = info[0];
    this.genero = info[1];
    this.autor = info[2];
    this.isbn = info[3];
    this.peso = info[4];
  }
}

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
    return this.libros.find(l => l.isbn === isbn);
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
      return acc += libro.peso;
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
    this.libros.forEach(libro => {
      if (typeof contador[libro.genero] === 'undefined') {
        contador[libro.genero] = 1;
      } else {
        contador[libro.genero] = contador[libro.genero] + 1;
      }
    });
    return contador;
  }
  generoFavorito() {
    const generos = this.contarGeneros();
    let generoFavorito;
    Object.keys(generos).forEach(key => {
      console.log(key);
    });
    return generoFavorito; 
  }
}

const libro1 = new Libro("Todas esas cosas que te diré mañana", 
"Ficción", "Elísabet Benavent", "978-84-9129-597-6", 642);
const libro2 = new Libro("El peligro de estar cuerda", 
"Ensayos literarios", "Rosa Montero", "978-84-322-4064-5", 484);
const libro3 = new Libro("Compas 7. Los Compas vs. hackers", 
"Ficción", "Mikecrack, El Trollino y Timba Vk", "978-84-270-5000-6", 734);
const libro4 = new Libro("Roma soy yo", 
"Ficción", "Santiago Posteguillo", "978-84-666-7178-1", 1067);
const libro5 = new Libro("El camino del fuego", 
"Misterio", "María Oruña", "978-84-233-6158-8", 653);
const libro6 = new Libro("Entre los muertos (Trilogía de Illumbe 3)", 
"Misterio", "Mikel Santiago", "978-84-666-7219-1", 620);

const libreria = new Libreria([libro1, libro2]);

libreria.guardarLibro(libro1);
libreria.guardarLibro(libro2);
libreria.guardarLibro(libro3);
libreria.guardarLibro(libro4);
libreria.guardarLibro(libro5);
libreria.guardarLibro(libro6);
libreria.libroLeido(libro3);
libreria.libroLeido(libro4);
libreria.libroLeido(libro5);

// libreria.pesoTotal();
// libreria.librosSinLeer();
// libreria.ultimoLibroLeido();
libreria.generoFavorito();