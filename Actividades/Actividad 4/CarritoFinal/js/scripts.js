/*****************************CONSTANTES Y VARIABLES*****************************************/
const url = "https://jsonblob.com/api/973862124204081152";
const carrito = new Carrito();

// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
document.addEventListener("DOMContentLoaded", (e) => {
  //recuperamos los productos de la API.
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    pintarProductos(data);
  };

  fetchData();

  const templateProduct = document.getElementById(
    "template_product_id"
  ).content;
  const fragment = document.createDocumentFragment(); //creamos un fragemnt para evitar el reflow.
  const tbody = document.getElementById("body_products");
  const carritoEl = document.getElementById("productosCarrito");
  const footerCarritoEl = document.getElementById("footerCarrito");
  //crea el template de los productos
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

  //eventos para los botones de añadir y quitar unidades.
  tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-info")) {
      const tproducto = e.target.closest(".template_product_row");
      //creo el objeto producto a partir del e.target
      const id = tproducto.querySelector(".btn").dataset.id;
      const title = tproducto.querySelector("#product__title").innerText;
      const sku = tproducto.querySelector("#product__sku").innerText;
      const price = Number(
        tproducto.querySelector("#product__price").innerText
      );
      const cantidad = Number(tproducto.querySelector("#quantity").innerText);

      const producto = new Producto(id, title, sku, price, cantidad);
      console.log(producto);
    }
  });
});
