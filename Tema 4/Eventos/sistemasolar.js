let sistemaSolar = [
  {
    nombre: "mercurio",
    color: "gris",
    fondo: "grey",
    temperatura: 350,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
  },
  {
    nombre: "venus",
    color: "blanco",
    fondo: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  {
    nombre: "tierra",
    color: "morado",
    fondo: "purple",
    temperatura: 14,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg",
  },
  {
    nombre: "marte",
    color: "rojo",
    fondo: "red",
    temperatura: -46,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
  },
  {
    nombre: "jupiter",
    color: "marrón",
    fondo: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  {
    nombre: "saturno",
    color: "amarillo",
    fondo: "yellow",
    temperatura: -130,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1024px-Saturn_during_Equinox.jpg",
  },
  {
    nombre: "urano",
    color: "azul",
    fondo: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  {
    nombre: "neptuno",
    color: "azul",
    fondo: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  {
    nombre: "plutón",
    color: "blanco",
    fondo: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/1024px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg",
  },
];





let planetas = [];

while (planetas.length < 3) {
  let entrada = prompt("Introduce un planeta del sistema solar:").toLowerCase();
  let encontrado = sistemaSolar.find(p => p.nombre === entrada);

  if (!encontrado) {
    alert("Ese planeta no existe. Intenta de nuevo.");
  } else if (planetas.some(p => p.nombre === entrada)) {
    alert("Ya has introducido ese planeta. Introduce uno diferente.");
  } else {
    planetas.push(encontrado);
  }
}

let contenedor = document.getElementById("resultado");
planetas.forEach((planeta, index) => {
  let div = document.createElement("div");
  div.className = "tarjeta";
  div.innerHTML = `
    <h2>${planeta.nombre.toUpperCase()}</h2>
    <img src="${planeta.imagen}" alt="${planeta.nombre}">
    <p><b>Color:</b> ${planeta.color}</p>
    <p><b>Temperatura:</b> ${planeta.temperatura}°C</p>
    <button onclick="cambiarFondo(${index}, '${planeta.fondo}')">Cambiar fondo</button>
  `;
  contenedor.appendChild(div);
});

// Función para cambiar el color de fondo
function cambiarFondo(indice, color) {
  document.getElementsByClassName("tarjeta")[indice].style.background = color;
}