const button = document.getElementById('button');
const todos = [];
const input = document.querySelector('#input');

button.addEventListener('click' , () => {
  const value = input.value;
  if (value === "") {
    alert("rellena el todo!");
  } else if (todos.includes(value)) {
    alert("esa tarea ya existe!");
  } else {
     todos.push(value);
    const list = document.querySelector('#list');
    const newLi = document.createElement('li');
    newLi.innerText = value;
    list.appendChild(newLi);
    input.value = "";
  }
});