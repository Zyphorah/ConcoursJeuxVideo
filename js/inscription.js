document.addEventListener("DOMContentLoaded", (event) => {

    // Obtenez les boutons radio
    let radioHeros = document.getElementById('heros');
    let radioVilains = document.getElementById('vilains');

    // Obtenez le lien vers la feuille de style
    let stylesheet = document.getElementById('team-theme');

    // Ajoutez un écouteur d'événements à chaque bouton radio
    radioHeros.addEventListener('change', function() {
        if (this.checked) {
            // Si le bouton "heros" est sélectionné, changez la feuille de style
            stylesheet.href = 'css/heros.css';
        }
    });

    radioVilains.addEventListener('change', function() {
        if (this.checked) {
            // Si le bouton "vilains" est sélectionné, changez la feuille de style
            stylesheet.href = 'css/vilains.css';
        }
    });

  });
