let opcion;

do {
  opcion = prompt("Introduce 'P' para mostrar números pares o 'I' para mostrar números impares:").toUpperCase().trim();

  if (opcion !== "P" && opcion !== "I") {
    alert("Valor no correcto. Por favor, introduce 'P' o 'I'.");
  }
} while (opcion !== "P" && opcion !== "I");

let resultado = "Números ";

resultado += (opcion === "P") ? "pares" : "impares";
resultado += " entre 1 y 100:\n";

for (let i = 1; i <= 100; i++) {
  if (opcion === "P" && i % 2 === 0) {
    resultado += i + " ";
  } else if (opcion === "I" && i % 2 !== 0) {
    resultado += i + " ";
  }
}

alert(resultado);
