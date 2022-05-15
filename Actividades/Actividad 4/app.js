document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});
const templateProduct = document.getElementById(
  "pruebatemplate_product"
).content;
const tbody = document.getElementById("body_products");
const fragment = document.createDocumentFragment();

// Traer productos de la base de datos json
const fetchData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  // console.log(data);
  pintaDatos(data);
};

//creamos los productos en el index.html
const pintaDatos = (data) => {
  data.forEach((item) => {
    templateProduct.getElementById("product__title").textContent = item.title;
    templateProduct.getElementById("product__sku").textContent =
      "Ref: " + item.SKU;
    templateProduct.getElementById("product__price").textContent = item.price;
    templateProduct.getElementById("product__total").textContent = "0€";

    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
  });
  tbody.appendChild(fragment);
};

// http://jsonblob.com/973862124204081152.
