function sumar(...numeros: number[]) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(10, 20));  // 30
console.log(sumar()); 