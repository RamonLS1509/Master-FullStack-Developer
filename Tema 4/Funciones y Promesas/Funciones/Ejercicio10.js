let eleccion = Number(prompt("Elige una figura: \n1. Circulo \n2. Triangulo \n3. Cuadrado"));
let radio, base, altura, lado;

if(eleccion === 1){
    radio = Number(prompt("Introduce el radio del circulo: "));
    areaCirculo();
}else if(eleccion === 2){
    base = Number (prompt("Introduce la base del triangulo: "));
    altura = Number(prompt("Introduce la altura del triangulo: "));
    areaTriangulo();
}else if(eleccion === 3){
    lado = Number(prompt("Introduce el lado del cuadrado: "));
    areaCuadrado();
}else{
    console.log("Opcion no valida");
}




function areaCirculo(){
    let area = Math.floor(Math.PI * Math.pow(radio, 2));
    console.log("El area del circulo es: " + area);
}

function areaTriangulo(){
    let area = Math.floor((base * altura) / 2)
    console.log("El area del triangulo es: " + area);
}

function areaCuadrado(){
    let area = Math.floor(Math.pow (lado, 2))
    console.log("El area del cuadrado es: " + area);
}