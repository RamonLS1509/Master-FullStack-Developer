let container = document.getElementById('container')
let api = fetch('https://api.disneyapi.dev/characters/${id}');

api.then((datos) => {
    return datos.json();
})
.then((datos) => {
    for (let i = 0; i < datos.data.length; i++) {
        container.innerHTML += `
            <div class="card">
                <img src="${datos.data[i].imageUrl}" alt="Avatar">
                <div class="container">
                    <h4><b>ID: ${datos.data[i]._id}</b></h4>
                    <p>Personaje: ${datos.data[i].name}</p>
                    <ul>Series: ${datos.tvShows?.join(', ') || 'Ninguna'}</ul>
                </div>
            </div>`;
    }
});




