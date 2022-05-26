// BUCLES

// FOR
// Sabemos dónde empieza y dónde acaba
for(let i = 1; i <= 10; i++) {
 console.log(i);
}

// Típico caso de uso de un for
// Recorrer un array
const alumnos = ['Jaime', 'Arturo', 'Gabriel'];
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}



// WHILE
// No sabemos cuando acaba
const numeros = [1,1,1,1,1,1,2,3,1,1,1];
let encontrado = false;
let i = 0;
while(!encontrado && i < numeros.length) {
  if (numeros[i] === 2) {
    encontrado = true;
  }
  i++;
}

