function narcissistic(value) {
  let contador = 0;
  const arr = String(value).split('');
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    const pow = Math.pow(num, arr.length);
    contador = contador + pow;
  }
  return value === contador;
}

//   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
narcissistic(153); // true
narcissistic(7); // true
narcissistic(1652); // false