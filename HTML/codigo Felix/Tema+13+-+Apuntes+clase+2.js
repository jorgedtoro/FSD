/* Diferencia entre var, let y const */
function ejemplo() {
  var a = 5;
  var b = 10;

  if (a === 5) {
    let a = 4; // El alcance es dentro del bloque if
    // var b = 1; // El alcance es dentro de la función
    console.log(a);
    // console.log(b);
  }

  console.log(a); // 5
  // console.log(b); // 1
}

ejemplo();


/* Arrow functions */
const saludar = function() {
  console.log('hola!');
}

function function1() {
  
  const sumatorio = () => {
    let a = 3;
  }
  
	console.log(a); // undefined
  return sumatorio;
}

saludar();


// Evolución de una función de javascript

// Nivel 5
function elevarCuadrado(a) {
  return a * a;
}
elevarCuadrado(2); //4

// Nivel 5.5
const elevarCuadrado = function(a) {
  return a * a;
}
elevarCuadrado(2); //4

// Nivel 10
const elevarCuadrado = (a) => {
  return a * a;
}
elevarCuadrado(2); //4

// Nivel MH
const elevarCuadrado = a => a * a;
elevarCuadrado(2); //4




