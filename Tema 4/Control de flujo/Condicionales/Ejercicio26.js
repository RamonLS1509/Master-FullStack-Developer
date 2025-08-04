let opciones = ["piedra", "papel", "tijera"];


let usuario = prompt("Elige: piedra, papel o tijera").toLowerCase().trim();


let aleatorio = Math.floor(Math.random() * 3);
let maquina = opciones[aleatorio];


let resultado;

if (usuario === maquina) {
  resultado = "¡Empate!";
} else if (
  (usuario === "piedra" && maquina === "tijera") ||
  (usuario === "papel" && maquina === "piedra") ||
  (usuario === "tijera" && maquina === "papel")
) {
  resultado = "¡Has ganado!";
} else if (opciones.includes(usuario)) {
  resultado = "Has perdido.";
} else {
  resultado = "Opción no válida. Por favor, elige piedra, papel o tijera.";
}

alert("Tú elegiste: " + usuario + "\nLa máquina eligió: " + maquina + "\n" + resultado);
