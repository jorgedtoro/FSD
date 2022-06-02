/*
// Ejemplo de array multinivel: 3 en raya
* 0 0
0 * 0
* 0 0

1 2 3
4 5 6
7 8 9

const [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
*/
const multiarray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

multiarray.forEach(function (elementosPrimerNivel) {
  elementosPrimerNivel.forEach(function(elementosSegundoNivel){
    console.log(elementosSegundoNivel);
  });
});

// Mostrará por consola
// 1 2 3 4 5 6 7 8 9