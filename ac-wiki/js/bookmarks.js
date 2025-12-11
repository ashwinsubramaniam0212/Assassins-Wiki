/**
 * BOOKMARKS MODULE
 * Handles saving and retrieving user bookmarks using localStorage
 */

// Key for localStorage
var BOOKMARKS_KEY = 'ac_wiki_bookmarks';

/**
 * Get all bookmarks from localStorage
 * @returns {Array} Array of bookmark objects
 */
function getBookmarks() {
    try {
        var bookmarks = localStorage.getItem(BOOKMARKS_KEY);
        return bookmarks ? JSON.parse(bookmarks) : [];
    } catch (error) {
        console.error('Error reading bookmarks:', error);
        return [];
    }
}

/**
 * Save bookmarks to localStorage
 * @param {Array} bookmarks - Array of bookmark objects to save
 */
function saveBookmarks(bookmarks) {
    try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error('Error saving bookmarks:', error);
    }
}

/**
 * Add a bookmark
 * @param {string} id - The ID of the item to bookmark
 * @param {string} type - Either 'game' or 'character'
 */
function addBookmark(id, type) {
    var bookmarks = getBookmarks();
    
    // Check if already bookmarked
    var exists = bookmarks.some(function(b) {
        return b.id === id && b.type === type;
    });
    
    if (!exists) {
        bookmarks.push({
            id: id,
            type: type,
            timestamp: Date.now()
        });
        saveBookmarks(bookmarks);
    }
}

/**
 * Remove a bookmark
 * @param {string} id - The ID of the item to remove
 */
function removeBookmark(id) {
    var bookmarks = getBookmarks();
    var filtered = bookmarks.filter(function(b) {
        return b.id !== id;
    });
    saveBookmarks(filtered);
}

/**
 * Check if a game is bookmarked
 * @param {string} gameId - The game ID to check
 * @returns {boolean} True if bookmarked
 */
function isGameBookmarked(gameId) {
    var bookmarks = getBookmarks();
    return bookmarks.some(function(b) {
        return b.id === gameId && b.type === 'game';
    });
}

/**
 * Check if a character is bookmarked
 * @param {string} characterId - The character ID to check
 * @returns {boolean} True if bookmarked
 */
function isCharacterBookmarked(characterId) {
    var bookmarks = getBookmarks();
    return bookmarks.some(function(b) {
        return b.id === characterId && b.type === 'character';
    });
}

/**
 * Get all bookmarked games
 * @returns {Array} Array of game IDs
 */
function getBookmarkedGames() {
    var bookmarks = getBookmarks();
    return bookmarks
        .filter(function(b) { return b.type === 'game'; })
        .map(function(b) { return b.id; });
}

/**
 * Get all bookmarked characters
 * @returns {Array} Array of character IDs
 */
function getBookmarkedCharacters() {
    var bookmarks = getBookmarks();
    return bookmarks
        .filter(function(b) { return b.type === 'character'; })
        .map(function(b) { return b.id; });
}