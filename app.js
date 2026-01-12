document.addEventListener('DOMContentLoaded', () => {
    console.log('My Awesome Web App loaded!');

    const ctaButton = document.getElementById('cta-button');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Welcome! Thank you for your interest.');
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
