var nombreInput = document.getElementById('nombre');
var boton = document.getElementById('boton');
if (!nombreInput || !boton) {
    throw new Error("Elemento no encontrado en el DOM");
}
boton.addEventListener('click', function () {
    var valor = nombreInput.value;
    // Validación de tipo: asegurarse que el valor es un string
    if (typeof valor !== 'string') {
        alert("El valor introducido no es un texto válido");
        return;
    }
    var nombre = valor.trim();
    if (nombre === '') {
        alert("El campo no puede estar vacío");
        return;
    }
    alert("Texto introducido correctamente: \"".concat(nombre, "\""));
});
