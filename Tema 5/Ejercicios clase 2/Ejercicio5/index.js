function sumar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumar(1, 2, 3)); // 6
console.log(sumar(10, 20)); // 30
console.log(sumar());
