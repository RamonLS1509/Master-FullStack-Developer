let contraseñaValida = false;

while (!contraseñaValida) {
  let contraseña = prompt("Introduce una contraseña:");

  let tieneLongitudValida = contraseña.length >= 8;
  let tieneNumero = /\d/.test(contraseña);
  let primeraEsMayuscula = contraseña[0] === contraseña[0].toUpperCase() && /[A-Z]/.test(contraseña[0]);

  if (tieneLongitudValida && tieneNumero && primeraEsMayuscula) {
    alert("Contraseña correcta.");
    contraseñaValida = true;
  } else {
    let mensaje = "Contraseña incorrecta. Debe cumplir lo siguiente:\n";
    if (!tieneLongitudValida) mensaje += "- Tener al menos 8 caracteres\n";
    if (!tieneNumero) mensaje += "- Contener al menos un número\n";
    if (!primeraEsMayuscula) mensaje += "- Empezar con una letra mayúscula";
    alert(mensaje);
  }
}