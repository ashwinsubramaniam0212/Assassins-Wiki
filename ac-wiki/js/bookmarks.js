var BOOKMARKS_KEY = 'ac_wiki_bookmarks';

function getBookmarks() {
    try {
        var bookmarks = localStorage.getItem(BOOKMARKS_KEY);
        return bookmarks ? JSON.parse(bookmarks) : [];
    } catch (error) {
        console.error('Error reading bookmarks:', error);
        return [];
    }
}

function saveBookmarks(bookmarks) {
    try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error('Error saving bookmarks:', error);
    }
}

function addBookmark(id, type) {
    var bookmarks = getBookmarks();
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

function removeBookmark(id) {
    var bookmarks = getBookmarks();
    var filtered = bookmarks.filter(function(b) {
        return b.id !== id;
    });
    saveBookmarks(filtered);
}

function isGameBookmarked(gameId) {
    var bookmarks = getBookmarks();
    return bookmarks.some(function(b) {
        return b.id === gameId && b.type === 'game';
    });
}

function isCharacterBookmarked(characterId) {
    var bookmarks = getBookmarks();
    return bookmarks.some(function(b) {
        return b.id === characterId && b.type === 'character';
    });
}

function getBookmarkedGames() {
    var bookmarks = getBookmarks();
    return bookmarks
        .filter(function(b) { return b.type === 'game'; })
        .map(function(b) { return b.id; });
}

function getBookmarkedCharacters() {
    var bookmarks = getBookmarks();
    return bookmarks
        .filter(function(b) { return b.type === 'character'; })
        .map(function(b) { return b.id; });
}
