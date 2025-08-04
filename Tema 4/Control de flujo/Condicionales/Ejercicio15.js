let cantidad = parseInt(prompt("¿Cuántos helados quieres comprar?"));
let precio = 2;

// Si compras más de 10, te dan uno gratis (solo uno)
let regalo = Math.floor(cantidad / 11); // Esto será 0 si < 11, y 1 si >= 11

let totalHelados = cantidad + regalo;
let totalPago = cantidad * precio;

alert("Has pagado " + totalPago + " € por " + cantidad + " helados.");
alert("Te llevas en total " + totalHelados + " helados (con " + regalo + " de regalo).");
