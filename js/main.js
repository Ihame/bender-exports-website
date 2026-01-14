(() => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');

    const toggleNavState = () => {
        if (!navbar) return;
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    };

    const toggleBackToTop = () => {
        if (!backToTop) return;
        backToTop.style.display = window.scrollY > 200 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', () => {
        toggleNavState();
        toggleBackToTop();
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href') || '';
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Back to top click
    backToTop?.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Basic contact form feedback
    document.getElementById('contactForm')?.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your inquiry! We will contact you soon.');
        (event.target).reset();
    });

    // Lazy-loaded images: mark as loaded for CSS hooks
    document.querySelectorAll('img').forEach(img => {
        const markLoaded = () => img.classList.add('loaded');
        if (img.complete) {
            markLoaded();
        } else {
            img.addEventListener('load', markLoaded, { once: true });
        }
    });

    // Initialize on load
    toggleNavState();
    toggleBackToTop();
    console.log('Bender Exports single-page experience ready.');
})();
