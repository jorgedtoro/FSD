document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const templateProduct = document.getElementById("template_product_id").content;
const tbody = document.getElementById("body_products");
const fragment = document.createDocumentFragment();
const producto = document.querySelector("tr").content;
// Traer productos de la base de datos json
const fetchData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  // console.log(data);
  pintaDatos(data);
};
const botonMns = document.getElementById("btn_minus");
//creamos los productos en el index.html
const pintaDatos = (data) => {
  data.forEach((item) => {
    let clase = 1;
    templateProduct.getElementById("product__title").textContent = item.title;
    templateProduct.getElementById("product__sku").textContent =
      "Ref: " + item.SKU;
    templateProduct.getElementById("product__price").textContent = item.price;
    templateProduct.getElementById("product__total").textContent = "0€";
    templateProduct.getElementById("btn_minus").dataset.id = item.id;
    templateProduct.getElementById("btn_add").dataset.id = item.id;
    clase = clase + 1;
    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
  });
  tbody.appendChild(fragment);
};

// http://jsonblob.com/973862124204081152.

botonMns.addEventListener("click", () => {
  console.log("diste click");
});

//CLASE CARRITO

// class carrito {
//   contructor(id) {
//     this.id = id;
//     this.producto = obtenerProductos();
//   }

//   obtenerProductos() {
//     const productosCodificados = localStorage.getItem(this.clave);
//     return JSON.parse(productosCodificados) || [];
//   }
// }
