/* Dark Mode Functionality for Individual Pages */

// Check for theme parameter in URL (for cross-domain sync from worksbynrfz.com)
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    if (themeParam && ['light', 'dark', 'system'].includes(themeParam)) {
        localStorage.setItem('theme-preference', themeParam);
    }
})();

// Use window properties if they exist from initial script, otherwise create them
if (typeof window._themePreference === 'undefined') {
    window._themePreference = localStorage.getItem('theme-preference') || 'system';
}
if (typeof window._prefersDark === 'undefined') {
    window._prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Determine if dark mode should be active
function shouldBeDark() {
    if (window._themePreference === 'dark') return true;
    if (window._themePreference === 'light') return false;
    if (window._themePreference === 'system') return window._prefersDark;
    return window._prefersDark; // Default to system preference
}

// Apply theme on page load
if (shouldBeDark()) {
    document.body.classList.add('dark-mode');
    updateThemeIcon('dark');
    updateHrefForDarkMode();
} else {
    updateThemeIcon('light');
}

// Listen to theme toggle clicks
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function cycleTheme() {
        const themes = ['light', 'dark', 'system'];
        const currentTheme = window._themePreference || 'system';
        const currentIndex = themes.indexOf(currentTheme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        applyTheme(nextTheme);
    }
    
    function applyTheme(preference) {
        localStorage.setItem('theme-preference', preference);
        window._themePreference = preference;
        
        if (preference === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcon('dark');
        } else if (preference === 'light') {
            document.body.classList.remove('dark-mode');
            updateThemeIcon('light');
        } else if (preference === 'system') {
            if (window._prefersDark) {
                document.body.classList.add('dark-mode');
                updateThemeIcon('dark');
            } else {
                document.body.classList.remove('dark-mode');
                updateThemeIcon('light');
            }
        }
    }
    
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', (e) => {
            e.preventDefault();
            cycleTheme();
        });
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', (e) => {
            e.preventDefault();
            cycleTheme();
        });
    }
});

// Follow system theme changes when set to 'system' preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    window._prefersDark = e.matches;
    if (localStorage.getItem('theme-preference') === 'system' || localStorage.getItem('theme-preference') === null) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            updateThemeIcon('dark');
        } else {
            document.body.classList.remove('dark-mode');
            updateThemeIcon('light');
        }
    }
});

// Get both toggle buttons (for backward compatibility with mobile views)
const toggleButtonDesktop = document.getElementById('dark-mode-toggle-desktop');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');

// Function to update the theme icon and text with animation
function updateThemeIcon(theme) {
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const themeTextDesktop = document.getElementById('theme-text-desktop');
    const themeTextMobile = document.getElementById('theme-text-mobile');
    const preference = window._themePreference || 'system';

    // Add animation class to both icons
    if (themeIconDesktop) themeIconDesktop.classList.add('animate');
    if (themeIconMobile) themeIconMobile.classList.add('animate');

    // Update the icon based on the theme
    if (theme === 'dark') {
        if (themeIconDesktop) {
            themeIconDesktop.classList.remove('fa-sun-bright');
            themeIconDesktop.classList.add('fa-moon-stars');
        }
        if (themeIconMobile) {
            themeIconMobile.classList.remove('fa-sun-bright');
            themeIconMobile.classList.add('fa-moon-stars');
        }
    } else {
        if (themeIconDesktop) {
            themeIconDesktop.classList.remove('fa-moon-stars');
            themeIconDesktop.classList.add('fa-sun-bright');
        }
        if (themeIconMobile) {
            themeIconMobile.classList.remove('fa-moon-stars');
            themeIconMobile.classList.add('fa-sun-bright');
        }
    }
    
    // Update display text
    let displayText = 'Display: ';
    if (preference === 'light') {
        displayText += 'Light';
    } else if (preference === 'dark') {
        displayText += 'Dark';
    } else if (preference === 'system') {
        displayText += 'Follow System';
    }
    
    if (themeTextDesktop) themeTextDesktop.textContent = displayText;
    if (themeTextMobile) themeTextMobile.textContent = displayText;

    // Remove the animation class after the animation ends
    setTimeout(() => {
        if (themeIconDesktop) themeIconDesktop.classList.remove('animate');
        if (themeIconMobile) themeIconMobile.classList.remove('animate');
    }, 300); // Match the duration of the CSS transition
}



