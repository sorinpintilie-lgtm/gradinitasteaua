// Grădinița Steaua - Main JavaScript
// Add any custom JavaScript functionality here

document.addEventListener('DOMContentLoaded', function() {
    console.log('Grădinița Steaua website loaded successfully');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll class to header
    const header = document.querySelector('nav');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back to top button functionality
    const balloonBtn = document.querySelector('.balloon-btn');
    if (balloonBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                balloonBtn.classList.add('show');
            } else {
                balloonBtn.classList.remove('show');
            }
        });
    }
});
