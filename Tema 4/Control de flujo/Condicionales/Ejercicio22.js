let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad < 18) {
  alert("Lo sentimos, no puedes alquilar un coche porque eres menor de edad.");
} else {
  let tieneCarnet = prompt("¿Tienes carnet de conducir? (sí / no)").toLowerCase();

  if (tieneCarnet !== "sí" && tieneCarnet !== "si") {
    alert("No puedes alquilar un coche sin carnet de conducir.");
  } else {
    let nombre = prompt("Introduce tu nombre:");
    let apellido = prompt("Introduce tu apellido:");
    let ciudad = prompt("¿En qué ciudad recogerás el vehículo?");
    let dias = parseInt(prompt("¿Cuántos días quieres alquilar el coche?"));

    let coste = 0;

    if (dias >= 7) {
      let semanas = Math.floor(dias / 7);
      let diasRestantes = dias % 7;
      coste = (semanas * 150) + (diasRestantes * 25);
    } else {
      coste = dias * 25;
    }

    let mensaje = "Datos del cliente:\n" +
                  "Nombre: " + nombre + " " + apellido + "\n" +
                  "Ciudad de recogida: " + ciudad + "\n" +
                  "Días de alquiler: " + dias + "\n" +
                  "Coste total: " + coste + " €";

    alert(mensaje);
  }
}
