document.addEventListener('DOMContentLoaded', function() {

    // --- GESTION DE LA BARRE DE NAVIGATION "STICKY" ---
    const nav = document.getElementById('navbar');
    const header = document.querySelector('.site-header');
    
    // On se base sur la hauteur totale du header pour déclencher l'effet
    const stickyPoint = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > stickyPoint) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // --- GESTION DU CAROUSEL "À PROPOS" ---
    let currentIndex = 0;
    const cards = document.querySelectorAll(".carousel .card");

    // Fonction pour afficher la carte désirée et cacher les autres
    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    // Fonction globale pour changer de carte
    window.changeCard = function(direction) {
        currentIndex += direction;
        
        // Boucle pour revenir au début ou à la fin
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        
        showCard(currentIndex);
    }

    // Afficher la première carte au chargement
    showCard(currentIndex);

});