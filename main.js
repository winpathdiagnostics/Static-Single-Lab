// =====================================================================
// MAIN APPLICATION LOGIC (Static Brochure Routing)
// =====================================================================

let navHistory = ['home'];

/**
 * Toggles the visibility of the mobile navigation drawer.
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const isOpen = !menu.classList.contains('hidden');
    
    menu.classList.toggle('hidden', isOpen);
    menuIcon.classList.toggle('hidden', !isOpen);
    closeIcon.classList.toggle('hidden', isOpen);
}

/**
 * Switches between the static sections of the site (Home, About, Contact, etc.)
 */
function switchView(viewId, pushToHistory = true) {
    const views = ['home-view', 'contact-view', 'about-view', 'privacy-view', 'terms-view'];
    
    // Hide all active views
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.add('view-hidden');
    });
    
    // Show requested view
    const target = document.getElementById(viewId + '-view');
    if (target) {
        target.classList.remove('view-hidden');
        if (pushToHistory) navHistory.push(viewId);
        window.scrollTo(0, 0); 
    }

    // Auto-close mobile menu if it's open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
}
