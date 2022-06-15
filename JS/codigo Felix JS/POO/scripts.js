const libreria = new Libreria();

document.addEventListener('DOMContentLoaded', () => {

    const borrarLibroClickHandler = (event) => {
        const isbn = event.target.getAttribute('data-isbn');
        libreria.quitarLibro(isbn);
        pintarLibreria();
    };
    
    const pintarLibreria = () => {
        const libreriaEl = document.querySelector('#libreria');
        libreriaEl.innerHTML = "";
        libreria.getLibros().forEach(libro => {
            const li = document.createElement('li');
            let content = "";
            content += `<p>${libro.getTitulo()}</p>`;
            content += `<p>${libro.getAutor()}</p>`;
            li.innerHTML = content;

            const borrarButton = document.createElement('button');
            borrarButton.innerText = 'Borrar';
            borrarButton.setAttribute('data-isbn', libro.getIsbn());
            borrarButton.addEventListener('click', borrarLibroClickHandler);

            li.appendChild(borrarButton);
            libreriaEl.appendChild(li);
        });

        const pesoTotal = document.querySelector('#pesoTotal');
        pesoTotal.innerText = libreria.pesoTotal();
    };
    
    // Pinto libros del listadoLibros
    listadoLibros.forEach(libro => {
        const nuevoLibro = new Libro(libro.titulo, libro.genero, libro.autor, libro.isbn, libro.peso);
        libreria.guardarLibro(nuevoLibro);
    });

    // Formulario nuevo libro
    const nuevoLibroForm = document.querySelector('#nuevoLibro');
    nuevoLibroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const titulo = nuevoLibroForm.querySelector("#titulo").value;
        const genero = nuevoLibroForm.querySelector("#genero").value;
        const autor = nuevoLibroForm.querySelector("#autor").value;
        const isbn = nuevoLibroForm.querySelector("#isbn").value;
        const peso = nuevoLibroForm.querySelector("#peso").value;

        const nuevoLibro = new Libro(titulo, genero, autor, isbn, peso);
        libreria.guardarLibro(nuevoLibro);
        nuevoLibroForm.reset();
        pintarLibreria();
    });

    pintarLibreria();
});