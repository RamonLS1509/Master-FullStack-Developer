let contador = 0;

for(let i = 0; i<=10;i++){
    let numero = Number(prompt("Introduce un número"));
    contador += numero;
}

let media = contador/10;
console.log(media);