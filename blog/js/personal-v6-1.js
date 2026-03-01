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

// Follow system theme changes when set to 'system' preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    window._prefersDark = e.matches;
    if (localStorage.getItem('theme-preference') === 'system' || localStorage.getItem('theme-preference') === null) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            updateThemeIcon('dark');
            updateHrefForDarkMode();
        } else {
            document.body.classList.remove('dark-mode');
            updateThemeIcon('light');
            updateHrefForDarkMode();
        }
    }
});

// Listen to theme toggle clicks
document.addEventListener('DOMContentLoaded', function () {
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

        updateHrefForDarkMode();
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

// Get both toggle buttons (for backward compatibility)
const toggleButtonDesktop = document.getElementById('dark-mode-toggle-desktop');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');

// Function to update the theme icon with animation
function updateThemeIcon(theme) {
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const themeTextDesktop = document.getElementById('theme-text-desktop');
    const themeTextMobile = document.getElementById('theme-text-mobile');
    const preference = window._themePreference || 'system';
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
    /* Banners */
    const pv6Page = document.getElementById('cv-pv6');

    /* Images */
    const overview_link = document.getElementById('overview');
    const overview_img = document.getElementById('overview-img');

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

    const colour_sch = document.getElementById('colour-sch');
    const colour_sch_img = document.getElementById('colour-sch-img');

    const nb1 = document.getElementById('nb1');
    const nb1_img = document.getElementById('nb1-img');

    const nb2 = document.getElementById('nb2');
    const nb2_img = document.getElementById('nb2-img');

    const hp1 = document.getElementById('hp1');
    const hp1_img = document.getElementById('hp1-img');

    const hp2 = document.getElementById('hp2');
    const hp2_img = document.getElementById('hp2-img');

    const bn1 = document.getElementById('bn1');
    const bn1_img = document.getElementById('bn1-img');

    const bn2 = document.getElementById('bn2');
    const bn2_img = document.getElementById('bn2-img');


    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/FWEMbMk.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/MNbztKH.png';
        overview_img.src = 'https://i.imgur.com/MNbztKH.png';

        evo_link.href = 'https://i.imgur.com/cELOBDE.png';
        evo_img.src = 'https://i.imgur.com/cELOBDE.png';

        colour_sch.href = 'https://i.imgur.com/dOlE3hY.png';
        colour_sch_img.src = 'https://i.imgur.com/dOlE3hY.png';

        nb1.href = 'https://i.imgur.com/M7ZnhKw.png';
        nb1_img.src = 'https://i.imgur.com/M7ZnhKw.png';

        nb2.href = 'https://i.imgur.com/dIMxdDr.png';
        nb2_img.src = 'https://i.imgur.com/dIMxdDr.png';

        hp1.href = 'https://i.imgur.com/DgsQWNs.png';
        hp1_img.src = 'https://i.imgur.com/DgsQWNs.png';

        hp2.href = 'https://i.imgur.com/G21ClAr.png';
        hp2_img.src = 'https://i.imgur.com/G21ClAr.png';

        bn1.href = 'https://i.imgur.com/aXEYFHu.png';
        bn1_img.src = 'https://i.imgur.com/aXEYFHu.png';

        bn2.href = 'https://i.imgur.com/z8Emx8c.png';
        bn2_img.src = 'https://i.imgur.com/z8Emx8c.png';

    } else {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/Fr1urKW.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/AWtMgNN.png';
        overview_img.src = 'https://i.imgur.com/AWtMgNN.png';

        evo_link.href = 'https://i.imgur.com/tpR0bCQ.png';
        evo_img.src = 'https://i.imgur.com/tpR0bCQ.png';

        nb1.href = 'https://i.imgur.com/rDKZwWk.png';
        nb1_img.src = 'https://i.imgur.com/rDKZwWk.png';

        nb2.href = 'https://i.imgur.com/rDKZwWk.png';
        nb2_img.src = 'https://i.imgur.com/rDKZwWk.png';

        hp1.href = 'https://i.imgur.com/26Sji8H.png';
        hp1_img.src = 'https://i.imgur.com/26Sji8H.png';

        hp2.href = 'https://i.imgur.com/xQo48lU.png';
        hp2_img.src = 'https://i.imgur.com/xQo48lU.png';

        bn1.href = 'https://i.imgur.com/ILVgJTV.png';
        bn1_img.src = 'https://i.imgur.com/ILVgJTV.png';

        bn2.href = 'https://i.imgur.com/yoEhQpW.png';
        bn2_img.src = 'https://i.imgur.com/yoEhQpW.png';

        vid1.load();


    }
}

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});