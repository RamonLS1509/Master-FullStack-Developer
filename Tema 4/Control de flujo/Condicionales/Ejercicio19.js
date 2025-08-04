let examen1 = parseFloat(prompt("Ingresa la nota del examen 1 (0 a 5):"));
let examen2 = parseFloat(prompt("Ingresa la nota del examen 2 (0 a 5):"));
let examen3 = parseFloat(prompt("Ingresa la nota del examen 3 (0 a 5):"));

let mejorNota = examen1 > examen2 ? examen1 : examen2;
let notaFinal = mejorNota + examen3;

let resultado;

if (notaFinal === 10) {
  resultado = "Matrícula";
} else if (notaFinal >= 9) {
  resultado = "Sobresaliente";
} else if (notaFinal >= 7) {
  resultado = "Notable";
} else if (notaFinal >= 6) {
  resultado = "Bien";
} else if (notaFinal >= 5) {
  resultado = "Suficiente";
} else {
  resultado = "Suspenso";
}

alert("Nota final: " + notaFinal + "\nResultado: " + resultado);
