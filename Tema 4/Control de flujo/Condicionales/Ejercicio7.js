let num = parseInt(prompt("Introduce el numerador: "));
let den = parseInt(prompt("Introduce un denominador: "));

if(den === 0){
    console.log("No se puede dividir por cero.")
}else{
    console.log("El resultado es: "+num/den)
}