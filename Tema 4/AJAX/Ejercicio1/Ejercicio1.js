let api = fetch('https://gutendex.com/books');
let main = document.getElementById('container');


api.then((datos) => {
    return datos.json();
})
.then((datos) => {
        
        for (let i = 0; i < datos.results.length; i++) {
            main.innerHTML += `
                <div class="card">
                    <img src="${datos.results[i].formats['image/jpeg']}" alt="Avatar">
                    <div class="container">
                        <h4><b>Titulo: ${datos.results[i].title}</b></h4>
                        <p>Autor: ${datos.results[i].authors[0].name}</p>
                    </div>
                </div>
    `;
        }
       
    })

