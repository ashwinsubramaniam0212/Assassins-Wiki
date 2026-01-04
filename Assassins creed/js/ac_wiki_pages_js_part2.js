// ==========================================
// Assassin's Creed Wiki - Page Rendering (Part 2)
// Copy this content and APPEND it to pages.js Part 1
// ==========================================

// ==========================================
// Characters Page
// ==========================================

function renderCharactersPage(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="container">
                <h1>Characters</h1>
                <p>Meet the legendary assassins, allies, and enemies</p>
            </div>
        </div>

        <section style="padding: 2rem 0;">
            <div class="container">
                <div class="filter-bar">
                    <label for="game-filter">Filter by Game:</label>
                    <select id="game-filter" class="filter-select">
                        <option value="all">All Games</option>
                    </select>
                    
                    <label for="role-filter">Filter by Role:</label>
                    <select id="role-filter" class="filter-select">
                        <option value="all">All Roles</option>
                        <option value="Protagonist">Protagonist</option>
                        <option value="Ally">Ally</option>
                        <option value="Antagonist">Antagonist</option>
                        <option value="Modern Protagonist">Modern Protagonist</option>
                    </select>
                </div>

                <div id="characters-container" class="characters-grid">
                    ${AC_WIKI_DATA.characters.map(char => renderCharacterCard(char, true)).join('')}
                </div>
            </div>
        </section>
    `;

    initCharactersFilters();
}

function initCharactersFilters() {
    const gameFilter = document.getElementById('game-filter');
    const roleFilter = document.getElementById('role-filter');

    // Populate game filter options
    AC_WIKI_DATA.games.forEach(game => {
        const option = document.createElement('option');
        option.value = game.id;
        option.textContent = game.title;
        gameFilter.appendChild(option);
    });

    // Filter function
    const applyFilters = () => {
        let filtered = [...AC_WIKI_DATA.characters];

        // Apply game filter
        if (gameFilter.value !== 'all') {
            filtered = filtered.filter(c => c.gameId === gameFilter.value);
        }

        // Apply role filter
        if (roleFilter.value !== 'all') {
            filtered = filtered.filter(c => c.role === roleFilter.value);
        }

        // Display filtered characters
        const container = document.getElementById('characters-container');
        container.innerHTML = filtered.length > 0
            ? filtered.map(char => renderCharacterCard(char, true)).join('')
            : '<p class="no-results">No characters found.</p>';
    };

    // Attach event listeners
    gameFilter.addEventListener('change', applyFilters);
    roleFilter.addEventListener('change', applyFilters);
}

// ==========================================
// Character Card Component
// ==========================================

function renderCharacterCard(character, showGame) {
    const game = AC_WIKI_DATA.games.find(g => g.id === character.gameId);
    return `
        <div class="card">
            <div class="card-image">${character.icon}</div>
            <div class="card-content">
                <h3 class="card-title">${character.name}</h3>
                <span class="card-role">${character.role}</span>
                ${showGame && game ? `<p style="font-size: 0.875rem; color: var(--color-primary); margin: 0.5rem 0;">From: ${game.title}</p>` : ''}
                <p class="card-description">${character.description}</p>
            </div>
        </div>
    `;
}

// ==========================================
// Timeline Page
// ==========================================

function renderTimelinePage(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="container">
                <h1>Release Timeline</h1>
                <p>The chronological history of Assassin's Creed games</p>
            </div>
        </div>

        <section style="padding: 2rem 0;">
            <div class="container">
                <div class="timeline">
                    ${AC_WIKI_DATA.timeline.map((event, index) => `
                        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                            <div class="timeline-content">
                                <div class="timeline-year">${event.year}</div>
                                <h3 style="color: var(--color-secondary); margin-bottom: 0.5rem;">${event.event}</h3>
                                ${event.description ? `<p style="font-size: 0.875rem; color: var(--color-text); margin-top: 0.5rem;">${event.description}</p>` : ''}
                                <span class="timeline-badge">${event.type}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}