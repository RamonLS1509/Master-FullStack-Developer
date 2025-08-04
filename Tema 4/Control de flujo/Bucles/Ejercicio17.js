let simbolo = prompt("Introduce el símbolo que quieres usar:");
let altura = parseInt(prompt("Introduce la altura de la pirámide:"));

let piramide = "";

for (let i = 1; i <= altura; i++) {
  let espacios = " ".repeat(altura - i);
  let caracteres = simbolo.repeat(i * 2 - 1);
  piramide += espacios + caracteres + "\n";
}

alert(piramide);
