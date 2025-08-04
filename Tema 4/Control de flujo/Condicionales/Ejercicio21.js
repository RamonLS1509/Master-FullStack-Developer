let nombre = prompt("Introduce tu nombre:");
let ventas = parseFloat(prompt("Introduce el total de tus ventas en euros:"));

let extra = 0;

if (ventas > 500) {
  extra = ventas * 0.05;
}

let mensaje = "Nombre: " + nombre + "\n" +
              "Ventas: " + ventas.toFixed(2) + " €";

if (extra > 0) {
  mensaje += "\nExtra: " + extra.toFixed(2) + " €";
}

alert(mensaje);