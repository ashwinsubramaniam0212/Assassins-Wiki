var searchTimeout = null;

function initSearch() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) {
        return;
    }
    
    searchInput.addEventListener('input', function(e) {
        var query = e.target.value.trim();
        
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        if (query.length === 0) {
            hideSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(function() {
            performSearch(query);
        }, 300);
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            hideSearchResults();
        }
    });
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.blur();
        }
    });
}

function performSearch(query) {
    var searchResults = document.getElementById('search-results');
    
    searchResults.innerHTML = '<div class="search-result-item">Searching...</div>';
    searchResults.classList.add('active');
    
    searchContent(query)
        .then(function(results) {
            displaySearchResults(results);
        })
        .catch(function(error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="search-result-item">Error performing search</div>';
        });
}

function displaySearchResults(results) {
    var searchResults = document.getElementById('search-results');
    var totalResults = results.games.length + results.characters.length;
    
    if (totalResults === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        return;
    }
    
    var html = '';
    
    if (results.games.length > 0) {
        html += results.games.slice(0, 5).map(function(game) {
            return renderSearchResult(game, 'game');
        }).join('');
    }
    
    if (results.characters.length > 0) {
        html += results.characters.slice(0, 5).map(function(char) {
            return renderSearchResult(char, 'character');
        }).join('');
    }
    
    var remaining = totalResults - 10;
    if (remaining > 0) {
        html += `<div class="search-result-item">+ ${remaining} more results...</div>`;
    }
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}

function hideSearchResults() {
    var searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
}
