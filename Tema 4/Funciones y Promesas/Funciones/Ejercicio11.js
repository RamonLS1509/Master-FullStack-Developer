function convertirMoneda(cantidad, moneda){
    if(moneda === 'libra'){
        cantidad *= 0.86;
    }else if(moneda === 'dolar'){
        cantidad *= 1.28611;
    }else if(moneda === 'yen'){
        cantidad *= 129.852;
    }

alert("La cantidad en "+moneda+" es "+ cantidad)
}

let cantidad = Number(prompt("Introduce la cantidad de euros a convertir: "));
let moneda = prompt("Introduce a la moneda que quieres convertir: ");

convertirMoneda(cantidad, moneda);