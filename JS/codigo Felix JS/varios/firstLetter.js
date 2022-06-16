// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  const ret = {};
  arr.forEach(palabra => {
  	  const letter = palabra.charAt(0).toLowerCase();
    	if (typeof ret[letter] !== "undefined") {
        // Ya existe la clave y puedo "pushear" la palabra
        ret[letter].push(palabra);
      } else {
        // Creo la clave de la letra y le añado un array con la palabra, listo
        // para que en otra vuelta, si una palabra tiene la misma letra inicial
        // se "pushee"
        ret[letter] = [palabra];
      }
  });
  return ret;
}

myFunction(['Alf', 'Alice', 'Ben']); // { a: ['Alf', 'Alice'], b: ['Ben']}

