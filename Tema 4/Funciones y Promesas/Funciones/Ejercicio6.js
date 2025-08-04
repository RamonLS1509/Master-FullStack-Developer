function dividir(numero1, numero2) {
    return numero1 / numero2;
}

let numero1, numero2;

do {
    numero1 = Number(prompt("Introduce el primer número:"));
    numero2 = Number(prompt("Introduce el segundo número (0 para salir):"));

    if (numero2 !== 0) {
        let resultado = dividir(numero1, numero2);
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("Has introducido 0 como segundo número. El programa ha terminado.");
    }

} while (numero2 !== 0);