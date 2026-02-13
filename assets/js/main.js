document.addEventListener('DOMContentLoaded', function() {

    const nav = document.getElementById('navbar');
    const header = document.querySelector('.site-header');
    
    const stickyPoint = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > stickyPoint) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    let currentIndex = 0;
    const cards = document.querySelectorAll(".carousel .card");

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    window.changeCard = function(direction) {
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        
        showCard(currentIndex);
    }

    showCard(currentIndex);

});