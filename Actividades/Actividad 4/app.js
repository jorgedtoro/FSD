// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});
const templateProduct = document.getElementById("first-product");

// function PintarProductos() {
//   const lista = document.getElementById("lista-dinamica");

//   const arrayItem = ["item 1", "item 2", "item 3"];

//   const fragment = document.createDocumentFragment();

//   arrayItem.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     fragment.appendChild(li);
//   });

//   lista.appendChild(fragment);
// }

// function PintarProductos() {
//   const lista = document.getElementById("first-product");

//   const arrayItem = ["iFhone 13 Pro", "0K3QOSOV4V", "938.99"];

//   const fragment = document.createDocumentFragment();

//   arrayItem.forEach((item) => {
//     const h2 = document.createElement("h2");
//     h2.textContent = item;
//     fragment.appendChild(h2);
//   });
//   lista.appendChild(fragment);
// }

// Traer productos
const fetchData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  // console.log(data)
  pintaDatos(data);
};

const pintaDatos = (data) => {
  data.forEach((item) => {
    templateProduct.querySelector("h2").textContent = item.title;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

//clase carrito

class Carrito {
  constructor(productos) {
    this.productos = productos;
  }

  actualizarUnidades(sku, unidades) {
    // Actualiza el número de unidades que se quieren comprar de un producto
  }

  obtenerInformacionProducto(sku) {
    // Devuelve los datos de un producto además de las unidades seleccionadas
    // Por ejemplo
    // {
    //   "sku": "0K3QOSOV4V",
    //   "quantity": 3
    // }
  }

  obtenerCarrito() {
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
    // Por ejemplo:
    // {
    //   "total": "5820",
    //   "currency: "€",
    //   "products" : [
    //     {
    //       "sku": "0K3QOSOV4V"
    //       ..
    //     }
    //    ]}
    // }
  }
}

// http://jsonblob.com/973862124204081152.
