// index.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Toggle hamburger icon
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const pageTransition = document.querySelector('.page-transition');
    pageTransition.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        pageTransition.style.transform = 'translateY(-100%)';
        pageTransition.style.transition = 'transform 0.7s ease';
    }, 300);

    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('target') !== '_blank') {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                pageTransition.style.transform = 'translateY(0)';
                pageTransition.style.transition = 'transform 0.7s ease';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 700);
                
                // Close the menu on mobile after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.textContent = '☰';
                }
            }
        });
    });
});