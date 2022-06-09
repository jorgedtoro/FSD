function highAndLow(str) {
  const arr = str.split(' ');
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < str.length; i++) {
    const number = Number(arr[i]);
    if (min > number) {
      min = number;
    }
    if (max < number) {
      max = number;
    }
  }
  return `${max} ${min}`;
}

highAndLow("1 2 3 4 5");  // return "5 1"