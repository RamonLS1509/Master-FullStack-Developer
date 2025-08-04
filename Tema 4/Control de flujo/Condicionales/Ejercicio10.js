let num1 = parseInt(prompt("Introduce un número: "))
let num2 = parseInt(prompt("Introduce otro número: "));

if(num1 === num2){
    console.log(0)
}else if(num1 % 6 === num2 % 6){
    comparar()
}else{
    comparar()
}

function comparar(){
    if(num1 > num2){
        console.log("EL numero "+num1+" es mayor que "+num2)
    }else{
        console.log("El numero "+num2+" es mayor que "+num1)
    }
}