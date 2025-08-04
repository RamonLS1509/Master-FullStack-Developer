let resultado = "Número\tFactorial\n";

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

for (let i = 1; i <= 10; i++) {
  resultado += i + "\t" + factorial(i) + "\n";
}

alert(resultado);