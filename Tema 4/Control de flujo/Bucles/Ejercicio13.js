function calcularLuckyNumber(fecha) {
  // Eliminar caracteres no numéricos
  let soloDigitos = fecha.replace(/\D/g, '');

  // Repetir la suma hasta obtener un solo dígito
  while (soloDigitos.length > 1) {
    let suma = 0;
    for (let i = 0; i < soloDigitos.length; i++) {
      suma += parseInt(soloDigitos[i]);
    }
    soloDigitos = suma.toString();
  }

  return soloDigitos;
}

// Pedir fecha al usuario
let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):");

// Validar formato básico
while (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimiento)) {
  fechaNacimiento = prompt("Formato incorrecto. Introduce la fecha como DD/MM/AAAA:");
}

let luckyNumber = calcularLuckyNumber(fechaNacimiento);

alert("Tu número de la suerte es: " + luckyNumber);
