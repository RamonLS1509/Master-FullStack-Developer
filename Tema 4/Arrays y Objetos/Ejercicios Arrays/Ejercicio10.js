let array = [0,0,0,0,0,0,0,0,0,0,0]

while (true) {
    let input = prompt("Introduce un número entre 0 y 10 (número negativo para salir):");
    let numero = Number(input);

    if (numero < 0) {
        console.log("Contenido final del array:");
        for (let i = 0; i < array.length; i++) {
            console.log(`Posición ${i}: ${array[i]}`);
        }
        break;
    }

    if (numero >= 0 && numero <= 10) {
        array[numero]++;
    } else {
        alert("Número incorrecto. Debe estar entre 0 y 10.");
    }
}
