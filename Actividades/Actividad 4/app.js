document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const templateProduct = document.getElementById("template_product_id").content;
const tbody = document.getElementById("body_products");
const fragment = document.createDocumentFragment(); //creamos un fragemnt para evitar el reflow.
const producto = document.querySelector("tr").content;
const url = "http://jsonblob.com/api/973862124204081152";
// Traer productos de la base de datos json
const fetchData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  pintaDatos(data);
};

//creamos los productos en el index.html
const pintaDatos = (data) => {
  data.products.forEach((item) => {
    let id = 1;
    templateProduct.getElementById("product__title").textContent = item.title;
    templateProduct.getElementById("product__sku").textContent =
      "Ref: " + item.SKU;
    templateProduct.getElementById("product__price").textContent = item.price;
    templateProduct.getElementById("product__total").textContent = "0€";
    templateProduct.getElementById("btn_minus").dataset.id = id;
    templateProduct.getElementById("btn_add").dataset.id = id;
    id = id + 1;
    console.log(id);
    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
  });
  tbody.appendChild(fragment);
};

//evento para los botones dentro de tbody de la tabla.
tbody.addEventListener("click", (e) => {
  const p = btnAddMinus(e.target.dataset.id);
});

// aumnertar y disminuir cantidad
btnAddMinus = (p) => {
  console.log(p);
};
