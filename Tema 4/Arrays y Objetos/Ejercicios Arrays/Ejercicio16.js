let nombres = [];
let notas = [];
let N = parseInt(prompt("¿Cuántos alumnos hay?"));

for (let i = 0; i < N; i++) {
  let nombre = prompt("Nombre del alumno " + (i + 1) + ":");
  nombres[i] = nombre;

  let nota = -1;
  while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseFloat(prompt("Nota de " + nombre + " (entre 0 y 10):"));
  }
  notas[i] = nota;
}

let suma = 0;
for (let i = 0; i < N; i++) {
  suma = suma + notas[i];
}
let media = suma / N;
alert("Media de la clase: " + media);

// Mostrar alumnos con nota mayor que la media
let textoMayores = "Alumnos con nota mayor que la media:\n";
for (let i = 0; i < N; i++) {
  if (notas[i] > media) {
    textoMayores = textoMayores + nombres[i] + " (" + notas[i] + ")\n";
  }
}
alert(textoMayores);

// Calcular nota máxima
let max = notas[0];
for (let i = 1; i < N; i++) {
  if (notas[i] > max) {
    max = notas[i];
  }
}

// Mostrar quiénes tienen la nota máxima
let textoMax = "Nota máxima: " + max + "\nAlumnos con esa nota:\n";
for (let i = 0; i < N; i++) {
  if (notas[i] === max) {
    textoMax = textoMax + nombres[i] + " (" + notas[i] + ")\n";
  }
}
alert(textoMax);

// Calcular nota mínima
let min = notas[0];
for (let i = 1; i < N; i++) {
  if (notas[i] < min) {
    min = notas[i];
  }
}

// Mostrar quiénes tienen la nota mínima
let textoMin = "Nota mínima: " + min + "\nAlumnos con esa nota:\n";
for (let i = 0; i < N; i++) {
  if (notas[i] === min) {
    textoMin = textoMin + nombres[i] + " (" + notas[i] + ")\n";
  }
}
alert(textoMin);

// Mostrar lista completa
let listaFinal = "Lista completa de alumnos:\n";
for (let i = 0; i < N; i++) {
  listaFinal = listaFinal + nombres[i] + ": " + notas[i] + "\n";
}
alert(listaFinal);
