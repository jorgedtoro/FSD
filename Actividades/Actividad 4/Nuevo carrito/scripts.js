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
});
//eventos para los botones de añadir y quitar unidades.
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    //const p = btnAdd(e.target.dataset.id);
    const producto = e.target.parentElement;
    console.log(producto);
  }
  if (e.target.classList.contains("btn-danger")) {
    const p = btnMinus(e.target.dataset.id);
  }
});

//************************CLASE CARRITO**************************************** */

class Carrito {
  constructor(productos) {
    this.id = productos.id;
    this.title = productos.title;
    this.sku = productos.SKU;
    this.price = productos.price;
    this.cantidad = productos.cantidad;
  }

  actualizarUnidades(sku, unidades) {
    //Actualiza el nº de unidades que se quieren comprar del producto
  }
  obtenerInformacionProducto(sku) {
    // Devuelve los datos de un producto además de las unidades seleccionadas
  }
  obtenerCarrito() {
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
  }
}
