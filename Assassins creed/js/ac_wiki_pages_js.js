// ==========================================
// Assassin's Creed Wiki - Page Rendering
// ==========================================

let currentPage = 'home';

// Main page rendering function
function renderPage(page) {
    currentPage = page;
    const main = document.getElementById('main-content');

    switch (page) {
        case 'home':
            renderHomePage(main);
            break;
        case 'games':
            renderGamesPage(main);
            break;
        case 'characters':
            renderCharactersPage(main);
            break;
        case 'timeline':
            renderTimelinePage(main);
            break;
        default:
            renderHomePage(main);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// Home Page
// ==========================================

function renderHomePage(container) {
    const featuredGames = AC_WIKI_DATA.games.slice(0, 6);

    container.innerHTML = `
        <header class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Assassin's Creed Wiki</h1>
                <p class="hero-subtitle">Nothing is true, everything is permitted</p>
            </div>
        </header>

        <section style="padding: 2rem 0;">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3 class="stat-number">${AC_WIKI_DATA.games.length}</h3>
                        <p class="stat-label">Main Games</p>
                    </div>
                    <div class="stat-card">
                        <h3 class="stat-number">${AC_WIKI_DATA.characters.length}</h3>
                        <p class="stat-label">Characters</p>
                    </div>
                    <div class="stat-card">
                        <h3 class="stat-number">${AC_WIKI_DATA.timeline.length}</h3>
                        <p class="stat-label">Timeline Events</p>
                    </div>
                </div>

                <h2 style="text-align: center; margin: 3rem 0 2rem; color: var(--color-secondary);">Featured Games</h2>
                <div class="games-grid">
                    ${featuredGames.map(game => renderGameCard(game)).join('')}
                </div>

                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn" onclick="renderPage('games')">View All Games →</button>
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// Games Page
// ==========================================

function renderGamesPage(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="container">
                <h1>All Games</h1>
                <p>Explore every title in the Assassin's Creed series</p>
            </div>
        </div>

        <section style="padding: 2rem 0;">
            <div class="container">
                <div class="filter-bar">
                    <label for="year-filter">Filter by Year:</label>
                    <select id="year-filter" class="filter-select">
                        <option value="all">All Years</option>
                    </select>
                    
                    <label for="sort-select">Sort by:</label>
                    <select id="sort-select" class="filter-select">
                        <option value="year-desc">Newest First</option>
                        <option value="year-asc">Oldest First</option>
                        <option value="title">Title (A-Z)</option>
                    </select>
                </div>

                <div id="games-container" class="games-grid">
                    ${AC_WIKI_DATA.games.map(game => renderGameCard(game)).join('')}
                </div>
            </div>
        </section>
    `;

    initGamesFilters();
}

function initGamesFilters() {
    const yearFilter = document.getElementById('year-filter');
    const sortSelect = document.getElementById('sort-select');

    // Populate year filter options
    const years = [...new Set(AC_WIKI_DATA.games.map(g => g.year))].sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Filter and sort function
    const applyFilters = () => {
        let filtered = [...AC_WIKI_DATA.games];

        // Apply year filter
        if (yearFilter.value !== 'all') {
            filtered = filtered.filter(g => g.year == yearFilter.value);
        }

        // Apply sorting
        if (sortSelect.value === 'year-desc') {
            filtered.sort((a, b) => b.year - a.year);
        } else if (sortSelect.value === 'year-asc') {
            filtered.sort((a, b) => a.year - b.year);
        } else if (sortSelect.value === 'title') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        // Display filtered games
        const container = document.getElementById('games-container');
        container.innerHTML = filtered.length > 0
            ? filtered.map(game => renderGameCard(game)).join('')
            : '<p class="no-results">No games found.</p>';
    };

    // Attach event listeners
    yearFilter.addEventListener('change', applyFilters);
    sortSelect.addEventListener('change', applyFilters);
}

// ==========================================
// Game Card Component
// ==========================================

function renderGameCard(game) {
    return `
        <div class="card" onclick="showGameDetail('${game.id}')">
            <div class="card-image">${game.icon}</div>
            <div class="card-content">
                <span class="card-year">${game.year}</span>
                <h3 class="card-title">${game.title}</h3>
                <p class="card-description">${game.description}</p>
            </div>
        </div>
    `;
}

// ==========================================
// Game Detail Page
// ==========================================

function showGameDetail(gameId) {
    const game = AC_WIKI_DATA.games.find(g => g.id === gameId);
    if (!game) return;

    const relatedCharacters = AC_WIKI_DATA.characters.filter(c => c.gameId === gameId);
    const main = document.getElementById('main-content');

    // Close search results
    document.getElementById('search-results').classList.remove('active');
    document.getElementById('search-input').value = '';

    main.innerHTML = `
        <div class="game-detail">
            <div class="game-detail-hero">
                <div class="container">
                    <div class="game-detail-hero-content">
                        <h1 class="game-detail-title">${game.title}</h1>
                        <p class="game-detail-subtitle">${game.setting}</p>
                    </div>
                </div>
            </div>
            
            <div class="game-detail-content">
                <div class="container">
                    <div class="game-detail-grid">
                        <div>
                            <h2>About the Game</h2>
                            <p style="margin-bottom: 1rem;">${game.description}</p>
                            ${game.longDescription ? `<p style="margin-bottom: 2rem; color: var(--color-text);">${game.longDescription}</p>` : ''}
                            
                            ${relatedCharacters.length > 0 ? `
                                <h2 style="margin: 2rem 0 1rem;">Characters from this game</h2>
                                <div class="characters-grid">
                                    ${relatedCharacters.map(char => renderCharacterCard(char, false)).join('')}
                                </div>
                            ` : ''}
                        </div>
                        
                        <aside>
                            <dl class="game-info-list">
                                <dt>Release Year</dt>
                                <dd>${game.year}</dd>
                                
                                <dt>Setting</dt>
                                <dd>${game.setting}</dd>
                                
                                <dt>Protagonist</dt>
                                <dd>${game.protagonist}</dd>
                                
                                <dt>Developer</dt>
                                <dd>${game.developer}</dd>
                                
                                <dt>Platforms</dt>
                                <dd>${game.platforms.join(', ')}</dd>
                            </dl>
                        </aside>
                    </div>
                    
                    <button class="btn" onclick="renderPage('games')">← Back to All Games</button>
                </div>
            </div>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Continue to pages.js Part 2...