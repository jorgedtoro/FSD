class Libro {
  constructor(...info) {
    this.titulo = info[0];
    this.genero = info[1];
    this.autor = info[2];
    this.isbn = info[3];
    this.peso = Number(info[4]);
  }
  getTitulo() {
    return this.titulo;
  }

  getGenero() {
    return this.genero;
  }

  getAutor() {
    return this.autor;
  }

  getIsbn() {
    return this.isbn;
  }

  getPeso() {
    return this.peso;
  }
}