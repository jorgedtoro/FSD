const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.push(11);

console.log(array);

array.unshift("Soporte Clases");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

// forEach

array.forEach(function (elemento) {
  console.log(elemento);
});

//con arrow function

array.forEach((elemento) => console.log(elemento));

//arrow function con varias lineas
array.forEach((elemento) => {
  console.log(elemento);
  console.log("Hola");
});

/*MAP */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numeros por 2
const resultado = numeros.map((numero) => numero * 2);

console.log(resultado);

/*FILTER */

const nombres = [
  "Juan",
  "Pedro",
  "Maria",
  "Jose",
  "Luis",
  "Ana",
  "Juana",
  "Jorge",
  "Pablo",
  "Sara",
];

const filtrado = nombres.filter(function (nombre) {
  nombre.includes("J"); //no haría falta poner if(nombre.includes("J"))
  return true;
});
console.log(filtrado);

/*SORT */
const numerosaordenar = [3, 7, 8, 4, 9, 6, 78, 28, 19, 10];
const ordenados = numerosaordenar.sort((a, b) => a - b);

console.log(ordenados);

//ordena nombres de A-Z
console.log(nombres.sort());

// REDUCE

const numerosAsumar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const suma = numerosAsumar.reduce((acumulador, numero) => acumulador + numero);
console.log(suma);

//EJERCICIO FÉLIX
// https://github.com/imcodingideas/map-filter-reduce-exercises/blob/master/zoo/data.js

// ejercicio jschallenger

function myFunction(arr) {
  let i = 1;
  let equals = true;
  while (equals && i < arr.length) {
    equals = arr[i] === arr[0];
    i++;
  }
  return equals;
}

myFunction([true, true, true, true]);
myFunction(["10", 10, 10, 10]);
myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
