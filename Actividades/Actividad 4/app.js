document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

// Traer productos de la API
const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  pintaDatos(data);
};

const templateProduct = document.getElementById("template_product_id").content;
const tbody = document.getElementById("body_products");

const fragment = document.createDocumentFragment(); //creamos un fragemnt para evitar el reflow.
const producto = document.querySelector("tr").content;
const url = "https://jsonblob.com/api/973862124204081152";

//creamos los productos en el index.html
const pintaDatos = (data) => {
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

//evento para los botones dentro de tbody de la tabla.
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    const p = btnAdd(e.target.dataset.id);
  }
  if (e.target.classList.contains("btn-danger")) {
    const p = btnMinus(e.target.dataset.id);
  }
});

// aumnertar cantidad
btnAdd = (p) => {
  //detecto el span asociado al botón con el id. QuerySelectorAll devuelve un array
  //podemos seleccionar el item mediante el id del target. Restamos 1 para empezar en cero.
  const spanQuantity = tbody.querySelectorAll("span")[p - 1];
  const spanValue = spanQuantity.innerText;
  spanQuantity.innerText = Number(spanValue) + 1;

  //total
  const templatePrice = tbody.querySelectorAll("#product__price")[p - 1];
  const templateTotal = tbody.querySelectorAll("#product__total")[p - 1];
  const templateDescription = tbody.querySelectorAll("#product__title")[p - 1];

  const price = templatePrice.innerText;
  let total = (Number(spanValue) + 1) * price;
  const title = templateDescription.innerText;

  total = total.toFixed(2) + "€";
  templateTotal.innerText = total;

  //carrito
  const tCarrito = document.querySelector("#productsCarrito");
  tCarrito.innerHTML = `
                        <p>${title}</p>
                        <p>${total}</p>
  `;
};
// disminuir cantidad
btnMinus = (p) => {
  const spanQuantity = tbody.querySelectorAll("span")[p - 1];
  const spanValue = spanQuantity.innerText;
  if (spanValue > 0) {
    spanQuantity.innerText = Number(spanValue) - 1;

    //total
    const templatePrice = tbody.querySelectorAll("#product__price")[p - 1];
    const templateTotal = tbody.querySelectorAll("#product__total")[p - 1];

    const price = templatePrice.innerText;
    let total = Number(spanValue - 1) * price;

    templateTotal.innerText = total.toFixed(2) + "€";
  }
};

class Carrito {
  constructor(description, total) {
    this.description = description;
    this.total = total;
  }
  addCarrito() {}
  sumarTotal() {}
  vaciarcarrito() {}
}
