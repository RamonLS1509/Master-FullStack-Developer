let call = fetch ('https://api.rawg.io/api/games?key=5d746359116244ab9b01714c64813905')
// const API = '5d746359116244ab9b01714c64813905'

call.then((datos) => {
    return datos.json();
})
.then((datos) => {
    console.log(datos.results[0].name)
})