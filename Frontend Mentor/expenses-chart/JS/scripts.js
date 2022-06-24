const url = "data.json";

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((res) => {
      const data = res.json;
    })
    .then((data) => {
      return data;
    });
});
console.log(data);
