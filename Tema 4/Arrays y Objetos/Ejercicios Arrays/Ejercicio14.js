let numeros = [];
for (let i = 0; i < 20; i++) {
  let aleatorio = Math.floor(Math.random() * 9) + 1;
  numeros.push(aleatorio);
}

console.log("Contenido del array:", numeros);
alert("Contenido del array:\n" + numeros.join(", "));

let cantidades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 

for (let i = 0; i < numeros.length; i++) {
  let valor = numeros[i];
  cantidades[valor]++;
}

let resultado = "";
for (let i = 1; i <= 9; i++) {
  resultado += `Cantidad de ${i}: ${cantidades[i]}\n`;
}

console.log(resultado);
alert(resultado);