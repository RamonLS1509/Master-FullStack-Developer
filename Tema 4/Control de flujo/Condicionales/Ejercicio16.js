console.log(" - Menu - ");
console.log("Opción 1");
console.log("Opción 2");
console.log("Opción 3");
console.log("Opción 4");
let eleccion = parseInt(prompt("Introduce una opción: "));


// if(eleccion === 1){
//     console.log("Has elegido la opción 1");
// }else if(eleccion === 2){
//     console.log("Has elegido la opción 2");
// }else if(eleccion === 3){
//     console.log("Has elegido la opción 3");
// }else{
//     console.log("Has elegido la opción 4");
// }

switch(eleccion){
    case 1:
        console.log("Has elegido la opción 1");
        break;
    case 2:
        console.log("Has elegido la opción 2");
        break;
    case 3:
        console.log("Has elegido la opción 3");
        break;
    case 4:
        console.log("Has elegido la opción 4");
        break;
    default:
        console.log("No has elegido una opcion correcta")
        break;

}