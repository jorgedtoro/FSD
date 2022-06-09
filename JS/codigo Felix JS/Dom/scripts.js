/* ADDEVENTLISTENER */
console.log("hola mundo! desde consola");

const titulo = document.querySelector("h1");
titulo.innerText = "Hola desde JavaScript!";

titulo.addEventListener("mouseenter", function(event) {
    event.target;
    console.log("has entrado en el título!");
    titulo.innerText = "has entrado en el título";
});

titulo.addEventListener("mouseover", function(event) {
    console.log("mouseover");
});

document.addEventListener("keydown", function(event) {
    console.log(event.key);
});

const boton = document.querySelector("button");
boton.addEventListener("click", function(event) {
    console.log(event);
    alert("Has pulsado el botón!");
});

const input = document.querySelector("input");
input.addEventListener("change", function(event) {
    console.log("input changed!");
    console.log(event);
});

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submit!");
});

const anchor = document.querySelector("a");
anchor.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("querías ir a google pero no te dejo");
});

/* SELECTORS */
const ringpull = document.querySelector('.button');
console.log(ringpull); // Sólo veo uno por consola
const ringpulls = document.querySelectorAll('.button');
console.log(ringpulls);

/* Manejo de clases */
const accordionButton = document.querySelector('.accordion__button');
accordionButton.addEventListener('click', function() {
    const accordion = document.querySelector('.accordion');
    /* Opción 1
    if (accordion.classList.contains('accordion--open')) {
        accordion.classList.remove('accordion--open');
    } else {
        accordion.classList.add('accordion--open');
    }
    */
   /* Opción 2 */
   accordion.classList.toggle('accordion--open');
});


/* Crear elementos HTML desde JavaScript */


// <img src="https://via.placeholder.com/150" alt="placeholder">

const image = document.createElement('img');
image.setAttribute("src", "https://via.placeholder.com/150");
image.setAttribute("alt", "image placeholder");
document.body.appendChild(image);

// innerText
// seteo
document.querySelector('#text').innerText = "Soy texto desde innerText";
// consulto
console.log(document.querySelector('#text').innerText);