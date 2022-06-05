// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let ret = "";
  const arrA = a.split('');
  let cont = 0;
  for (let i = arrA.length - 1; i >= 0 ; i--) {
    ret = arrA[i] + ret;
    if (cont % 3 === 2 && cont !== arrA.length - 1) {
      ret = b + ret;
    }
    cont++;
  }
  return ret;
}

myFunction('123456789','.') //;