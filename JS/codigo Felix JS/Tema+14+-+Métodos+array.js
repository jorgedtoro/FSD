/* MÉTODOS DE ARRAY */
const array = ["Isabel", "Jaime"];

// Llega Jorge
array.push("Jorge");

// Llega soporte clases y tiene "prioridad" para ponerse el primero
array.unshift("Soporte Clases");

// El profesor se enfada y echa al último alumno que ha llegado
array.pop();

// Soporte clases se desconecta (ocupa la primera posición)
array.shift();


/* FOR EACH */
// Listado de Alumnos
const arrayForeach = ["Isabel", "Gabriel", "Jaime", "Jorge"];

for (let i = 0; i < arrayForeach.length; i++) {
  //console.log(arrayForeach[i]);
}

arrayForeach.forEach(function(elemento) {
  //console.log(elemento);
});

arrayForeach.forEach((elemento) => {
  //console.log(elemento)
});

const saludador = elemento => console.log(elemento)

array.forEach(saludador);

/* MAP */

const numeros = [1,2,3,4];
const resultado = [2,4,6,8];

// Sin map
const resultSinMap = [];
numeros.forEach(function(elemento) {
  resultSinMap.push(elemento * 2);
});
// console.log(resultSinMap);

// Con map
const resultConMap = numeros.map(function(elemento) {
  return elemento * 2;
})


/* Filter */
const hastael10 = [1,2,3,4,5,6,7,8,9,10];
const pares = hastael10.filter(function(elemento){
  return (elemento % 2 === 0);
});
const paresSencillo = hastael10.filter(elemento => elemento % 2 === 0)

/* Sort */
const numerosaordenar = [33, 45, 1, 100, 2, 4];

const ordenados = numerosaordenar.sort(function(a, b) {
  return a - b;
});

console.log(ordenados);

/* Reduce */
const numerosASumar = [1,2,3,4,5,6,7,8,9];
const suma = numerosASumar.reduce(function(acc, elemento){
  return acc + elemento
}, 0);
console.log(suma);

/* Concatenar funciones */
const arrayJaime = [1,2,3,4];
const arrayModificadoJaime = arrayJaime.map(elemento => elemento * 2).filter(elemento => elemento % 2);

/* Recorrer datos de API */
const listado = [
  {
    nombre: "Gabriel Pacheco",
    edad: 34,
    signoZodiaco: "Virgo"
  }, // => "Gabriel Pacheco"
  {
    nombre: "Lola Rocha Tercero",
    edad: 30,
    signoZodiaco: "Capricornio"
  },
  {
    nombre: "Albert Altarriba",
    edad: 17,
    signoZodiaco: "Leo"
  }
];

const mayoresDeEdad = listado.filter(function(elemento) {
  return elemento.edad >= 18
});

const soloNombres = listado.map(function(elemento) {
  return elemento.nombre
});

const sumarEdades = listado.reduce(function(acc, elemento){
  return acc + elemento.edad 
}, 0);