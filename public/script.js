document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll pour les ancres avec décélération
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; // durée en millisecondes
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Fonction d'easing pour la décélération
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    
                    window.scrollTo(0, startPosition + (distance * easeOutCubic));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        });
    });

    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer tous les éléments de section
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Gestion des boutons CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        // N'ajoute l'eventListener QUE si le bouton n'a pas déjà un href ou un onclick
        if (!button.hasAttribute('onclick') && !button.hasAttribute('href')) {
            button.addEventListener('click', () => {
                // Ici, vous pouvez ajouter votre logique de redirection vers le formulaire de contact
                // ou ouvrir une modal de contact
                console.log('CTA button clicked');
            });
        }
    });

    // Animation des cartes au hover
    const cards = document.querySelectorAll('.audience-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Gestion du menu mobile (si vous ajoutez un menu mobile plus tard)
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        });
    }
}); 