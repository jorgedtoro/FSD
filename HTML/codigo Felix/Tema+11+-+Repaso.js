let a = 1;
typeof(a);
a = "hola!";
typeof(a);
a = false;


let array2 = [];
array2[0] = 1;
array2[1] = "hola!";
array2[2] = false;
console.log(array2);

let array = [1, "hola!", false];
console.log(array);

array[3] = "final";
console.log(array);

const alumno = {
  name: "Isabel",
  edad: 27,
  amigos: [
    "Gabriel",
   	"Eneida"
  ],
  direccion: {
    calle: "C/ Ninguna",
    cp: "28232"
  }
};

const key = "name";

console.log(alumno[key]);
console.log(alumno.key);
console.log(alumno.edad);
console.log(alumno.direccion.calle);


