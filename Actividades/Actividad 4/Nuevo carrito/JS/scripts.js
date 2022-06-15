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

      carrito.addCarrito(producto);
      tproducto.querySelector("#quantity").innerText = producto.cantidad;
      tproducto.querySelector(".product__total").innerText =
        carrito.calculaTotal(producto);
      //console.log(producto);
      pintarCarrito();
      //const totalCarrito = carrito.calculaTotal();

      pintarFooter();
    }
    if (e.target.classList.contains("btn-danger")) {
      //const p = btnMinus(e.target.dataset.id);
      carrito.restaUnidades(producto);
      if (producto.cantidad > 0) {
        tproducto.querySelector("#quantity").innerText = producto.cantidad;
      }
    }
  });
  //crea el carrito en el DOM.
  const pintarCarrito = () => {
    const templateCarrito =
      document.querySelector("#template__carrito").content;
    carritoEl.innerHTML = "";
    carrito.obtenerCarrito().forEach((producto) => {
      //console.log(producto.getTitle());
      templateCarrito.querySelector("#carrito__producto__title").textContent =
        producto.getTitle();
      templateCarrito.querySelector("#carrito__producto__total").textContent =
        producto.getPrice();

      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    });

    carritoEl.appendChild(fragment);
  };

  //crea el footer del carrito
  const pintarFooter = () => {
    const templateFooter = document.querySelector(
      "#template__carrito__footer"
    ).content;
    footerCarritoEl.innerHTML = "";
    const totalCarrito = carrito.calculaTotal();
    templateFooter.querySelector("#carritoFooter__total").textContent =
      totalCarrito;
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
  };
  footerCarritoEl.appendChild(fragment);
});
