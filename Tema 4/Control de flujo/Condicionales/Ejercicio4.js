let n1 = parseInt(prompt("Introduce un número: "))
let n2 = parseInt(prompt("Introduce un número: "))
let n3 = parseInt(prompt("Introduce un número: "))

if(n1 - n2 === 20 || n1 - n2 === -20){
    console.log("Existe una diferencia de 20 entre el numero 1 y el numero 2")
}else if(n1 - n3 === 20 || n1 - n3 === -20){
    console.log("Existe una diferencia de 20 entre el numero 1 y el numero 3")
}else if(n2 - n3 === 20 || n2 - n3 === -20){
    console.log("Existe una diferencia entre el numero 2 y el numero 3")
}else{
    console.log("No existe una diferencia entre ninguno de los numeros seleccionados")
}