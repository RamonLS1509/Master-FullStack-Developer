let array = [];
let suma = 0;

for(let i = 0; i < 20; i++){
    let random = Math.floor(Math.random() * (35 - 18 + 1)) + 18;
    array.push(random);
    console.log(random)
    suma += array[i]
}

let media = suma / array.length;
console.log("La media total de edad es: "+ media)