function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

let año;

do {
    año = Number(prompt("Introduce un año (0 para salir):"));
    
    if (año === 0) {
        alert("Programa finalizado.");
        break;
    }
    
    if (esBisiesto(año)) {
        alert(`El año ${año} es bisiesto.`);
    } else {
        alert(`El año ${año} no es bisiesto.`);
    }

} while (año !== 0);