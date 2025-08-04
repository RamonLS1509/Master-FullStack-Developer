let numero;

do {
  numero = parseInt(prompt("Introduce un número (0 para salir):"));

  if (numero > 0) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma += i;
    }
    alert("La suma de los números del 1 al " + numero + " es: " + suma);
  } else if (numero !== 0) {
    alert("Introduce un número mayor que 0, o 0 para salir.");
  }

} while (numero !== 0);

alert("Programa terminado. ¡Hasta luego!");
