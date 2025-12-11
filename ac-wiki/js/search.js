/**
 * SEARCH MODULE
 * Handles search functionality with debouncing
 */

// Variable to store timeout for debouncing
var searchTimeout = null;

/**
 * Initialize search functionality
 * Sets up event listeners on the search input
 */
function initSearch() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) {
        return; // Search not available on this page
    }
    
    // Listen for input changes
    searchInput.addEventListener('input', function(e) {
        var query = e.target.value.trim();
        
        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // If query is empty, hide results
        if (query.length === 0) {
            hideSearchResults();
            return;
        }
        
        // Wait 300ms after user stops typing before searching
        searchTimeout = setTimeout(function() {
            performSearch(query);
        }, 300);
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            hideSearchResults();
        }
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.blur();
        }
    });
}

/**
 * Perform search and display results
 * @param {string} query - The search query
 */
function performSearch(query) {
    var searchResults = document.getElementById('search-results');
    
    // Show loading state
    searchResults.innerHTML = '<div class="search-result-item">Searching...</div>';
    searchResults.classList.add('active');
    
    // Search the data
    searchContent(query)
        .then(function(results) {
            displaySearchResults(results);
        })
        .catch(function(error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="search-result-item">Error performing search</div>';
        });
}

/**
 * Display search results
 * @param {Object} results - Object containing games and characters arrays
 */
function displaySearchResults(results) {
    var searchResults = document.getElementById('search-results');
    var totalResults = results.games.length + results.characters.length;
    
    // No results found
    if (totalResults === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        return;
    }
    
    // Build HTML for results
    var html = '';
    
    // Add game results
    if (results.games.length > 0) {
        html += results.games.slice(0, 5).map(function(game) {
            return renderSearchResult(game, 'game');
        }).join('');
    }
    
    // Add character results
    if (results.characters.length > 0) {
        html += results.characters.slice(0, 5).map(function(char) {
            return renderSearchResult(char, 'character');
        }).join('');
    }
    
    // Show total count if there are more results
    var remaining = totalResults - 10;
    if (remaining > 0) {
        html += `<div class="search-result-item">+ ${remaining} more results...</div>`;
    }
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}

/**
 * Hide search results dropdown
 */
function hideSearchResults() {
    var searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
}