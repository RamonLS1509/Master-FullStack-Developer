let opcion = 0;

while (opcion !== 7) {
  opcion = parseInt(prompt(
    "************************\n" +
    "    Calculadora\n" +
    "************************\n" +
    "1. Suma\n" +
    "2. Resta\n" +
    "3. Multiplicación\n" +
    "4. Potencia\n" +
    "5. División\n" +
    "6. Raíz\n" +
    "7. Salir\n\n" +
    "Introduce la opción deseada:"
  ));

  if (opcion >= 1 && opcion <= 6) {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resultado = 0;
    let simbolo = "";
    let nombreOperacion = "";

    switch (opcion) {
      case 1:
        resultado = num1 + num2;
        simbolo = "+";
        nombreOperacion = "Suma";
        break;
      case 2:
        resultado = num1 - num2;
        simbolo = "-";
        nombreOperacion = "Resta";
        break;
      case 3:
        resultado = num1 * num2;
        simbolo = "*";
        nombreOperacion = "Multiplicación";
        break;
      case 4:
        resultado = Math.pow(num1, num2);
        simbolo = "^";
        nombreOperacion = "Potencia";
        break;
      case 5:
        if (num2 === 0) {
          alert("No se puede dividir por 0.");
          continue;
        }
        resultado = num1 / num2;
        simbolo = "/";
        nombreOperacion = "División";
        break;
      case 6:
        resultado = Math.pow(num1, 1 / num2);
        simbolo = "√";
        nombreOperacion = "Raíz";
        break;
    }

    alert(`Operación seleccionada: ${nombreOperacion}\n` +
          `${num1} ${simbolo} ${num2} = ${resultado}`);
  } else if (opcion === 7) {
    alert("Saliendo del programa...");
  } else {
    alert(`Opción ${opcion} no disponible, vuelva a intentarlo.`);
  }
}
