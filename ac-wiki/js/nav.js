/**
 * NAVIGATION MODULE
 * Handles mobile menu toggle and active link highlighting
 */

/**
 * Initialize navigation functionality
 */
function initNav() {
    // Mobile hamburger menu toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle the menu
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            var isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on a link
        var navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Highlight active page in navigation
    highlightActivePage();
}

/**
 * Highlight the current page in the navigation menu
 */
function highlightActivePage() {
    // Get current page filename
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Handle game-detail.html as part of games section
    if (currentPage.startsWith('game-detail')) {
        currentPage = 'games.html';
    }
    
    // Find all nav links
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        var linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}