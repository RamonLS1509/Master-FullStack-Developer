function operacion1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de operación 1");
    }, 1000);
  });
}

function operacion2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de operación 2");
    }, 1000);
  });
}

function operacion3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de operación 3");
    }, 1000);
  });
}

operacion1()
  .then((mensaje1) => {
    console.log(mensaje1);
    return operacion2();
  })
  .then((mensaje2) => {
    console.log(mensaje2);
    return operacion3();
  })
  .then((mensaje3) => {
    console.log(mensaje3);
  })
  .catch((error) => {
    console.error("Error en alguna operación:", error);
  });
