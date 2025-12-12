function renderGameCard(game) {
    var imageUrl = game.image || 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(game.title);
    
    return `
        <div class="game-card">
            <img src="${imageUrl}" 
                 alt="${game.title} cover art" 
                 class="game-card-image"
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="game-card-content">
                <span class="game-card-year">${game.year}</span>
                <h3 class="game-card-title">${game.title}</h3>
                <p class="game-card-description">${game.description}</p>
                <a href="game-detail.html?id=${game.id}" class="game-card-link">
                    View Details →
                </a>
            </div>
        </div>
    `;
}

function renderCharacterCard(character, gameTitle) {
    var imageUrl = character.image || 'https://via.placeholder.com/250x250?text=' + encodeURIComponent(character.name);
    var gameInfo = gameTitle ? `<p class="character-card-game">From: ${gameTitle}</p>` : '';
    
    return `
        <div class="character-card">
            <img src="${imageUrl}" 
                 alt="${character.name}" 
                 class="character-card-image"
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/250x250?text=No+Image'">
            <div class="character-card-content">
                <h3 class="character-card-name">${character.name}</h3>
                <span class="character-card-role">${character.role}</span>
                ${gameInfo}
                <p class="character-card-description">${character.description}</p>
            </div>
        </div>
    `;
}

function renderGameDetail(game, relatedCharacters) {
    var imageUrl = game.image || 'https://via.placeholder.com/1200x400?text=' + encodeURIComponent(game.title);
    var platforms = game.platforms.join(', ');
    
    var charactersSection = '';
    if (relatedCharacters && relatedCharacters.length > 0) {
        var characterCards = relatedCharacters.map(function(char) {
            return renderCharacterCard(char);
        }).join('');
        
        charactersSection = `
            <div class="related-characters">
                <h2>Characters from this game</h2>
                <div class="related-characters-grid">
                    ${characterCards}
                </div>
            </div>
        `;
    }
    
    return `
        <article class="game-detail">
            <div class="game-detail-hero" style="background-image: url('${imageUrl}');">
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
                        <div class="game-detail-main">
                            <h2>About the Game</h2>
                            <p>${game.description}</p>
                            
                            ${charactersSection}
                        </div>
                        
                        <aside class="game-detail-sidebar">
                            <dl class="game-info-list">
                                <dt>Release Year</dt>
                                <dd>${game.year}</dd>
                                
                                <dt>Setting</dt>
                                <dd>${game.setting}</dd>
                                
                                <dt>Protagonist</dt>
                                <dd>${game.protagonist}</dd>
                                
                                <dt>Platforms</dt>
                                <dd>${platforms}</dd>
                            </dl>
                            
                            <button id="bookmark-btn" class="bookmark-btn" aria-label="Bookmark this game">
                                ☆ Bookmark
                            </button>
                        </aside>
                    </div>
                    
                    <a href="games.html" class="btn">← Back to All Games</a>
                </div>
            </div>
        </article>
    `;
}

function renderSearchResult(item, type) {
    if (type === 'game') {
        return `
            <a href="game-detail.html?id=${item.id}" class="search-result-item">
                <strong>${item.title}</strong> (${item.year})
                <br>
                <small>Game</small>
            </a>
        `;
    } else if (type === 'character') {
        return `
            <div class="search-result-item">
                <strong>${item.name}</strong>
                <br>
                <small>Character - ${item.role}</small>
            </div>
        `;
    }
    return '';
}
