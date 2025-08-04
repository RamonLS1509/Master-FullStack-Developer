let numero = prompt("Introduce un número de tres cifras:");

if (numero.length !== 3 || isNaN(numero)) {
  alert("Por favor, introduce un número válido de tres cifras.");
} else {
  let cifra1 = parseInt(numero[0]);
  let cifra2 = parseInt(numero[1]);
  let cifra3 = parseInt(numero[2]);

  let esPar = (n) => n % 2 === 0;
  let par1 = esPar(cifra1);
  let par2 = esPar(cifra2);
  let par3 = esPar(cifra3);

  let mensaje = "Número: " + numero + "\n";

  if (par1 && par2 && par3) {
    mensaje += "Todas las cifras son pares";
  } else if (!par1 && !par2 && !par3) {
    mensaje += "Todas las cifras son impares";
  } else {
    mensaje += "El número tiene cifras pares e impares";
  }

  alert(mensaje);
}
