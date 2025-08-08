enum Medallas {
  First = "Oro",
  Second = "Plata",
  Third = "Bronce"
}

function showMedal(clasification: keyof typeof Medallas) {
  const medalValue = Medallas[clasification];

  if (medalValue === Medallas.First) {
    console.log("Has ganado la medalla de oro");
  } else if (medalValue === Medallas.Second) {
    console.log("Has ganado la medalla de plata");
  } else if (medalValue === Medallas.Third) {
    console.log("Has ganado la medalla de bronce");
  } else {
    console.log("Clasificación desconocida");
  }
}

showMedal("First"); 
showMedal("Second"); 
showMedal("Third"); 