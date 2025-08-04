let mensaje = prompt("Habla con Bob:");
mensaje = mensaje.trim();

let respuesta;

if (mensaje === "") {
  respuesta = "Vale con que esas tenemos...";
} else if (mensaje.endsWith("?") && mensaje === mensaje.toUpperCase() && /[A-Z]/.test(mensaje)) {
  // Pregunta en mayúsculas (gritando)
  respuesta = "¡Eh, tranquilízate! Yo sé lo que hago.";
} else if (mensaje.endsWith("?")) {
  // Pregunta normal
  respuesta = "¡Claro!";
} else if (mensaje === mensaje.toUpperCase() && /[A-Z]/.test(mensaje)) {
  // Grito (mayúsculas y contiene letras)
  respuesta = "¡Eh!, tranquilízate.";
} else {
  // Cualquier otra cosa
  respuesta = "Sin más.";
}

alert("Bob responde: " + respuesta);
