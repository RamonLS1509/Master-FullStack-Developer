function temporizador(segundos, callback){
    setTimeout(() => {
        callback();
    }, segundos * 1000);
}

temporizador(3, () => {
    console.log("Tiempo terminado")
})