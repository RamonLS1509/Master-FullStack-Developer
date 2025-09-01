//Variable para recoger los juegos de la API
const callGamesList = fetch(`https://api.rawg.io/api/games?key=5d746359116244ab9b01714c64813905`)
  .then(res => res.json());

//Variables de los videojuegos
const tendencias = document.getElementById('gameTendencia') as HTMLElement;
const lanzamientos = document.getElementById('gameLanzamientos') as HTMLElement;
const ranking = document.getElementById("ranking") as HTMLElement;

//Variable para recoger el formulario
const form = document.getElementById("formulario");

// Variables de los campos del formulario
const nombre = document.getElementById("name") as HTMLInputElement;
const apellido = document.getElementById("apellido") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const telefono = document.getElementById("telefono") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const edad = document.getElementById("edad") as HTMLInputElement;
const mensaje = document.getElementById("message") as HTMLInputElement;

//Pequeña función par dar un efecto hover para las cards
document.addEventListener('DOMContentLoaded', function () {
  const gameCards = document.querySelectorAll<HTMLElement>('.game-card');
  gameCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function () {
      this.style.zIndex = '1';
    });
  });
});


//Función para mostrar un listado de 4 juegos en tendencias
function gamesTendencias():void {
  callGamesList
    .then(datos => {
      if (!datos) return;
      const juegos = datos.results.slice(0, 4);

      juegos.forEach(game => {
        fetch(`https://api.rawg.io/api/games/${game.id}?key=5d746359116244ab9b01714c64813905`)
          .then(r => r.json())
          .then(detalle => {
            //Para mostrar una descripción del juego, pero hasta 100 caracteres, para no hacer demasiado grande la card-game
            let descripcion = detalle.description_raw || '';
            if (descripcion.length > 100) descripcion = descripcion.substring(0, 100) + '...';
            //Creación de la card-game para mostrar el juego y varias propiedades recogidas de la app (Imagen, nombre, plataformas, descripcion, putuación metacritic)
            const cardHTML = `
              <div class="col-md-6 col-lg-3 mb-3 card-container">
                <div class="game-card h-100">
                  <img src="${game.background_image}" class="game-img" alt="${game.name}">
                  <div class="p-3">
                    <span class="badge badge-platform mb-2 p-2">
                      ${game.parent_platforms?.map(p => p.platform.name).join(', ') || 'Sin plataforma'}
                    </span>
                    <h5 class="game-title">${game.name}</h5>
                    <p class="text" id="desc-${game.id}">${descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="rating">
                        <i class="bi bi-star-fill text-warning"></i>
                        <span class="ms-1">Puntuación: ${game.metacritic || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

            tendencias.innerHTML += cardHTML;
          })
          .catch(error => console.error("Error cargando detalle del juego:", error));
      });
    })
    .catch(error => console.error("Error cargando tendencias:", error));
}

//Función para mostrar los proximos lanzamientos en videojuegos
function gamesLanzamientos():void {
  //Para mostrar los juegos que se encuentran entre las fechas comprendidas ordenandolas por fecha de salida proxima
  const url = 'https://api.rawg.io/api/games?key=5d746359116244ab9b01714c64813905&dates=2025-01-01,2025-11-30&ordering=-released&page_size=8';

  fetch(url)
    .then(response => response.json())
    .then(datos => {
      if (!datos) return;

      datos.results.forEach(game => {
        fetch(`https://api.rawg.io/api/games/${game.id}?key=5d746359116244ab9b01714c64813905`)
          .then(r => r.json())
          .then(detalle => {
            //Para mostrar una descripción del juego, pero hasta 100 caracteres, para no hacer demasiado grande la card-game
            let descripcion = detalle.description_raw || '';
            if (descripcion.length > 100) descripcion = descripcion.substring(0, 100) + '...';
            //Creación de la card-game para mostrar el juego y varias propiedades recogidas de la app (Imagen, nombre, plataformas, descripcion)
            const cardHTML = `
              <div class="col-md-6 col-lg-3 mb-3 card-container">
                <div class="game-card h-100">
                  <img src="${game.background_image}" class="game-img" alt="${game.name}">
                  <div class="p-3">
                    <span class="badge badge-platform mb-2 p-2">
                      ${game.parent_platforms?.map(p => p.platform.name).join(', ') || 'Sin plataforma'}
                    </span>
                    <h5 class="game-title">${game.name}</h5>
                    <p class="text" id="desc-${game.id}">${descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="rating">
                        <i class="bi bi-lightning-fill text-warning"></i>
                        <span class="text-success">Próximamente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

            lanzamientos.innerHTML += cardHTML;
          })
          .catch(error => console.error("Error cargando detalle del juego:", error));
      });
    })
    .catch(error => console.error("Error cargando próximos lanzamientos:", error));
}

//Función para mostrar un ranking de 20 videojuegos ordenados de mayor a menor según la puntuación de metacritic
function rankingGames():void {
  callGamesList
    .then(datos => {
      if (!datos) return;
      //Para ordenar la lista de juegos de mayor a menos según la puntuacion de metacritic y si algun juego no tiene puntuación se toma como 0
      let juegos = datos.results.sort((a, b) => (b.metacritic || 0) - (a.metacritic || 0));

      ranking.innerHTML = '';
      //Para crear las lista de juegos mostrando una lista enumerada del 1 al 20, el nombre y la puntuación en metacritic
      juegos.forEach((game, index) => {
        const cardHTML = `
           <tr>
             <td class="seccion_celda__puesto" data-label="Puesto">${index + 1}</td>
             <td class="seccion_celda__juego" data-label="Juego" class="text-start">
               <img src="${game.background_image}" class="seccion_celda__imagen img-fluid rounded" style="width:80; alt="${game.name}">
               <p>${game.name}</p>
             </td>
             <td class="seccion_celda__fecha" data-label="Fecha de salida">${game.released}</td>
             <td class="seccion_celda__plataforma" data-label="Plataformas">${game.parent_platforms?.map(p => p.platform.name).join(', ') || 'Sin plataforma'}</td>
             <td class="seccion_celda__metacritic" data-label="Metacritic">${game.metacritic ?? "N/A"}</td>
           </tr>`;
        ranking.innerHTML += cardHTML;
      });
    })
    .catch(err => console.error("Error cargando juegos:", err));
}



//Función para customizar los mensajes del formulario
function customMessages():void {

  //Mensaje del nombre
  nombre.addEventListener("invalid", () => {
    if (nombre.value === "") {
      nombre.setCustomValidity("Por favor, introduzca su nombre");
    }
  });

  nombre.addEventListener("input", () => {
    nombre.setCustomValidity("");
  });

  //Mensaje del apellido
  apellido.addEventListener("invalid", () => {
    if (apellido.value === "") {
      apellido.setCustomValidity("Por favor, escriba sus dos apellidos");
    }
  });

  apellido.addEventListener("input", () => {
    apellido.setCustomValidity("");
  });

  //Mensaje del email
  email.addEventListener("invalid", () => {
    if (email.value === "") {
      email.setCustomValidity("Por favor, escriba su email");
    }
  });

  email.addEventListener("input", () => {
    email.setCustomValidity(""); 
  });

  //Mensaje del telefono
  telefono.addEventListener("invalid", () => {
    if (telefono.value === "") {
      telefono.setCustomValidity("Por favor, escriba su telefono [xxx-xxx-xxx]");
    }
  });

  telefono.addEventListener("input", () => {
    telefono.setCustomValidity(""); 
  });

  //Mensaje de la contraseña
  password.addEventListener("invalid", () => {
    if (password.value === "") {
      password.setCustomValidity("Por favor, escriba una contraseña valida");
    }
  });

  password.addEventListener("input", () => {
    password.setCustomValidity(""); 
  });

  //Mensaje de la edad
  edad.addEventListener("invalid", () => {
    if (edad.value === "") {
      edad.setCustomValidity("Por favor, escriba una edad entre 0 y 100");
    }
  });

  edad.addEventListener("input", () => {
    edad.setCustomValidity(""); 
  });

  //Mensaje del textarea
  mensaje.addEventListener("invalid", () => {
    if (mensaje.value === "") {
      mensaje.setCustomValidity("Por favor, escriba un mensaje");
    }
  });

  mensaje.addEventListener("input", () => {
    mensaje.setCustomValidity(""); 
  });
}

function toggleBanner():void {
  const banner = document.getElementById('seccion_banner') as HTMLElement | null;
  if (banner) {
    banner.style.display = 'none';
  }
}


//Inicialización de las funciones de la app
gamesTendencias();
gamesLanzamientos();
rankingGames();
customMessages();
toggleBanner();