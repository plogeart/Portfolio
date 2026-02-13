document.addEventListener('DOMContentLoaded', function() {

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const mainImageContainer = document.querySelector('.main-image');
    const imageToLoad = document.getElementById('current-image');
    const imageThumbnails = document.querySelectorAll('.thumb');

    function handleImageLoad(imgElement) {
        if (imgElement.complete) {
            imgElement.classList.remove('loading');
            imgElement.classList.add('loaded');
            mainImageContainer.classList.remove('is-loading');
        } else {
            mainImageContainer.classList.add('is-loading');
            imgElement.onload = () => {
                imgElement.classList.remove('loading');
                imgElement.classList.add('loaded');
                mainImageContainer.classList.remove('is-loading');
            };
            imgElement.onerror = () => {
                console.error("Erreur de chargement de l'image.");
                mainImageContainer.classList.remove('is-loading');
            };
        }
    }

    handleImageLoad(imageToLoad);

    imageThumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            imageToLoad.classList.remove('loaded');
            imageToLoad.classList.add('loading');
            
            imageToLoad.src = this.src.replace('w=200&h=120', 'w=1200&h=700');
            handleImageLoad(imageToLoad);

            imageThumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => i.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});