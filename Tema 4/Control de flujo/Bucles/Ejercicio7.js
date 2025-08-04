let suma = 0;
let valor;

do {
  valor = parseFloat(prompt("Introduce un valor (0 para terminar):"));

  if (valor < 0) {
    alert("Se ignoran los valores negativos.");
  } else if (valor > 0) {
    suma += valor;
  }
} while (valor !== 0);

alert("La suma de los valores introducidos es: " + suma);
