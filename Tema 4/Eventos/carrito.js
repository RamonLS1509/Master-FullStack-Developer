//Recogiendo el div de la cesta para mostrar los articulos
let brocha = document.getElementById("brocha");
let llave = document.getElementById("llave");
let martillo = document.getElementById("martillo");
let tronco = document.getElementById("tronco");

//Recogiendo cada uno de los botones

//Brocha
let añadirBrocha = document.getElementById("añadirBrocha")
let eliminarBrocha = document.getElementById("eliminarBrocha")

//Llave
let añadirLlave = document.getElementById("añadirLlave")
let eliminarLlave = document.getElementById("eliminarLlave")

//Martillo
let añadirMartillo = document.getElementById("añadirMartillo")
let eliminarMartillo = document.getElementById("eliminarMartillo")

//Tronco
let añadirTronco = document.getElementById("añadirTronco")
let eliminarTronco = document.getElementById("eliminarTronco")

//Contador para cada producto
let contBrocha = 0;
let contLlave = 0;
let contMartillo = 0;
let contTronco = 0;


//Eventos para modificar la cantidad de brochas que se van a comprar
//Añadir brochas de la cesta
añadirBrocha.addEventListener("click", () => {
    contBrocha++;
    brocha.innerHTML = `
        Brocha: ${contBrocha}
    `
    for (let i = 0; i < contBrocha; i++) {
        brocha.innerHTML += `<img src="./iconos/Copia de brocha.svg" class="card-img-top" alt="..." style="width: 2rem">`
    }
})
//Eliminar brochas de la cesta
eliminarBrocha.addEventListener("click", () => {
    if (contBrocha > 0) {
        contBrocha--;
        brocha.innerHTML = `
        Brocha: ${contBrocha}
    `
        for (let i = 0; i < contBrocha; i++) {
            brocha.innerHTML += `<img src="./iconos/Copia de brocha.svg" class="card-img-top" alt="..." style="width: 2rem">`
        }
    } else {
        alert("No se pueden eliminar mas brochas de la cesta")
    }

})
//Añadir llaves a la cesta
añadirLlave.addEventListener("click", () => {
    contLlave++;
    llave.innerHTML = `
        Llave: ${contLlave}
    `
    for (let i = 0; i < contLlave; i++) {
        llave.innerHTML += `<img src="./iconos/Copia de llave.svg" class="card-img-top" alt="..." style="width: 2rem">`
    }
})
//Eliminar llaves de la cesta
eliminarLlave.addEventListener("click", () => {
    if (contLlave > 0) {
        contLlave--;
        llave.innerHTML = `
        Llave: ${contLlave}
    `
        for (let i = 0; i < contLlave; i++) {
            llave.innerHTML += `<img src="./iconos/Copia de llave.svg" class="card-img-top" alt="..." style="width: 2rem">`
        }
    } else {
        alert("No se pueden eliminar mas llaves de la cesta")
    }

})

//Añadir martillos a la cesta
añadirMartillo.addEventListener("click", () => {
    contMartillo++;
    martillo.innerHTML = `
        Martillo: ${contMartillo}
    `
    for (let i = 0; i < contMartillo; i++) {
        martillo.innerHTML += `<img src="./iconos/Copia de martillo.svg" class="card-img-top" alt="..." style="width: 2rem">`
    }
})

//Eliminar martillos de la cesta
eliminarMartillo.addEventListener("click", () => {
    if (contMartillo > 0) {
        contMartillo--;
        martillo.innerHTML = `
        Martillo: ${contMartillo}
    `
        for (let i = 0; i < contMartillo; i++) {
            martillo.innerHTML += `<img src="./iconos/Copia de martillo.svg" class="card-img-top" alt="..." style="width: 2rem">`
        }
    } else {
        alert("No se pueden eliminar mas martillos de la cesta")
    }

})

//Añadir troncos a la cesta
añadirTronco.addEventListener("click", () => {
    contTronco++;
    tronco.innerHTML = `
        Tronco: ${contTronco}
    `
    for (let i = 0; i < contTronco; i++) {
        tronco.innerHTML += `<img src="./iconos/Copia de tronco.svg" class="card-img-top" alt="..." style="width: 2rem">`
    }
})
//Eliminar troncos de la cesta
eliminarTronco.addEventListener("click", () => {
    if (contTronco > 0) {
        contTronco--;
        tronco.innerHTML = `
        Tronco: ${contTronco}
    `
        for (let i = 0; i < contTronco; i++) {
            tronco.innerHTML += `<img src="./iconos/Copia de tronco.svg" class="card-img-top" alt="..." style="width: 2rem">`
        }
    }else{
        alert("No se pueden eliminar mas martillo de la cesta")
    }

})