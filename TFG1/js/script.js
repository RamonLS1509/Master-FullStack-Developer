//Variable para recoger los juegos de la API
var callGamesList = fetch("https://api.rawg.io/api/games?key=5d746359116244ab9b01714c64813905")
    .then(function (res) { return res.json(); });
//Variables de los videojuegos
var tendencias = document.getElementById('gameTendencia');
var lanzamientos = document.getElementById('gameLanzamientos');
var ranking = document.getElementById("ranking");
//Variable para recoger el formulario
var form = document.getElementById("formulario");
// Variables de los campos del formulario
var nombre = document.getElementById("name");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var password = document.getElementById("password");
var edad = document.getElementById("edad");
var mensaje = document.getElementById("message");
//Pequeña función par dar un efecto hover para las cards
document.addEventListener('DOMContentLoaded', function () {
    var gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        });
    });
});
//Función para mostrar un listado de 4 juegos en tendencias
function gamesTendencias() {
    callGamesList
        .then(function (datos) {
        if (!datos)
            return;
        var juegos = datos.results.slice(0, 4);
        juegos.forEach(function (game) {
            fetch("https://api.rawg.io/api/games/".concat(game.id, "?key=5d746359116244ab9b01714c64813905"))
                .then(function (r) { return r.json(); })
                .then(function (detalle) {
                var _a;
                //Para mostrar una descripción del juego, pero hasta 100 caracteres, para no hacer demasiado grande la card-game
                var descripcion = detalle.description_raw || '';
                if (descripcion.length > 100)
                    descripcion = descripcion.substring(0, 100) + '...';
                //Creación de la card-game para mostrar el juego y varias propiedades recogidas de la app (Imagen, nombre, plataformas, descripcion, putuación metacritic)
                var cardHTML = "\n              <div class=\"col-md-6 col-lg-3 mb-3 card-container\">\n                <div class=\"game-card h-100\">\n                  <img src=\"".concat(game.background_image, "\" class=\"game-img\" alt=\"").concat(game.name, "\">\n                  <div class=\"p-3\">\n                    <span class=\"badge badge-platform mb-2 p-2\">\n                      ").concat(((_a = game.parent_platforms) === null || _a === void 0 ? void 0 : _a.map(function (p) { return p.platform.name; }).join(', ')) || 'Sin plataforma', "\n                    </span>\n                    <h5 class=\"game-title\">").concat(game.name, "</h5>\n                    <p class=\"text\" id=\"desc-").concat(game.id, "\">").concat(descripcion, "</p>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                      <div class=\"rating\">\n                        <i class=\"bi bi-star-fill text-warning\"></i>\n                        <span class=\"ms-1\">Puntuaci\u00F3n: ").concat(game.metacritic || 'N/A', "</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>");
                tendencias.innerHTML += cardHTML;
            })
                .catch(function (error) { return console.error("Error cargando detalle del juego:", error); });
        });
    })
        .catch(function (error) { return console.error("Error cargando tendencias:", error); });
}
//Función para mostrar los proximos lanzamientos en videojuegos
function gamesLanzamientos() {
    //Para mostrar los juegos que se encuentran entre las fechas comprendidas ordenandolas por fecha de salida proxima
    var url = 'https://api.rawg.io/api/games?key=5d746359116244ab9b01714c64813905&dates=2025-01-01,2025-11-30&ordering=-released&page_size=8';
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (datos) {
        if (!datos)
            return;
        datos.results.forEach(function (game) {
            fetch("https://api.rawg.io/api/games/".concat(game.id, "?key=5d746359116244ab9b01714c64813905"))
                .then(function (r) { return r.json(); })
                .then(function (detalle) {
                var _a;
                //Para mostrar una descripción del juego, pero hasta 100 caracteres, para no hacer demasiado grande la card-game
                var descripcion = detalle.description_raw || '';
                if (descripcion.length > 100)
                    descripcion = descripcion.substring(0, 100) + '...';
                //Creación de la card-game para mostrar el juego y varias propiedades recogidas de la app (Imagen, nombre, plataformas, descripcion)
                var cardHTML = "\n              <div class=\"col-md-6 col-lg-3 mb-3 card-container\">\n                <div class=\"game-card h-100\">\n                  <img src=\"".concat(game.background_image, "\" class=\"game-img\" alt=\"").concat(game.name, "\">\n                  <div class=\"p-3\">\n                    <span class=\"badge badge-platform mb-2 p-2\">\n                      ").concat(((_a = game.parent_platforms) === null || _a === void 0 ? void 0 : _a.map(function (p) { return p.platform.name; }).join(', ')) || 'Sin plataforma', "\n                    </span>\n                    <h5 class=\"game-title\">").concat(game.name, "</h5>\n                    <p class=\"text\" id=\"desc-").concat(game.id, "\">").concat(descripcion, "</p>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                      <div class=\"rating\">\n                        <i class=\"bi bi-lightning-fill text-warning\"></i>\n                        <span class=\"text-success\">Pr\u00F3ximamente</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>");
                lanzamientos.innerHTML += cardHTML;
            })
                .catch(function (error) { return console.error("Error cargando detalle del juego:", error); });
        });
    })
        .catch(function (error) { return console.error("Error cargando próximos lanzamientos:", error); });
}
//Función para mostrar un ranking de 20 videojuegos ordenados de mayor a menor según la puntuación de metacritic
function rankingGames() {
    callGamesList
        .then(function (datos) {
        if (!datos)
            return;
        //Para ordenar la lista de juegos de mayor a menos según la puntuacion de metacritic y si algun juego no tiene puntuación se toma como 0
        var juegos = datos.results.sort(function (a, b) { return (b.metacritic || 0) - (a.metacritic || 0); });
        ranking.innerHTML = '';
        //Para crear las lista de juegos mostrando una lista enumerada del 1 al 20, el nombre y la puntuación en metacritic
        juegos.forEach(function (game, index) {
            var _a, _b;
            var cardHTML = "\n           <tr>\n             <td class=\"seccion_celda__puesto\" data-label=\"Puesto\">".concat(index + 1, "</td>\n             <td class=\"seccion_celda__juego\" data-label=\"Juego\" class=\"text-start\">\n               <img src=\"").concat(game.background_image, "\" class=\"seccion_celda__imagen img-fluid rounded\" style=\"width:80; alt=\"").concat(game.name, "\">\n               <p>").concat(game.name, "</p>\n             </td>\n             <td class=\"seccion_celda__fecha\" data-label=\"Fecha de salida\">").concat(game.released, "</td>\n             <td class=\"seccion_celda__plataforma\" data-label=\"Plataformas\">").concat(((_a = game.parent_platforms) === null || _a === void 0 ? void 0 : _a.map(function (p) { return p.platform.name; }).join(', ')) || 'Sin plataforma', "</td>\n             <td class=\"seccion_celda__metacritic\" data-label=\"Metacritic\">").concat((_b = game.metacritic) !== null && _b !== void 0 ? _b : "N/A", "</td>\n           </tr>");
            ranking.innerHTML += cardHTML;
        });
    })
        .catch(function (err) { return console.error("Error cargando juegos:", err); });
}
//Función para customizar los mensajes del formulario
function customMessages() {
    //Mensaje del nombre
    nombre.addEventListener("invalid", function () {
        if (nombre.value === "") {
            nombre.setCustomValidity("Por favor, introduzca su nombre");
        }
    });
    nombre.addEventListener("input", function () {
        nombre.setCustomValidity("");
    });
    //Mensaje del apellido
    apellido.addEventListener("invalid", function () {
        if (apellido.value === "") {
            apellido.setCustomValidity("Por favor, escriba sus dos apellidos");
        }
    });
    apellido.addEventListener("input", function () {
        apellido.setCustomValidity("");
    });
    //Mensaje del email
    email.addEventListener("invalid", function () {
        if (email.value === "") {
            email.setCustomValidity("Por favor, escriba su email");
        }
    });
    email.addEventListener("input", function () {
        email.setCustomValidity("");
    });
    //Mensaje del telefono
    telefono.addEventListener("invalid", function () {
        if (telefono.value === "") {
            telefono.setCustomValidity("Por favor, escriba su telefono [xxx-xxx-xxx]");
        }
    });
    telefono.addEventListener("input", function () {
        telefono.setCustomValidity("");
    });
    //Mensaje de la contraseña
    password.addEventListener("invalid", function () {
        if (password.value === "") {
            password.setCustomValidity("Por favor, escriba una contraseña valida");
        }
    });
    password.addEventListener("input", function () {
        password.setCustomValidity("");
    });
    //Mensaje de la edad
    edad.addEventListener("invalid", function () {
        if (edad.value === "") {
            edad.setCustomValidity("Por favor, escriba una edad entre 0 y 100");
        }
    });
    edad.addEventListener("input", function () {
        edad.setCustomValidity("");
    });
    //Mensaje del textarea
    mensaje.addEventListener("invalid", function () {
        if (mensaje.value === "") {
            mensaje.setCustomValidity("Por favor, escriba un mensaje");
        }
    });
    mensaje.addEventListener("input", function () {
        mensaje.setCustomValidity("");
    });
}
function toggleBanner() {
    var banner = document.getElementById('seccion_banner');
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
