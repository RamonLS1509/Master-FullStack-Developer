let numero = prompt("Introduce un número de 3 dígitos:").trim();

// Validar que sea un número de 3 dígitos
while (!/^\d{3}$/.test(numero)) {
  numero = prompt("Por favor, introduce un número válido de 3 dígitos:").trim();
}

// Sumar los dígitos
let suma = 0;
for (let i = 0; i < 3; i++) {
  suma += parseInt(numero[i]);
}

alert("La suma de los dígitos es: " + suma);
