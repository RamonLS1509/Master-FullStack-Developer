let n1 = prompt("Introduce un número: ");
let n2 = prompt("Introduce otro número: ");
let n3 = prompt("Introduce un último número: ");

if(n1 < n2 && n1 < n3){
    console.log("El número "+n1+" es menor")
}
else if(n2 < n1 && n2 < n3){
    console.log("El número "+n2+" es menor")
}
else if(n3 < n1 && n3 < n2){
    console.log("El número "+n3+" es menor")
}