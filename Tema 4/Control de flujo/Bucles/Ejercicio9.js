let resultado = "Número\tResultado\n";

for (let i = 1; i <= 12; i++) {
  if (i % 2 === 0) {
    // Par: mostrar el cubo
    resultado += i + "\t" + (i ** 3) + "\n";
  } else {
    // Impar: mostrar el cuadrado
    resultado += i + "\t" + (i ** 2) + "\n";
  }
}

alert(resultado);
