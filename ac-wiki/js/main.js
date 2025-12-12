document.addEventListener('DOMContentLoaded', function() {
    initNav();
    initSearch();
    initBackToTop();
    
    if (isHomePage()) {
        loadHomePage();
    }
});

function isHomePage() {
    var currentPage = window.location.pathname.split('/').pop();
    return currentPage === 'index.html' || currentPage === '';
}

function loadHomePage() {
    loadData()
        .then(function(data) {
            var featuredGames = data.games.slice(0, 6);
            var gamesContainer = document.getElementById('featured-games');
            
            if (gamesContainer) {
                gamesContainer.innerHTML = featuredGames.map(function(game) {
                    return renderGameCard(game);
                }).join('');
            }
            
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

function initBackToTop() {
    var backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) {
        return;
    }
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
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

function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
    img.alt = 'Placeholder image';
}
