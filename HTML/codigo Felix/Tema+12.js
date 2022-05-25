const edad = 20;
const nombre = 'Isabel';

/**
* IF
*/

// Comprobación edad >=18
if (edad < 18) {
  console.log("Es menor de edad");
} else {
  console.log("Es mayor de edad");
}

console.log("fin");

// 1 => Lunes
// 2 => Martes
// 3 => Miércoles
//.. 

const diaSemana = 1;


// Horrible
if (diaSemana === 1) {
  console.log("Lunes");
}

if (diaSemana === 2) {
  console.log("Martes");
}

if (diaSemana === 3) {
  console.log("Miércoles");
}
// etc..

// Malo
if (diaSemana === 1) {
  console.log("Lunes");
} else {
  if (diaSemana === 2) {
  	console.log("Martes");
	} else {
    if (diaSemana === 3) {
  		console.log("Miércoles");
		} else {
      if (diaSemana === 3) {
        console.log("Miércoles");
      } else {
        if (diaSemana === 4) {
          console.log("Jueves");
        }
        // etc..
      }
    }
  }
}

// Regular
if (diaSemana === 1) {
  console.log("Lunes");
} else if (diaSemana === 2) {
  console.log("Martes");
} else if (diaSemana === 3) {
  console.log("Miércoles");
} else if (diaSemana === 4) {
  console.log("Jueves");
}

// Regular 2
switch (diaSemana) {
  case 1:
    console.log("Lunes")
    break;
  case 2:
    console.log("Martes")
    break;
  case 3:
    console.log("Miércoles")
    break;
  case 4:
    console.log("Jueves")
    break;
  // etc...
  default:
    console.log("Error")
}

const stringsSemanaObj = {
  1: "Lunes",
  2: "Martes"
};
// Mejor
const stringsSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.log(stringsSemana[diaSemana - 1]);
console.log(stringsSemanaObj[diaSemana]);


/**
* FOR
*/
/*
for (let i = 0; i < 20; i++) {
  console.log(i);
}
*/

/**
* WHILE
*/

let i = 0;
while (i < 4) {
  i = i + 1;
  console.log(i);
}



