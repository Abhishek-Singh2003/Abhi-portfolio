// skills.js
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Toggle hamburger icon
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00ffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Animate skill bars when they come into view
    const skillCards = document.querySelectorAll('.skill-card');
    
    const animateSkillBars = () => {
        skillCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect();
            
            // Check if card is in viewport
            if(cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
                const progressBar = card.querySelector('.skill-progress');
                if (progressBar && progressBar.style.width === '0px') {
                    setTimeout(() => {
                        progressBar.style.width = progressBar.getAttribute('data-width') || progressBar.style.width;
                    }, 100);
                }
            }
        });
    };
    
    // Save original width values and set to 0 initially
    skillCards.forEach(card => {
        const progressBar = card.querySelector('.skill-progress');
        if (progressBar) {
            const width = progressBar.style.width;
            progressBar.setAttribute('data-width', width);
            progressBar.style.width = '0px';
        }
    });
    
    // Initial animation
    setTimeout(animateSkillBars, 500);
    
    // Animate on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Add hover effects to skill cards
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            const icon = this.querySelector('.skill-icon');
            if (icon) icon.style.transform = 'scale(1.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            const icon = this.querySelector('.skill-icon');
            if (icon) icon.style.transform = '';
        });
    });
    
    // Page transition effect
    const pageTransition = document.querySelector('.page-transition');
    pageTransition.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        pageTransition.style.transform = 'translateY(-100%)';
        pageTransition.style.transition = 'transform 0.7s ease';
    }, 300);

    // Add page transition when clicking on links
    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
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
        });
    });
});