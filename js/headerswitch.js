document.addEventListener("DOMContentLoaded", function () {
    fetch("/header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header-link").innerHTML = data;
  
        // Warte, bis der Header geladen wurde
        setTimeout(() => {
          let page = window.location.pathname.split("/").pop();
          let headerContainer = document.getElementById("header-page"); // Header-Container
          let headerOverlay = document.getElementById("header-overlay"); // Overlay-Container
          let headerTitle = document.getElementById("header-title");
          let headerDescription = document.getElementById("header-description");
  
          if (headerContainer && headerOverlay && headerTitle && headerDescription) {
            if (page === "index.html" || page === "") {
              headerTitle.innerText = "Willkommen";
              headerDescription.innerText =
                "Unsere stilvoll renovierten Wohnungen vereinen modernes Design, hochwertige Ausstattung und urbanes Flair. Entdecken Sie Ihr neues Zuhause und genießen Sie Wohnkomfort auf höchstem Niveau!";
              headerContainer.classList.add("header");
              headerOverlay.classList.add("overlay-index"); // Neue Klasse für das Overlay
            } else if (page === "plagwitz.html") {
              headerTitle.innerText = "Plagwitz entdecken";
              headerDescription.innerText =
                "Erleben Sie das kulturelle und kreative Zentrum von Leipzig – Plagwitz bietet einzigartige Erlebnisse für Jung und Alt.";
              headerContainer.classList.add("header-plagwitz");
              headerOverlay.classList.add("overlay-plagwitz"); // Neue Klasse für das Overlay
            }
            else if (page === "wohnung-2-zimmer.html") {
                headerTitle.innerText = "2 Zimmer Wohnung";
                headerDescription.innerText =
                  "Stilvoll renoviert & modern ausgestattet";
                headerContainer.classList.add("header-wohnung2");
                headerOverlay.classList.add("overlay-wohnung2"); // Neue Klasse für das Overlay
              }
          else if (page === "wohnung-3-zimmer.html") {
            headerTitle.innerText = "3 Zimmer Wohnung";
            headerDescription.innerText =
              "Stilvoll renoviert & modern ausgestattet";
            headerContainer.classList.add("header-wohnung3");
            headerOverlay.classList.add("overlay-wohnung3"); // Neue Klasse für das Overlay
          }
          else if (page === "ausstattung.html") {
            headerTitle.innerText = "Ausstattung";
            headerDescription.innerText =
              "Hochwertig, zeitgemäß & durchdacht";
            headerContainer.classList.add("header-ausstattung");
            headerOverlay.classList.add("overlay-ausstattung"); // Neue Klasse für das Overlay
          }
          else if (page === "downloads.html") {
            headerTitle.innerText = "Downloads";
            headerDescription.innerText =
              "Mietunterlagen, Vorlagen und Anleitungen – alles Wichtige auf einen Blick!";
            headerContainer.classList.add("header-downloads");
            headerOverlay.classList.add("overlay-downloads"); // Neue Klasse für das Overlay
          }
          else if (page === "ueberuns.html") {
            headerTitle.innerText = "Über Uns";
            headerDescription.innerText =
              "Vermietung mit Herz und Verstand! Wir kümmern uns mit vollem Einsatz um unser Objekt.";
            headerContainer.classList.add("header-ueberuns");
            headerOverlay.classList.add("overlay-ueberuns"); // Neue Klasse für das Overlay
          }
      }
        }, 0.1); // Kleines Timeout, um sicherzustellen, dass der Header geladen wurde
      })
      .catch((error) =>
        console.error("Fehler beim Laden des Headers:", error)
      );
});