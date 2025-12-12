let cachedData = null;

function loadData() {
    if (cachedData) {
        return Promise.resolve(cachedData);
    }
    
    return fetch('data/ac_wiki.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to load data: ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            cachedData = data;
            return data;
        })
        .catch(function(error) {
            console.error('Error loading data:', error);
            throw error;
        });
}

function getGameById(gameId) {
    return loadData()
        .then(function(data) {
            return data.games.find(function(game) {
                return game.id === gameId;
            }) || null;
        });
}

function getCharacterById(characterId) {
    return loadData()
        .then(function(data) {
            return data.characters.find(function(char) {
                return char.id === characterId;
            }) || null;
        });
}

function getCharactersByGame(gameId) {
    return loadData()
        .then(function(data) {
            return data.characters.filter(function(char) {
                return char.gameId === gameId;
            });
        });
}

function searchContent(query) {
    return loadData()
        .then(function(data) {
            var lowerQuery = query.toLowerCase();
            
            var games = data.games.filter(function(game) {
                return game.title.toLowerCase().includes(lowerQuery) ||
                       game.description.toLowerCase().includes(lowerQuery);
            });
            
            var characters = data.characters.filter(function(char) {
                return char.name.toLowerCase().includes(lowerQuery) ||
                       char.description.toLowerCase().includes(lowerQuery);
            });
            
            return {
                games: games,
                characters: characters
            };
        });
}
