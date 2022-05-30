// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  let arr = String(n).split('');
  let total = n;
  while (total > 9) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = total + Number(arr[i])
    }
    arr = String(total).split('');
  }
  
  return total;
}

digital_root(493193);