function updateHrefForDarkMode() {
    /* Existing logic for updating banners, images, and videos */
    const coverSect = document.getElementById('cv-img');
    const eiaSect = document.getElementById('eia-img');

    const tf_link = document.getElementById('tf');
    const tf_img = document.getElementById('tf-img');

    const pl_link = document.getElementById('pl');
    const pl_img = document.getElementById('pl-img');

    const pl2_link = document.getElementById('pl2');
    const pl2_img = document.getElementById('pl2-img');

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

    const es_link = document.getElementById('es');
    const es_img = document.getElementById('es-img');

    const cp_link = document.getElementById('cp');
    const cp_img = document.getElementById('cp-img');

    const ls_link = document.getElementById('ls');
    const ls_img = document.getElementById('ls-img');

    const wf1_link = document.getElementById('wf1');
    const wf1_img = document.getElementById('wf1-img');

    const wf2_link = document.getElementById('wf2');
    const wf2_img = document.getElementById('wf2-img');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-dark.png')";
        if (eiaSect) eiaSect.style.backgroundImage = "url('./img/eia-dark.png')";

        if (tf_link) tf_link.href = './img/typeface-dark.png';
        if (tf_img) tf_img.src = './img/typeface-dark.png';

        if (pl_link) pl_link.href = './img/palettes-dark.png';
        if (pl_img) pl_img.src = './img/palettes-dark.png';

        if (pl2_link) pl2_link.href = './img/palettes-dark2.png';
        if (pl2_img) pl2_img.src = './img/palettes-dark2.png';

        if (evo_link) evo_link.href = './img/evo-dark.png';
        if (evo_img) evo_img.src = './img/evo-dark.png';

        if (es_link) es_link.href = './img/es-dark.png';
        if (es_img) es_img.src = './img/es-dark.png';

        if (cp_link) cp_link.href = './img/cp-dark.png';
        if (cp_img) cp_img.src = './img/cp-dark.png';

        if (ls_link) ls_link.href = './img/ls-dark.png';
        if (ls_img) ls_img.src = './img/ls-dark.png';

        if (wf1_link) wf1_link.href = './img/wf1-dark.png';
        if (wf1_img) wf1_img.src = './img/wf1-dark.png';

        if (wf2_link) wf2_link.href = './img/wf2-dark.png';
        if (wf2_img) wf2_img.src = './img/wf2-dark.png';


    } else {
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-light.png')";
        if (eiaSect) eiaSect.style.backgroundImage = "url('./img/eia-light.png')";

        if (tf_link) tf_link.href = './img/typeface-light.png';
        if (tf_img) tf_img.src = './img/typeface-light.png';

        if (pl_link) pl_link.href = './img/palettes-light.png';
        if (pl_img) pl_img.src = './img/palettes-light.png';

        if (pl2_link) pl2_link.href = './img/palettes-light2.png';
        if (pl2_img) pl2_img.src = './img/palettes-light2.png';

        if (evo_link) evo_link.href = './img/evo-light.png';
        if (evo_img) evo_img.src = './img/evo-light.png';

        if (es_link) es_link.href = './img/es-light.png';
        if (es_img) es_img.src = './img/es-light.png';

        if (cp_link) cp_link.href = './img/cp-light.png';
        if (cp_img) cp_img.src = './img/cp-light.png';

        if (ls_link) ls_link.href = './img/ls-light.png';
        if (ls_img) ls_img.src = './img/ls-light.png';

        if (wf1_link) wf1_link.href = './img/wf1-light.png';
        if (wf1_img) wf1_img.src = './img/wf1-light.png';

        if (wf2_link) wf2_link.href = './img/wf2-light.png';
        if (wf2_img) wf2_img.src = './img/wf2-light.png';
    }
}


// Update the scroll indicator width on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-indicator').style.width = scrollPercentage + '%';
});

// Update the scroll indicator width on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.min((scrollTop / docHeight) * 100, 100); // Cap at 100%
    document.getElementById('scroll-indicator').style.width = scrollPercentage + '%';
});