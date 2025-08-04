let temperatura = Number(prompt("Introduce una temperatura: "));
let unidad = prompt("Introduce a que unidad lo quieres convertir (C) o (F)")

if (unidad === 'C'){
    let centigrados = temperatura * 9 / 5 +32;
    console.log(centigrados);
}else if(unidad === 'F'){
    let farenheit = (temperatura -32) * 5 / 9;
    console.log(farenheit)
}