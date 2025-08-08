type Persona = {
    name: string,
    birthYear: number,
    ciudad: string
}

const luis: Persona = {
    name: "Luis",
    birthYear: 1983,
    ciudad: "Segovia"
}

function getPersonInfo(currentYear: number, persona: Persona): [string, number] {
  const edad = currentYear - persona.birthYear;
  return [persona.name, edad];
}

const resultado = getPersonInfo(2025, luis);
console.log(resultado); 