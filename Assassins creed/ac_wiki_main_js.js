// ==========================================
// Assassin's Creed Wiki - Main Entry Point
// ==========================================

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    
    // Initialize search
    initSearch();
    
    // Initialize back to top button
    initBackToTop();
    
    // Render home page
    renderPage('home');
});

// ==========================================
// Back to Top Button
// ==========================================

function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });
}