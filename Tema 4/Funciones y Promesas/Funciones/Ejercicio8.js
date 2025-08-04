let numero = Number(prompt("Introduce un número: "));

function factorial(){
    for(let i = numero; i > 1; i--){
        numero = numero * (i - 1);
    }
    alert("El factorial es: " + numero)
}

factorial()