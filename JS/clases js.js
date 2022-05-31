function narcissistic(value){
  const arr = String(value).split('');
  let contador = 0;
  for ( let i =0; i < arr.length; i++){
    
    const num = Number(arr[i]);
    pow = Math.pow(num, arr.length);
    
    contador = contador + pow
    
	}
  return contador
}
                     
narcissistic(153)
console.log(contador)