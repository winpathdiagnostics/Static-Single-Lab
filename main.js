/**
 * =========================================================
 * MAIN UI LOGIC (main.js)
 * =========================================================
 * Handles navigation, mobile menu interactions, and 
 * smooth scrolling for the home page.
 */

// Mobile Menu Toggle
// Toggles the visibility of the hamburger menu and switches icons
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const isOpen = !menu.classList.contains('hidden');
    
    menu.classList.toggle('hidden', isOpen);
    menuIcon.classList.toggle('hidden', !isOpen);
    closeIcon.classList.toggle('hidden', isOpen);
};

// Smooth Scrolling Utility
// Ensures the user is on the 'home' view before attempting to scroll to a section
window.scrollToSection = function(sectionId) {
    // Force switch to the main home view first
    window.switchView('home');
    
    // Slight delay ensures the DOM is rendered before scrolling
    setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, 50);
};
