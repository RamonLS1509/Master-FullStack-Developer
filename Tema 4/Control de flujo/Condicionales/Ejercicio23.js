let año = parseInt(prompt("Introduce un año:"));
let esBisiesto = false;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
  esBisiesto = true;
}

if (esBisiesto) {
  alert(año + " es un año bisiesto.");
} else {
  alert(año + " no es un año bisiesto.");
}
