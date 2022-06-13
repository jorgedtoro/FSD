//constantes y variables
const url = "https://jsonblob.com/api/973862124204081152";
const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  pintarProductos(data);
};
const templateProduct = document.getElementById("template_product_id").content;
const fragment = document.createDocumentFragment(); //creamos un fragemnt para evitar el reflow.
const tbody = document.getElementById("body_products");

//crea el template de los productos al iniciar la página.
const pintarProductos = (data) => {
  data.products.forEach((item) => {
    templateProduct.getElementById("product__title").textContent = item.title;
    templateProduct.getElementById("product__sku").textContent =
      "Ref: " + item.SKU;
    templateProduct.getElementById("product__price").textContent = item.price;
    templateProduct.getElementById("product__total").textContent = "0.00€";
    templateProduct.getElementById("btn_minus").dataset.id = item.id;
    templateProduct.getElementById("btn_add").dataset.id = item.id;
    templateProduct.querySelector("span").dataset.id = item.id;
    templateProduct.querySelector(".product__price").dataset.id = item.id;
    templateProduct.querySelector(".product__total").dataset.id = item.id;

    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
  });
  tbody.appendChild(fragment);
};
//crea los productos que se añaden al carrito.
const pintarCarrito = () => {};

// Eventos
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
  let carrito = new Carrito();
});
//eventos para los botones de añadir y quitar unidades.
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    //const p = btnAdd(e.target.dataset.id);
    const producto = e.target.closest(".template_product_row");
    // console.log(producto);
    // producto.actualizarUnidades();
    // tbody.querySelector("span").innerText = producto.cantidad;
  }
  if (e.target.classList.contains("btn-danger")) {
    //const p = btnMinus(e.target.dataset.id);
  }
});

//************************CLASE CARRITO**************************************** */

class Carrito {
  constructor(producto) {
    this.id = producto.id;
    this.sku = producto.SKU;
    this.price = producto.price;
    this.cantidad = 0;
  }

  actualizarUnidades(sku, unidades) {
    //Actualiza el nº de unidades que se quieren comprar del producto
    //return this.cantidad++;
  }

  obtenerInformacionProducto(sku) {
    // Devuelve los datos de un producto además de las unidades seleccionadas
    //habrá que usar un método como find... usando de búsqueda sku.
  }
  obtenerCarrito() {
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
  }
}

//this.id = producto.querySelector(".btn").dataset.id;
// this.title = producto.querySelector("#product__title").innerText;
// this.sku = producto.querySelector("#product__sku").innerText;
// this.price = producto.querySelector("#product__price").innerText;
// this.cantidad = producto.querySelector("span").innerText;
