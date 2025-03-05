      document.addEventListener("DOMContentLoaded", function () {
        fetch("/header.html")
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("header-link").innerHTML = data;
          })
          .catch((error) =>
            console.error("Fehler beim Laden des Headers:", error)
          );
      });


      document.addEventListener("DOMContentLoaded", function () {
        fetch("/footer.html")
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("footer-link").innerHTML = data;
          })
          .catch((error) =>
            console.error("Fehler beim Laden des Footers:", error)
          );
      });
