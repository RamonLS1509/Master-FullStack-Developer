// function leerArchivo(nombreArchivo, callback) {
//     setTimeout(() => {
//         if (nombreArchivo) {
//             callback(null, `Contenido del archivo: ${nombreArchivo}`);
//         } else {
//             callback("Error: No se proporcionó un nombre de archivo", null);
//         }
//     }, 1000);
// }

function leerArchivo(nombreArchivo){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(nombreArchivo){
                resolve(`Contenido del archivo: ${nombreArchivo}`)
            }else{
                reject("Error: No se proporcionó un nombre de archivo")
            }
        }, 1000);
    })
}

leerArchivo("archivo.txt")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error))