// function esPar(numero){
//     if(numero % 2 === 0){
//         alert("El numero " + numero + " es par");
//     }else{
//         alert("El numero " + numero + " no es par")
//     }
// }

// esPar(7)

let numero = Number(prompt("Introduce un numero: "));

function esPar(){
    if(numero % 2 === 0){
         alert("El numero " + numero + " es par");
     }else{
         alert("El numero " + numero + " no es par")
     }
}

esPar();