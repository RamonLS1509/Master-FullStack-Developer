let num1 = parseInt(prompt("Introduce un número: "));
let num2 = parseInt(prompt("Introduce otro número: "));

if(num1 < 24 || num1 > 76 || num2 < 24 || num2> 76){
    console.log("Introduce un número entre 25 y 75")
}else{
// Separar dígitos
    let tens1 = Math.floor(num1 / 10);
    let units1 = num1 % 10;

    let tens2 = Math.floor(num2 / 10);
    let units2 = num2 % 10;

    // Verificar si hay algún dígito en común
    if (tens1 === tens2 || tens1 === units2 || units1 === tens2 || units1 === units2) {
        console.log("¡Los números tienen al menos un dígito en común!");
    } else {
        console.log("No hay dígitos en común entre los números.");
    }
}