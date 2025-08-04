var numero1 = prompt("Escribe un primer numero:")
var numero2 = prompt("Escribe un segundo numero: ")
numero1 = parseInt(numero1);
numero2 = parseInt(numero2)


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let media = numero1 % numero2;
let masGrande = Math.max(numero1, numero2)
let masPeque = Math.min(numero1, numero2)


console.log("La suma de esos dos numero es: "+suma)
console.log("La resta de esos dos numero es: "+resta)
console.log("La multiplicacion de esos dos numero es: "+multiplicacion)
console.log("El módulo de esos dos numero es: "+media)
console.log("El mas grande de esos dos numero es: "+masGrande)
console.log("El mas pequeño de esos dos numero es: "+masPeque)