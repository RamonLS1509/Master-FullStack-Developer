let numero = prompt("Introduce un número entero positivo:").trim();

// Validar que sea un entero positivo
while (!/^\d+$/.test(numero)) {
  numero = prompt("Por favor, introduce un número entero positivo válido:").trim();
}

// Invertir el número como cadena
let numeroInvertido = numero.split("").reverse().join("");

alert("El número invertido es: " + numeroInvertido);
