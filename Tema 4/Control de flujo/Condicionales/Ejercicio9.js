const prompt = require("prompt-sync")();

let temp = parseInt(prompt("Introduce la temperatura de tu ciudad: "));


if (temp > 40) {
    console.log("Vete a otro sitio");
} else if (temp >= 30 && temp < 39) {
    console.log("Enciende el aire acondicionado");
} else if (temp >= 20 && temp <= 29) {
    console.log("No hagas nada");
} else if (temp >= 10 && temp <= 19) {
    console.log("Enciende la calefacción");
} else {
    console.log("Vete a otro sitio");
}