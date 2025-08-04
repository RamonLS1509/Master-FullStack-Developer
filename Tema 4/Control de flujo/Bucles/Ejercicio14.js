let lineas = parseInt(prompt("Introduce un número de líneas:"));

let dibujo = "";

for (let i = 1; i <= lineas; i++) {
  dibujo += "*".repeat(i) + "\n";
}

alert(dibujo);