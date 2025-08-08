const nombre = document.getElementById('nombre') as HTMLInputElement;
const boton = document.getElementById('boton') as HTMLInputElement;

boton.addEventListener('click', () =>{
    console.log(nombre.value)
})