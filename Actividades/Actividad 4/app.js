document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const templateProduct = document.getElementById("template_product_id").content;
const tbody = document.getElementById("body_products");
const fragment = document.createDocumentFragment();
const producto = document.querySelector("tr").content;

// Traer productos de la base de datos json
const fetchData = async () => {
  const res = await fetch("data.json"); // http://jsonblob.com/973862124204081152.
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
    templateProduct.getElementById("btn_minus").dataset.id = item.id;
    templateProduct.getElementById("btn_add").dataset.id = item.id;
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
// const setCarrito = () => {
//   console.log(item);
//   const linea = document.getElementById('template_product_row').content;
//   linea.querySelector('span')= "1"
//   // const producto = {
//   //   title: item.querySelector("h2").textContent,
//   //   precio: item.querySelector("p").textContent,
//   //   id: item.querySelector("button").dataset.id,
//   //   cantidad: 1,
//   // };
// };
// function productTemplate(data) {
//   data.forEach((item))
//   return `
//       <tr class="template_product_row" id="row${data.id}">
//           <th scope="row" id="prueba_product">
//             <h2 id="product__title">iFhone 13 Pro</h2>
//             <p class="fs-6 fw-light" id="product__sku">Ref: 0K3QOSOV4V</p>
//           </th>
//           <td>
//             <button class="btn btn-danger" id="btn_minus">-</button>
//             <span class="border border-secondary rounded-2 py-2 px-4 quantity">0</span>
//             <button class="btn btn-info" id="btn_add">+</button>
//           </td>
//           <td id="product__price">938,99€</td>
//           <td id="product__total">2816,97€</td>
//       </tr>
//   `;
// }

productTemplate(data);
