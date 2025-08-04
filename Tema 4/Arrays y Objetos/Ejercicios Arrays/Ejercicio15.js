let enteros = [];
let decimales = [];

let numero = 0;

while (numero >= 0) {
  numero = parseFloat(prompt("Introduce un número (negativo para salir):"));

  if (numero >= 0) {
    if (numero % 1 === 0) {
      enteros.push(numero);
    } else {
      decimales.push(numero);
    }
  }
}

let cantidadEnteros = enteros.length;
let cantidadDecimales = decimales.length;

let sumaEnteros = 0;
for (let i = 0; i < enteros.length; i++) {
  sumaEnteros += enteros[i];
}

let todos = enteros.concat(decimales);
let sumaTotal = 0;
for (let i = 0; i < todos.length; i++) {
  sumaTotal += todos[i];
}

let media = todos.length > 0 ? sumaTotal / todos.length : 0;

alert("Cantidad de enteros: " + cantidadEnteros);
alert("Cantidad de decimales: " + cantidadDecimales);
alert("Suma de enteros: " + sumaEnteros);
alert("Media de todos los números: " + media);
