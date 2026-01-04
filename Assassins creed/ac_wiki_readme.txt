# Assassin's Creed Wiki - Complete Project

A fully functional static website showcasing Assassin's Creed games, characters, and timeline with enhanced Wikipedia information and working search functionality.

## 📁 Project Structure

```
ac-wiki/
├── index.html
├── css/
│   ├── style.css          # Base styles and variables
│   ├── components.css     # Component-specific styles
│   └── responsive.css     # Mobile/tablet breakpoints
├── js/
│   ├── data.js           # Game and character data
│   ├── navigation.js     # Navigation functionality
│   ├── search.js         # Search with debounce
│   ├── pages.js          # Page rendering functions
│   └── main.js           # Main initialization
└── README.md
```

## ✨ Features

- ✅ **Working Search Bar** - Real-time search with 300ms debounce
- ✅ **Enhanced Data** - Wikipedia-sourced information
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Filter & Sort** - Games by year, characters by role/game
- ✅ **Game Details** - Full information + related characters
- ✅ **Timeline** - Chronological release history
- ✅ **Smooth Navigation** - Mobile hamburger menu
- ✅ **Back to Top** - Smooth scroll button

## 🚀 Quick Start

### Option 1: Run Locally (No Server Needed)

1. Download all files maintaining the folder structure
2. Open `index.html` in your browser
3. Done! The site works immediately

### Option 2: Use Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 📥 How to Download Files

1. Click the download icon on each artifact above
2. Create the folder structure as shown
3. Save each file in its correct location

## 🎨 Customization

### Change Colors

Edit `css/style.css`:

```css
:root {
    --color-primary: #C9A961;    /* Gold */
    --color-secondary: #1A1A1A;  /* Dark */
    --color-accent: #8B0000;     /* Red */
}
```

### Add More Games

Edit `js/data.js` and add to the `games` array:

```javascript
{
    id: "ac_mirage",
    title: "Assassin's Creed Mirage",
    year: 2023,
    // ... more properties
}
```

### Modify Search Behavior

Edit `js/search.js`:

```javascript
// Change debounce delay (default: 300ms)
searchTimeout = setTimeout(() => {
    performSearch(query);
}, 300);
```

## 🔧 File Descriptions

### HTML
- **index.html** - Main HTML structure with navigation and footer

### CSS
- **style.css** - Base styles, navigation, hero, buttons, footer
- **components.css** - Cards, filters, game details, timeline, stats
- **responsive.css** - Mobile, tablet, desktop breakpoints

### JavaScript
- **data.js** - All game/character data (10 games, 14 characters)
- **navigation.js** - Navigation links and mobile menu
- **search.js** - Search functionality with debounce
- **pages.js** - Home, games, characters, timeline rendering
- **main.js** - Initialization and back-to-top button

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 Important Notes

### For pages.js
⚠️ **IMPORTANT**: `pages.js` is split into TWO parts:
1. Download **pages.js - Part 1**
2. Download **pages.js - Part 2**
3. Copy ALL content from Part 2 and **APPEND** it to Part 1
4. Save as a single `js/pages.js` file

### File Loading Order
The JavaScript files must load in this order (already set in index.html):
```html
<script src="js/data.js"></script>
<script src="js/navigation.js"></script>
<script src="js/search.js"></script>
<script src="js/pages.js"></script>
<script src="js/main.js"></script>
```

## 🐛 Troubleshooting

**Search not working?**
- Make sure all JS files are in the `js/` folder
- Check browser console (F12) for errors
- Verify files are loaded in correct order

**Styles not applied?**
- Ensure all CSS files are in the `css/` folder
- Check file paths in index.html
- Clear browser cache (Ctrl+F5)

**Pages not rendering?**
- Verify pages.js contains BOTH Part 1 and Part 2 content
- Check that data.js is loaded first
- Open console to see any JavaScript errors

## 📱 Responsive Breakpoints

- Mobile: 576px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large Desktop: 1440px and above

## 🎓 Learning Objectives

This project demonstrates:
- Semantic HTML structure
- CSS Grid and Flexbox layouts
- Vanilla JavaScript DOM manipulation
- Event handling and debouncing
- Responsive design patterns
- Component-based architecture
- Data-driven rendering
- Search algorithms
- Filter and sort functionality

## 📄 License

Educational project. Assassin's Creed is a trademark of Ubisoft Entertainment.

## 🤝 Contributing

This is a student project. Feel free to:
- Add more games/characters
- Improve the design
- Add new features
- Fix bugs

## ⭐ Credits

- Game information from Wikipedia
- Design inspired by Assassin's Creed aesthetics
- Built with vanilla HTML, CSS, and JavaScript

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Verify all files are in correct folders
3. Check browser console for errors
4. Make sure pages.js includes both parts

---

**Enjoy exploring the Assassin's Creed universe!** 🗡️