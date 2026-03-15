# Human Alignment Network - Multilingual Version (Fixed)

This is the fixed multilingual version of the Human Alignment Network project with working language switching functionality.

## Features

- **Complete translation** of all website content
- **4 supported languages**: English, Chinese (Simplified), Japanese, Korean
- **Working language detection** and switching
- **Debug logging** enabled for troubleshooting
- **Automatic language detection** based on browser preferences
- **Manual language switching** via dropdown selector
- **Persistent language preference** saved in localStorage
- **Responsive design** that works on all devices
- **Zero server dependencies** - pure static site

## Debug Information

This version includes debug logging to help identify any issues:
- Console logs for i18n initialization
- Language change events
- Translation updates
- Error handling

Check the browser console (F12) for detailed logs if issues persist.

## Technical Implementation

- Uses **i18next** library with HTTP backend
- **JSON-based translation files** organized by language
- **Client-side rendering** with no build step required
- **Lightweight** - adds minimal overhead to original site
- **Compatible** with existing GitHub Pages deployment

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start

# Visit http://localhost:3000 to test
```

## Deployment

This multilingual version can be deployed directly to GitHub Pages:

```bash
# Deploy to GitHub Pages
npm run deploy
```

The site will be available at: https://savior-li.github.io/human-alignment-network/

## Adding More Languages

To add additional languages:

1. Create a new directory in `locales/` (e.g., `locales/fr/`)
2. Copy the English translation file and translate all values
3. Add the new language option to the language selector in `index.html`
4. Test the new language locally

## Original Project

Based on the original Human Alignment Network project by savior-li:
- Repository: https://github.com/savior-li/human-alignment-network
- Live site: https://savior-li.github.io/human-alignment-network/