document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // Smooth scroll for nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Progress Bar and Active Section Logic
    const mainProgress = document.getElementById('main-progress');
    const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
    
    const updateProgress = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollCurrent = window.scrollY;
        const scrollPercent = (scrollCurrent / scrollTotal) * 100;
        
        if (mainProgress) {
            mainProgress.style.height = `${scrollPercent}%`;
        }

        // Update active section
        let currentSection = '';
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                // If section is in view (top is above middle and bottom is below middle)
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = id;
                }
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Run once on load

    // Mobile adjustments (sidebar might be too wide on small screens)
    if (window.innerWidth < 768) {
        document.body.style.paddingLeft = '60px';
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.width = '60px';
    }
});
