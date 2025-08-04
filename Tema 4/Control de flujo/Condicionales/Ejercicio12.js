let puesto = parseInt(prompt("Introduce el puesto en el que has quedado: "))
//Programa 1

// if(puesto === 1){
//     console.log("Ganaste")
// }else{
//     console.log("Lo importante es participar")
// }

// //Programa 2
// if(puesto === 1){
//     console.log("Medalla de oro")
// }else if(puesto === 2){
//     console.log("Medalla de plata")
// }else if(puesto === 3){
//     console.log("Medalla de bronce")
// }else{
//     console.log("Lo importante es participar")
// }

// // //Programa 3
 switch(puesto){
     case 1:
         console.log("Medalla de oro");
         break;

     case 2:
         console.log("Medalla de plata");
         break;
    
     case 3:
         console.log("Medalla de bronce");
         break;

     default:
         console.log("Lo importante es participar")
         break;
 }

// //Programa 4 
// if(puesto === 1 || puesto === 2 || puesto === 3){
//     console.log("Sube al podium")
// }else{
//     console.log("Se acabó la carrera")
// }