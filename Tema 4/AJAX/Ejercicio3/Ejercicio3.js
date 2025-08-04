function loadComic() {
      var num = document.getElementById("comicNumber").value;
      var infoDiv = document.getElementById("comicInfo");
      var errorP = document.getElementById("error");
      infoDiv.innerHTML = "";
      errorP.textContent = "";

      if (!num) {
        errorP.textContent = "Por favor, introduce un número.";
        return;
      }

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://xkcd.com/" + num + "/info.0.json", true);

      xhr.onload = function () {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          infoDiv.innerHTML =
            "<h2>" + data.title + "</h2>" +
            "<p>Publicado el: " + data.day + "/" + data.month + "/" + data.year + "</p>" +
            "<img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "' />";
        } else {
          errorP.textContent = "Cómic no encontrado.";
        }
      };

      xhr.onerror = function () {
        errorP.textContent = "Error de conexión al cargar el cómic.";
      };

      xhr.send();
    }