// manejador al evento DOMContentLoaded que
// dispara el documento cuando el DOM ya está listo:
document.addEventListener("DOMContentLoaded", function (event) {
  header_title.innerHTML = "este texto cambia";
});

// recupero el elemento HTML y lo guardo en una constante

const header_title = document.getElementById("header_title");

const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  header_title.innerHTML = "iFhone 13 Pro";
});
