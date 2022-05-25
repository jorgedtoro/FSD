/* let a = 1;
let b = 2;

for (let i = 0; i < 12; i++) {
  console.log(i);
}

let edad = 25;
//operador ternario ... un if y solo una sentecia else
edad > 18 ? 'mayor de edad' : 'menor de edad';
d;
 */
//Math.trunc --> trunca los decimales.

/* function myFunction(a) {
  b = a.toString().split('');

  return b
}

myFunction(10);
myFunction(931);
myFunction(193278);

let i = 0, i < Math.trunc(array.length/2), i++ */

/* function myFunction(a, b){

return b.split(a).length-1;
}

myFunction('m', 'how many times does the character occur in this sentence?') */
/* function myFunction(a){
  let negativos = 0;
  for (let i = 0; i<a.length; i++){
    (a[i]<0) ?  negativos = negativos + 1  : negativos;
  }
}

myFunction([1,-2,2,-4]) */

/* function myFunction(arr) {
  let array = 0;
  for (let i=0; i < arr.length; i++){
    
    array = array + arr[i];
  }
  return array / arr.length;
}


myFunction([10,100,40])




 */
//js challenger
function myFunction(obj) {
  return obj["country"];
}
myFunction({ continent: "Asia", country: "Japan" });

function myFunction2(obj) {
  return obj["prop-2"];
}
myFunction2({ one: 1, "prop-2": 2 });

function myFunction3(obj, key) {
  return obj[key];
}
//*******************************vowels count************************************************* */
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  // enter your magic here
  arr = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(arr[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

getCount("abracadabra");

//*****************************unique number************************************************************* */
function findUniq(arr) {
  // do magic

  let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
  return unique;
}

findUniq([1, 1, 1, 2, 1, 1]); // === 2
findUniq([0, 0, 0.55, 0, 0]); //=== 0.55

function findUniq(nums) {
  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i] && i != j) {
        found = true;
        break;
      }
    }
    if (!found) return nums[i];
  }
}

//************************contador narcissistic */
function narcissistic(value) {
  const arr = String(value).split("");
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    pow = Math.pow(num, arr.length);

    contador = contador + pow;
    console.log(contador);
  }
}

narcissistic(153);
