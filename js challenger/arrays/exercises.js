//#1.
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

function myFunction1(a, n) {
  return a[n - 1];
}

myFunction1([1, 2, 3, 4, 5], 3);
myFunction1([10, 9, 8, 7, 6], 5);

//#2.
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction2(a) {
  return a.slice(3);
}
myFunction2([1, 2, 3, 4]);

myFunction2([5, 4, 3, 2, 1, 0]);

//#3.
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

function myFunction3(a) {
  return a.slice(-3);
}

//#4.
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction4(a, b) {
  let i = 0;
  while (i < a.length) {
    if (a[i] === b) {
      a.splice(i, 1);
    } else {
      ++i;
    }
  }
  return a;
}
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
myFunction4([1, 2, 3], 2);

//#5./ Write a function that takes an array (a) as argument
// Return the number of elements in a

function myFunction5(a) {
  return a.length;
}
myFunction5([1, 2, 2, 4]);

//#6.// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction6(a) {
  let cont = 0;
  const negative = a.forEach((element) => {
    if (element < 0) {
      cont++;
    }
  });
  return cont;
}
myFunction6([1, -2, 2, -4]);
