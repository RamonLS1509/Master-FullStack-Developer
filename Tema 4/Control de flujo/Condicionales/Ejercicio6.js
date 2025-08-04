let n1 = parseInt(prompt("Introduce un número: "));

let cuadrado = n1*n1;
let cubo = n1*n1*n1;

if(n1 >= 1){
    console.log("El cuadrado de "+n1+" es: "+cuadrado);
    console.log("El cubo de "+n1+" es: "+cubo);
}else{
    console.log("Debes introducir un número que sea igual o mayor a 1")
}