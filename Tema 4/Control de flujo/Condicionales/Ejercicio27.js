alert("Te despiertas en un bosque oscuro, con la luz de la luna filtrándose entre los árboles.");

let opcion1 = prompt("¿Qué quieres hacer?\n1. Caminar hacia el sendero iluminado\n2. Explorar la cueva cercana");

if (opcion1 === "1") {
  alert("Caminas por el sendero y escuchas pasos detrás de ti...");

  let opcion2 = prompt("¿Qué haces?\n1. Correr\n2. Esconderte detrás de un árbol");

  if (opcion2 === "1") {
    alert("Corres tan rápido como puedes y logras llegar a una cabaña segura. ¡Te salvaste!");
  } else if (opcion2 === "2") {
    alert("Te escondes, pero los pasos se acercan... ¡es un lobo! Has sido atrapado.");
  } else {
    alert("Opción no válida. Te quedas paralizado y te atrapan.");
  }

} else if (opcion1 === "2") {
  // Entras a la cueva
  alert("Entras a la cueva y ves un brillo extraño en el fondo...");

  let opcion2 = prompt("¿Qué haces?\n1. Te acercas al brillo\n2. Das media vuelta y sales de la cueva");

  if (opcion2 === "1") {
    alert("Te acercas y descubres un cofre lleno de oro. ¡Has encontrado un tesoro!");
  } else if (opcion2 === "2") {
    alert("Sales de la cueva y vuelves al bosque... pero ahora estás perdido.");
  } else {
    alert("Opción no válida. Tropiezas y caes en un agujero.");
  }

} else {
  alert("Opción no válida. Te quedas quieto y la noche te envuelve.");
}
