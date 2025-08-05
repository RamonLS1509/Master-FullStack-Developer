function calculaImpuestos(precio: number, impuestos: number = 0.21){
   return precio + (precio * impuestos);
}

console.log(calculaImpuestos(100));
console.log(calculaImpuestos(100, 0.1));
console.log(calculaImpuestos(100, 0));