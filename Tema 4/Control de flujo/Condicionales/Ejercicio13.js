let frase = prompt("Introduce una cadena: ")

let len = frase.length;

if (len === 0) {
    console.log("La frase está vacía.");
} else if (len % 2 === 0) {
    console.log("Caracteres centrales:", frase[len/2 - 1] + frase[len/2]);
} else {
    console.log("Carácter central:", frase[Math.floor(len/2)]);
}

