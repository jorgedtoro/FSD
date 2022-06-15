const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;

const fragment = document.createDocumentFragment();

let carrito = {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});
items.addEventListener("click", (e) => {
  btnAccion(e);
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

//Agregar al carrito
const addCarrito = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    //console.log(e.target.parentElement);
    setCarrito(e.target.parentElement);
  }
};

const setCarrito = (item) => {
  const producto = {
    title: item.querySelector("h5").textContent,
    precio: item.querySelector("p").textContent,
    id: item.querySelector("button").dataset.id,
    cantidad: 1,
  };
  // console.log(producto);
  //si ya existe el producto le sumamos 1 a la cantidad y no lo creamos de nuevo.
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }
  carrito[producto.id] = { ...producto };
  pintarCarrito();
};

//Crear carrito
const pintarCarrito = () => {
  items.innerHTML = "";

  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector("span").textContent =
      (producto.precio * producto.cantidad).toFixed(2) + "€";

    //botones
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();
};

//crear footer del carrito

const pintarFooter = () => {
  footer.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
    return;
  }

  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => {
    return acc + cantidad;
  }, 0); //acumulador para ir sumando la cantidad en el total del footer
  const nPrecio = Object.values(carrito).reduce((acc, { precio, cantidad }) => {
    return acc + cantidad * precio;
  }, 0); //acumulador para ir sumando el precio en el total del footer
  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  //accedemos al boton vaciar todo del footer
  const btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => {
    carrito = {};
    pintarCarrito();
  });
};

//función sumar restar cantidad desde los botones del carrito

const btnAccion = (e) => {
  // const btnSumar = document.querySelectorAll(".btn-info");
  // const btnRestar = document.querySelectorAll(".btn-danger");
  //sumar cantidad
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
    //producto.cantidad++; //linea de arriba simplificada.
    carrito[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }
  //restar cantidad
  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    }

    pintarCarrito();
  }

  e.stopPropagation();
};
