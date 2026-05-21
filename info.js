document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuTrigger = document.getElementById('menuTrigger');
    const menuOverlay = document.getElementById('menuOverlay');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.toggle('active');
        menuOverlay.classList.toggle('open');
        
        if (menuOverlay.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    const menuLinks = document.querySelectorAll('.overlay-nav-list a, .overlay-sub-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuTrigger.classList.remove('active');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
});