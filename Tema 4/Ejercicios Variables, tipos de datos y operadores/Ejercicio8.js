// let esMayorDeEdad = true;
// let tieneLicencia = false;
// let puedeConducir = esMayorDeEdad && tieneLicencia;

//console.log(puedeConducir) False porque una de las dos condiciones de puedeConducir es false 


let esMayorDeEdad = true;
let tieneLicencia = true;
let puedeConducir = esMayorDeEdad && tieneLicencia;
// console.log(puedeConducir)  En este caso aparece true, porque las dos condiciones de puedeConducir estan en true


let tieneCarnetProvisional = true;
let acceso = tieneLicencia || tieneCarnetProvisional;
console.log(acceso) //En este caso true porque una de las dos condiciones estan en true;