let numeros = [];

for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generado:", numeros);

let sumaPares = 0;
let productoImpares = 1;

for (let i = 0; i < numeros.length; i++) {
  if (i % 2 === 0) {
    sumaPares += numeros[i];
  } else {
    productoImpares *= numeros[i];
  }
}

console.log("Suma de posiciones pares:", sumaPares);
console.log("Producto de posiciones impares:", productoImpares);
