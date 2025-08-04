let fechaCorrecta = false;

while (!fechaCorrecta) {
  let entrada = prompt("Introduce una fecha en formato DD/MM/AAAA:");
  let partes = entrada.split("/");

  if (partes.length === 3) {
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let anio = parseInt(partes[2]);

    let fecha = new Date(anio, mes, dia);

    if (
      fecha.getDate() === dia &&
      fecha.getMonth() === mes &&
      fecha.getFullYear() === anio
    ) {
      fechaCorrecta = true;

      fecha.setDate(fecha.getDate() + 1);

      let diaSig = String(fecha.getDate()).padStart(2, "0");
      let mesSig = String(fecha.getMonth() + 1).padStart(2, "0");
      let anioSig = fecha.getFullYear();

      alert("📅 El día siguiente es: " + diaSig + "/" + mesSig + "/" + anioSig);
    } else {
      alert("Fecha no válida. Intenta de nuevo.");
    }
  } else {
    alert("Formato incorrecto. Usa DD/MM/AAAA.");
  }
}
