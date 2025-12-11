/**
 * MAIN MODULE
 * Entry point that initializes all functionality
 */

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNav();
    
    // Initialize search
    initSearch();
    
    // Initialize back to top button
    initBackToTop();
    
    // Load homepage content if on index.html
    if (isHomePage()) {
        loadHomePage();
    }
});

/**
 * Check if current page is the homepage
 * @returns {boolean} True if on homepage
 */
function isHomePage() {
    var currentPage = window.location.pathname.split('/').pop();
    return currentPage === 'index.html' || currentPage === '';
}

/**
 * Load content for the homepage
 */
function loadHomePage() {
    loadData()
        .then(function(data) {
            // Display featured games (first 6 games)
            var featuredGames = data.games.slice(0, 6);
            var gamesContainer = document.getElementById('featured-games');
            
            if (gamesContainer) {
                gamesContainer.innerHTML = featuredGames.map(function(game) {
                    return renderGameCard(game);
                }).join('');
            }
            
            // Update stats
            updateStats(data);
        })
        .catch(function(error) {
            console.error('Error loading homepage:', error);
            var gamesContainer = document.getElementById('featured-games');
            if (gamesContainer) {
                gamesContainer.innerHTML = '<p class="error">Error loading games.</p>';
            }
        });
}

/**
 * Update the statistics section
 * @param {Object} data - The full data object
 */
function updateStats(data) {
    var totalGames = document.getElementById('total-games');
    var totalCharacters = document.getElementById('total-characters');
    var totalLocations = document.getElementById('total-locations');
    
    if (totalGames) {
        totalGames.textContent = data.games.length;
    }
    
    if (totalCharacters) {
        totalCharacters.textContent = data.characters.length;
    }
    
    if (totalLocations) {
        totalLocations.textContent = data.locations.length;
    }
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    var backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) {
        return;
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Keyboard accessibility
    backToTopBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

/**
 * Handle image loading errors
 * This can be called from onerror attributes in HTML
 * @param {HTMLImageElement} img - The image element that failed to load
 */
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
    img.alt = 'Placeholder image';
}