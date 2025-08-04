let array = [1,1,1,1,1,1,1,1,1,1]

for (let i = 0; i < array.length; i++) {
    let input = prompt("Introduce un número entre 0 y 9:");
    let indice = Number(input);

        console.log(`Valor actual en la posición ${indice}: ${array[indice]}`);

        array[indice] *= 2;

        console.log(`Nuevo valor en la posición ${indice}: ${array[indice]}`);
   
}