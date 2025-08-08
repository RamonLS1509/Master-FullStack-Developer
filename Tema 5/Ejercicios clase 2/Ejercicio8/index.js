var luis = {
    name: "Luis",
    birthYear: 1983,
    ciudad: "Segovia"
};
function getPersonInfo(currentYear, persona) {
    var edad = currentYear - persona.birthYear;
    return [persona.name, edad];
}
var resultado = getPersonInfo(2025, luis);
console.log(resultado);
