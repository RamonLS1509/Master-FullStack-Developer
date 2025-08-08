const nombreInput = document.getElementById('nombre') as HTMLInputElement | null;
const boton = document.getElementById('boton') as HTMLButtonElement | null;

if (!nombreInput || !boton) {
  throw new Error("Elemento no encontrado en el DOM");
}

boton.addEventListener('click', () => {
  const valor = nombreInput.value;

  // Validación de tipo: asegurarse que el valor es un string
  if (typeof valor !== 'string') {
    alert("El valor introducido no es un texto válido");
    return;
  }

  const nombre = valor.trim();

  if (nombre === '') {
    alert("El campo no puede estar vacío");
    return;
  }

  alert(`Texto introducido correctamente: "${nombre}"`);
});
