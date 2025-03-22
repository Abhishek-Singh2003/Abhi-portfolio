// projects.js
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const oval = card.querySelector('.oval');
        const image1 = card.querySelector('.image1');
        const overlappingVideo = card.querySelector('.project-video');
        const githubLink = card.getAttribute('data-github');
        const netlifyLink = card.getAttribute('data-netlify');
        const githubIcon = card.querySelector('.icons a:first-child');
        const netlifyIcon = card.querySelector('.icons a:last-child');

        let isCardHovered = false;

        // Hover effects for desktop (disabled on mobile)
        if (window.innerWidth > 768) {
            card.addEventListener('mouseenter', () => {
                isCardHovered = true;
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherOval = otherCard.querySelector('.oval');
                        if (otherOval) {
                            otherOval.style.filter = 'blur(5px)';
                        }
                    }
                });
            });

            card.addEventListener('mouseleave', () => {
                isCardHovered = false;
                if (overlappingVideo) {
                    overlappingVideo.style.transform = 'translateY(0)';
                }
                projectCards.forEach(otherCard => {
                    const otherOval = otherCard.querySelector('.oval');
                    if (otherOval) {
                        otherOval.style.filter = 'none';
                    }
                });
            });

            if (image1 && overlappingVideo) {
                image1.addEventListener('mouseenter', () => {
                    if (isCardHovered) {
                        overlappingVideo.style.transform = 'translateY(90px)';
                    }
                });
            }
        }

        // Click events for icons
        if (githubIcon) {
            githubIcon.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(githubLink, '_blank');
            });
        }

        if (netlifyIcon) {
            netlifyIcon.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(netlifyLink, '_blank');
            });
        }
    });
});