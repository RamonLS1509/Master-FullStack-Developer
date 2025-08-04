let resultado = "";

for (let i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    resultado += i + " ";
  }
}

alert("Números del 1 al 100 sin múltiplos de 5:\n" + resultado);
