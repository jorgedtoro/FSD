const libro1 = new Libro(
  "Todas esas cosas que te diré mañana",
  "Ficción",
  "Elísabet Benavent",
  "978-84-9129-597-6",
  642
);
const libro2 = new Libro(
  "El peligro de estar cuerda",
  "Ensayos literarios",
  "Rosa Montero",
  "978-84-322-4064-5",
  484
);
const libro3 = new Libro(
  "Compas 7. Los Compas vs. hackers",
  "Ficción",
  "Mikecrack, El Trollino y Timba Vk",
  "978-84-270-5000-6",
  734
);
const libro4 = new Libro(
  "Roma soy yo",
  "Ficción",
  "Santiago Posteguillo",
  "978-84-666-7178-1",
  1067
);
const libro5 = new Libro(
  "El camino del fuego",
  "Misterio",
  "María Oruña",
  "978-84-233-6158-8",
  653
);
const libro6 = new Libro(
  "Entre los muertos (Trilogía de Illumbe 3)",
  "Misterio",
  "Mikel Santiago",
  "978-84-666-7219-1",
  620
);

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
console.log(libreria.generoFavorito());

document.addEventListener("DOMContentLoaded", () => {
  const pintarLibreria = () => {
    const libreriaEl = document.querySelector("#libreria");
  };
});
