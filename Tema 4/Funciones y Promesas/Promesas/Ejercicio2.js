function descargarDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Todo bien");
            // reject("Todo mal")
        }, 2000);
    });
}

descargarDatos()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));