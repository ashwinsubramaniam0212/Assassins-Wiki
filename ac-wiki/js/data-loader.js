/**
 * DATA LOADER MODULE
 * Handles loading and caching of JSON data
 */

// Cache to store loaded data (avoid multiple fetches)
let cachedData = null;

/**
 * Load data from JSON file
 * Returns a promise that resolves to the data object
 */
function loadData() {
    // If we already have the data, return it immediately
    if (cachedData) {
        return Promise.resolve(cachedData);
    }
    
    // Fetch the JSON file
    return fetch('data/ac_wiki.json')
        .then(function(response) {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Failed to load data: ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            // Cache the data for future use
            cachedData = data;
            return data;
        })
        .catch(function(error) {
            console.error('Error loading data:', error);
            // Re-throw the error so calling code can handle it
            throw error;
        });
}

/**
 * Get a specific game by ID
 * @param {string} gameId - The ID of the game to find
 * @returns {Promise} Promise that resolves to the game object or null
 */
function getGameById(gameId) {
    return loadData()
        .then(function(data) {
            return data.games.find(function(game) {
                return game.id === gameId;
            }) || null;
        });
}

/**
 * Get a specific character by ID
 * @param {string} characterId - The ID of the character to find
 * @returns {Promise} Promise that resolves to the character object or null
 */
function getCharacterById(characterId) {
    return loadData()
        .then(function(data) {
            return data.characters.find(function(char) {
                return char.id === characterId;
            }) || null;
        });
}

/**
 * Get characters for a specific game
 * @param {string} gameId - The game ID to filter by
 * @returns {Promise} Promise that resolves to array of characters
 */
function getCharactersByGame(gameId) {
    return loadData()
        .then(function(data) {
            return data.characters.filter(function(char) {
                return char.gameId === gameId;
            });
        });
}

/**
 * Search games and characters by name
 * @param {string} query - The search query
 * @returns {Promise} Promise that resolves to search results object
 */
function searchContent(query) {
    return loadData()
        .then(function(data) {
            var lowerQuery = query.toLowerCase();
            
            // Search games
            var games = data.games.filter(function(game) {
                return game.title.toLowerCase().includes(lowerQuery) ||
                       game.description.toLowerCase().includes(lowerQuery);
            });
            
            // Search characters
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