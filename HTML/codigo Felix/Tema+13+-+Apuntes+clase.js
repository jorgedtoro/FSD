/* Teoría funciones
const a = 3;

function saludar(nombre, edad) {
  console.log("hola! " + nombre + " tienes " + edad + " años");
}

function sumar(a, b) {
  return a + b;
}

console.log(a);
console.log(saludar);
saludar('Cristina', 32);
saludar('Jorge', 33);
let resultado = sumar(2,3);
console.log(resultado);

*/

/* Ámbito de función */

/*
Ejercicio1: Un tren sale de BCN a 120km/h, otro tren sale de Madrid a 100km/h....

velocidadBcn = 120
velocidadMadrid = 100
   
   Numero primo
     contador = 1


Ejercicio2: Una botella agua está a 30º, cuanta F se necesita para llevarla a 100º
temperatura1 = 30
temperatura2 = 100


function ejercicio1(a,b) {
  const pi = 3.14;
  console.log(pi);
  return a * b * pi;
}

// calcular el sumatorio de a (se repite N veces) y sumarle b
function ejercicio2(a,n,b) {
  const pi = 3.14;
  const sum = function(a,n) {
  	  let sumatorio = 0;
    	for (let i = 0; i <= n; i++) {
        sumatorio = sumatorio + a
      }
    	return sumatorio;
  }
  return sum(a,n) + b;
}

ejercicio1(2,3);
ejercicio2(3,3,1);

/* EJERCICIO TIENDA

const pi = 3.14;

function calcularTipoIva(usuario) {
  const IVAESPANA = 21;
  const IVACANARIAS = 7;
  const IVACERO = 0;
  let ivaDelUsuario = IVAESPANA;
  if(usuario.esEmpresa) {
    ivaDelUsuario = IVACERO;
  } else if (usuario.residencia === 'Canarias') {
    ivaDelUsuario = IVACANARIAS;
  }
  return ivaDelUsuario;
}

function anadirIVA(precio, iva) {
  return precio + (precio / 100 * iva)
}

console.log(IVAESPANA);

const ivaUsuario = calcularTipoIva(usuario);
const precioOrdenador = anadirIVA(1000, ivaUsuario);


