let personajes = ["Luke Skywalker", "Darth Vader", "Leia Organa"];

console.log("Lista original:", personajes);
alert("Lista original:\n" + personajes.join("\n"));

personajes.sort();
console.log("Lista ordenada:", personajes);
alert("Lista ordenada alfabéticamente:\n" + personajes.join("\n"));

let nuevoPersonaje = prompt("Introduce un personaje de Star Wars:");

let posicion = personajes.indexOf(nuevoPersonaje);

if (posicion !== -1) {
  alert(`"${nuevoPersonaje}" ya existe en la lista, en la posición ${posicion}`);
} else {
  personajes.push(nuevoPersonaje);
  alert(`"${nuevoPersonaje}" ha sido añadido a la lista.`);
}

alert(`La lista contiene ${personajes.length} personajes.`);

console.log("Lista final:", personajes);
alert("Lista final:\n" + personajes.join("\n"));
