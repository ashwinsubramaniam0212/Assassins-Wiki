// ==========================================
// Assassin's Creed Wiki - Search Functionality
// ==========================================

let searchTimeout = null;

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Search input handler with debounce
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        // Clear previous timeout
        clearTimeout(searchTimeout);

        // Hide results if query is empty
        if (query.length === 0) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        // Don't search for queries less than 2 characters
        if (query.length < 2) {
            return;
        }

        // Debounce search - wait 300ms after user stops typing
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Clear search on escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.value = '';
        }
    });
}

function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    const searchResults = document.getElementById('search-results');

    // Search in games
    const games = AC_WIKI_DATA.games.filter(g =>
        g.title.toLowerCase().includes(lowerQuery) ||
        g.description.toLowerCase().includes(lowerQuery) ||
        g.setting.toLowerCase().includes(lowerQuery) ||
        g.protagonist.toLowerCase().includes(lowerQuery)
    );

    // Search in characters
    const characters = AC_WIKI_DATA.characters.filter(c =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.role.toLowerCase().includes(lowerQuery)
    );

    // No results found
    if (games.length === 0 && characters.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found for "' + query + '"</div>';
        searchResults.classList.add('active');
        return;
    }

    // Build results HTML
    let html = '';

    // Display game results
    if (games.length > 0) {
        html += '<div style="padding: 0.5rem 1rem; background: var(--color-light-gray); font-weight: bold; border-bottom: 1px solid var(--color-border);">Games (' + games.length + ')</div>';
        
        games.slice(0, 5).forEach(game => {
            html += `
                <div class="search-result-item" onclick="showGameDetail('${game.id}')">
                    <strong>${game.title}</strong> <span style="color: var(--color-primary);">(${game.year})</span><br>
                    <small style="color: var(--color-text);">${game.setting}</small>
                </div>
            `;
        });

        if (games.length > 5) {
            html += '<div style="padding: 0.5rem 1rem; color: var(--color-primary); font-size: 0.875rem;">+ ' + (games.length - 5) + ' more games...</div>';
        }
    }

    // Display character results
    if (characters.length > 0) {
        html += '<div style="padding: 0.5rem 1rem; background: var(--color-light-gray); font-weight: bold; border-bottom: 1px solid var(--color-border); margin-top: ' + (games.length > 0 ? '0.5rem' : '0') + ';">Characters (' + characters.length + ')</div>';
        
        characters.slice(0, 5).forEach(char => {
            const game = AC_WIKI_DATA.games.find(g => g.id === char.gameId);
            html += `
                <div class="search-result-item">
                    <strong>${char.name}</strong><br>
                    <small style="color: var(--color-accent);">${char.role}</small>
                    ${game ? ' • <small style="color: var(--color-text);">' + game.title + '</small>' : ''}
                </div>
            `;
        });

        if (characters.length > 5) {
            html += '<div style="padding: 0.5rem 1rem; color: var(--color-primary); font-size: 0.875rem;">+ ' + (characters.length - 5) + ' more characters...</div>';
        }
    }

    // Display results
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}