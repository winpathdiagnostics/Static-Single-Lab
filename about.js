/**
 * =========================================================
 * ABOUT SECTION LOGIC (about.js)
 * =========================================================
 * Contains specific logic for the About Us, Roadmap, and 
 * interactive features within the About section.
 */

// Roadmap Highlight Manager
// Could be used to animate items as the user scrolls down
document.addEventListener('DOMContentLoaded', () => {
    const roadmapItems = document.querySelectorAll('#about .group');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a simple animation class when in view
                entry.target.classList.add('opacity-100');
            }
        });
    }, { threshold: 0.1 });

    roadmapItems.forEach(item => {
        item.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
        observer.observe(item);
    });
});
