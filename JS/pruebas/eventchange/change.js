document.addEventListener("DOMContentLoaded", () => {
  const menos = document.querySelector("#minus");
  const mas = document.querySelector("#add");
  const inputEl = document.querySelector("#cantidad");

  menos.addEventListener("click", (e) => {
    const cantidad = Number(inputEl.value);
    if (cantidad > 0) {
      inputEl.value = resta(cantidad);
    }
  });

  mas.addEventListener("click", (e) => {
    const cantidad = Number(inputEl.value);
    if (cantidad >= 0) {
      inputEl.value = suma(cantidad);
    } else {
      inputEl.value = 0;
    }
  });

  inputEl.addEventListener("change", (e) => {
    const cantidad = Number(inputEl.value);
    if (cantidad >= 0) {
      actualizaUnidades(cantidad);
    } else {
      inputEl.value = 0;
    }
  });
  const suma = (c) => {
    return (c = c + 1);
  };

  const resta = (c) => {
    return (c = c - 1);
  };
  const actualizaUnidades = (cantidad) => {
    console.log(cantidad);
  };
});
