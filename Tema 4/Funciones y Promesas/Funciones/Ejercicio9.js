function contarCifras(numero) {
    let entero = Math.floor(numero);
    return entero.toString().length;
}

let entrada = prompt("Introduce un número entero positivo:");

let numero = Number(entrada);

if (numero <= 0) {
    alert("Por favor, introduce un número entero positivo válido.");
} else {
    let cifras = contarCifras(numero);
    alert("El número tiene " + cifras + " cifra(s).");
}