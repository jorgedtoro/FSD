//TEMA 16. POO
//Título
//Género
//Autor
//ISBN

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
    this.librosLeidos = [];
  }
  guardarLibro(libro) {
    this.libros.push(libro);
  }
  libroLeido(libro) {
    const existe = this.librosLeidos.find((l) => l.isbn === libro.isbn);
    const leido = this.librosLeidos.includes(libro.isbn);
    if (!existe) {
      console.log("No puedes leer un libro que no tienes");
    } else {
      if (!leido) {
        this.librosLeidos.push(libro.isbn);
      }
    }
  }
  generoFavorito() {
    const contador = {};
    this.libros.forEach((libro) => {
      if (contador[libro.genero]) {
        contador[libro.genero]++;
      } else {
        contador[libro.genero] = 1;
      }
    });
  }
}

const libro1 = new Libro(
  "El señor de los anillos",
  "Fantasia",
  "J.R.R. Tolkien",
  "0-395-07477-1",
  "200"
);
const libro2 = new Libro(
  "El señor de los anillos 2",
  "Fantasia",
  "J.R.R. Tolkien",
  "0-395-07477-2",
  "200"
);
const libro3 = new Libro(
  "El señor de los anillos 3",
  "Fantasia",
  "J.R.R. Tolkien",
  "0-395-07477-3",
  "200"
);

console.log(libro1.titulo);

const libreria = new Libreria([libro1]);
libreria.guardarLibro(libro2);
console.log(libreria.libros);
console.log(libreria.generoFavorito());
