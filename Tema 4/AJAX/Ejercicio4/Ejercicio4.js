const select = document.getElementById('planetSelect');
const charactersDiv = document.getElementById('characters');

    function loadPlanets() {
      let url = 'https://rickandmortyapi.com/api/location';
      const allLocations = [];

      function fetchPage(url) {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            allLocations.push(...data.results);
            if (data.info.next) {
              fetchPage(data.info.next); 
            } else {
              populateDropdown(allLocations);
            }
          })
          .catch(error => {
            console.error('Error cargando planetas:', error);
          });
      }

      fetchPage(url);
    }

    function populateDropdown(locations) {
      select.innerHTML = '<option value="">-- Selecciona un planeta --</option>';
      locations.forEach(loc => {
        const option = document.createElement('option');
        option.value = loc.url;
        option.textContent = loc.name;
        select.appendChild(option);
      });
    }

    select.addEventListener('change', function () {
      const locationUrl = this.value;
      charactersDiv.innerHTML = '';

      if (!locationUrl) return;

      fetch(locationUrl)
        .then(res => res.json())
        .then(location => {
          const residents = location.residents;
          if (residents.length === 0) {
            charactersDiv.innerHTML = '<p>No hay personajes en este planeta.</p>';
            return;
          }

          const characterRequests = residents.map(url => fetch(url).then(r => r.json()));
          Promise.all(characterRequests)
            .then(characters => {
              charactersDiv.innerHTML = '<h2>Personajes:</h2>';
              characters.forEach(char => {
                const div = document.createElement('div');
                div.className = 'character';
                div.innerHTML = `
                  <img src="${char.image}" alt="${char.name}" />
                  <strong>${char.name}</strong> (${char.status})
                `;
                charactersDiv.appendChild(div);
              });
            });
        });
    });

    // Inicializar
    loadPlanets();