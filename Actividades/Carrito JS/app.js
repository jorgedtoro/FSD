const templateCard = document.getElementById("template-card").content;

const templateCarrito = document.getElementById("template-carrito").content;

const fragment = document.createDocumentFragment();

let carrito = {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

// Traer productos
const fetchData = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  // console.log(data)
  pintarCards(data);
};

// Pintar productos
const pintarCards = (data) => {
  data.forEach((item) => {
    templateCard.querySelector("h5").textContent = item.title;
    templateCard.querySelector("p").textContent = item.precio;
    templateCard.querySelector("button").dataset.id = item.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
