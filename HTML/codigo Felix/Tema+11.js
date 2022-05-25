/*
typeof(3)
typeof("hola")
typeof(true)
typeof([3, "hola", true])
typeof({
  nombre: "Juan Carlos",
  apellidos: "Barrera Quiñonez",
  edad: 23,
  altaAlumno: true
});

const const = 3.14;
const pi = 3.14;
let velocidad1 = 100;
console.log(velocidad1);
let velocidad2 = 120;
let velocidad3 = 150;

velocidad1 = 200;
console.log(velocidad1);

pi = 2.66; // ERROR!
let media = (velocidad1 + velocidad2 + velocidad3) / 3;

console.log(media);

typeof(velocidad1);
*/

/* Recuperar elementos de un array o de un objeto */
const arrayAlumnos = ["Alberto", "Laura", "Gabriel", "Isabel"];
// arrayAlumnos[0];
// arrayAlumnos[1];
// console.log(arrayAlumnos[-1]);
// arrayAlumnos[arrayAlumnos.length - 1];
// console.log(arrayAlumnos[1000]);
// console.log(arrayAlumnos[4]);

const clave = "edad";
const objAlumno = {
  nombre: "Juan Carlos",
  apellidos: "Barrera Quiñonez",
  edad: 23,
  altaAlumno: true,
  clave: "soy una clave",
};
objAlumno["nombre"];
objAlumno.nombre;
objAlumno[clave];
objAlumno.clave;

/* Operadores */
/*
2 == "2";
2 === "2";
2 !== "2";
3 > 2;
3 < 2;
3 >= 3;
3 > 3;
*/

/*
// OR
false || false;
true || false;
false || true;
true || true;
// AND
false && false;
false && true;
true && false;
true && true;

// NOT
/*
!false;
!true;
*/

/* TIPADO DÉBIL */
/*
let a = 3;
typeof(a);
a = "hola";
typeof(a);
*/

/* Operadores de asignación */
/*
let a = 3;
a += 1;
a = a + 1;
a /= 2;
a++
console.log(a);
*/