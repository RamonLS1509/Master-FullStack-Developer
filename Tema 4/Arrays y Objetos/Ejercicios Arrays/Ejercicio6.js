let valores = [];

for (let i = 0; i < 3; i++) {
    let input = prompt(`Introduce el valor #${i + 1}:`);
    valores.push(input); 
}

let menor = valores[0];

for (let i = 1; i < valores.length; i++) {
    if (valores[i] < menor) {
        menor = valores[i];
    }
}

console.log("El valor más pequeño es:", menor);
alert("El valor más pequeño es: " + menor);