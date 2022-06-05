// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  const ret = {};
  arr.forEach((palabra) => {
    const letter = palabra.charAt(0).toLowerCase();
    if (typeof ret[letter] !== "undefined") {
      ret[letter].push(palabra);
    } else {
      ret[letter] = [palabra];
    }
  });
  return ret;
}

myFunction(["Alf", "Alice", "Ben"]);

myFunction(["Ant", "Bear", "Bird"]);

myFunction(["Berlin", "Paris", "Prague"]);

console.log(myFunction(["Alf", "Alice", "Ben"]));

// Write a function that takes an object (a) as argument
// Return the sum of all object values
// function myFunction(a) {
//   Object.values(a).reduce((acc, val) => acc + val);
//   return;
// }
// myFunction({ a: 1, b: 2, c: 3 });

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj) {
  delete obj["b"];
  return obj;
}
myFunction({ a: 1, b: 7, c: 3 });
