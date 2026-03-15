// i18n configuration and initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing i18n...');
    
    // Initialize i18next
    i18next
        .use(i18nextHttpBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
            fallbackLng: 'en',
            lng: localStorage.getItem('selectedLanguage') || 'en',
            debug: true, // Enable debug for troubleshooting
            backend: {
                loadPath: 'locales/{{lng}}/translation.json'
            },
            interpolation: {
                escapeValue: false // React already escapes values
            }
        }, function(err, t) {
            if (err) {
                console.error('i18n initialization error:', err);
                return;
            }
            
            console.log('i18n initialized successfully, current language:', i18next.language);
            
            // Initialize translations
            updateContent();
            
            // Set up language selector
            const languageSelector = document.getElementById('languageSelector');
            if (languageSelector) {
                console.log('Setting language selector to:', i18next.language);
                languageSelector.value = i18next.language;
                languageSelector.addEventListener('change', function() {
                    const newLang = this.value;
                    console.log('Changing language to:', newLang);
                    localStorage.setItem('selectedLanguage', newLang);
                    i18next.changeLanguage(newLang, function(err, t) {
                        if (err) {
                            console.error('Language change error:', err);
                            return;
                        }
                        console.log('Language changed successfully to:', i18next.language);
                        updateContent();
                    });
                });
            } else {
                console.error('Language selector element not found!');
            }
        });

    function updateContent() {
        console.log('Updating content with language:', i18next.language);
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Found', elements.length, 'elements to translate');
        
        elements.forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            if (key) {
                // Handle special cases like [placeholder]
                if (key.startsWith('[')) {
                    const match = key.match(/\[(\w+)\](.+)/);
                    if (match) {
                        const attr = match[1];
                        const transKey = match[2];
                        const translation = i18next.t(transKey);
                        console.log('Setting', attr, 'to:', translation);
                        element.setAttribute(attr, translation);
                    }
                } else {
                    const translation = i18next.t(key);
                    console.log('Translating key', key, 'to:', translation);
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation;
                    } else if (element.tagName === 'TITLE') {
                        element.textContent = translation;
                    } else {
                        element.innerHTML = translation;
                    }
                }
            }
        });
    }
});