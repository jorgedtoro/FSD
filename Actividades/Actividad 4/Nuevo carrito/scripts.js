/************************CLASE CARRITO******************************************/

class Carrito {
  constructor(productos = []) {
    this.productos = productos;
  }
  addCarrito(producto) {
    //si tenemos el producto, no lo añadimos sumamos unidades
    if (!this.existeProducto(producto)) {
      this.productos.push(producto);
    } else {
      this.actualizarUnidades(producto);
      //console.log("producto ya en el carro");
    }
  }
  existeProducto(producto) {
    return this.existeSku(producto.sku);
  }
  existeSku(sku) {
    return this.productos.find((p) => p.sku === sku);
  }

  actualizarUnidades(producto) {
    //Actualiza el nº de unidades que se quieren comprar del producto
    const nuevaCantidad = Number(producto.cantidad) + 1;
    return (this.productos[producto.cantidad] = nuevaCantidad);
  }

  obtenerInformacionProducto(sku) {
    // Devuelve los datos de un producto además de las unidades seleccionadas
    //habrá que usar un método como find... usando de búsqueda sku.
  }
  obtenerCarrito() {
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
    return console.log(this.productos);
  }
}

/*****************************CONSTANTES Y VARIABLES*****************************************/
const url = "https://jsonblob.com/api/973862124204081152";
const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  pintarProductos(data);
};
const templateProduct = document.getElementById("template_product_id").content;
const fragment = document.createDocumentFragment(); //creamos un fragemnt para evitar el reflow.
const tbody = document.getElementById("body_products");
const carrito = new Carrito();

//crea el template de los productos al iniciar la página.
const pintarProductos = (data) => {
  data.products.forEach((item) => {
    templateProduct.getElementById("product__title").textContent = item.title;
    templateProduct.getElementById("product__sku").textContent = item.SKU;
    templateProduct.getElementById("product__price").textContent = item.price;
    templateProduct.getElementById("product__total").textContent = "0.00€";
    templateProduct.getElementById("btn_minus").dataset.id = item.id;
    templateProduct.getElementById("btn_add").dataset.id = item.id;
    templateProduct.querySelector("#quantity").dataset.id = item.id;
    templateProduct.querySelector(".product__price").dataset.id = item.id;
    templateProduct.querySelector(".product__total").dataset.id = item.id;

    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
  });
  tbody.appendChild(fragment);
};
//crea el carrito en el DOM.
const pintarCarrito = () => {};

/******************************EVENTOS******************************************************/
// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

//eventos para los botones de añadir y quitar unidades.

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    const tproducto = e.target.closest(".template_product_row");
    //creo el objeto producto a partir del e.target
    const producto = {
      id: tproducto.querySelector(".btn").dataset.id,
      title: tproducto.querySelector("#product__title").innerText,
      sku: tproducto.querySelector("#product__sku").innerText,
      price: tproducto.querySelector("#product__price").innerText,
      cantidad: tproducto.querySelector("#quantity").innerText,
    };

    carrito.addCarrito(producto);
    // carrito.actualizarUnidades(producto.sku, producto.cantidad);
    carrito.obtenerCarrito();
  }
  if (e.target.classList.contains("btn-danger")) {
    //const p = btnMinus(e.target.dataset.id);
  }
});
