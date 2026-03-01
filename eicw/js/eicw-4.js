/* Dark Mode Functionality for Individual Pages */

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
    /* Banners */
    const coverSect = document.getElementById('cui-img');

    /* Images */
    const lcd1_link = document.getElementById('lcd1');
    const lcd1_img = document.getElementById('lcd1-img');

    const lcd2_link = document.getElementById('lcd2');
    const lcd2_img = document.getElementById('lcd2-img');

    const lcd3_link = document.getElementById('lcd3');
    const lcd3_img = document.getElementById('lcd3-img');

    const bcr1_link = document.getElementById('bcr1');
    const bcr1_img = document.getElementById('bcr1-img');

    const bcr2_link = document.getElementById('bcr2');
    const bcr2_img = document.getElementById('bcr2-img');

    const bcr4_link = document.getElementById('bcr4');
    const bcr4_img = document.getElementById('bcr4-img');

    const cddbp_link = document.getElementById('cddbp-lcd');
    const cddbp_img = document.getElementById('cddbp-lcd-img');


    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-eicw-4-dark.png')";


        /* Images */
        if (lcd1_link) lcd1_link.href = './img/lcd-dark.png';
        if (lcd1_img) lcd1_img.src = './img/lcd-dark.png';

        if (lcd2_link) lcd2_link.href = './img/lcd2-dark.png';
        if (lcd2_img) lcd2_img.src = './img/lcd2-dark.png';

        if (lcd3_link) lcd3_link.href = './img/lcd3-dark.png';
        if (lcd3_img) lcd3_img.src = './img/lcd3-dark.png';

        if (bcr1_link) bcr1_link.href = './img-2/bcr-dark.png';
        if (bcr1_img) bcr1_img.src = './img-2/bcr-dark.png';

        if (bcr4_link) bcr4_link.href = './img-2/bcr-var-dark.png';
        if (bcr4_img) bcr4_img.src = './img-2/bcr-var-dark.png';

        if (cddbp_link) cddbp_link.href = './img-2/cddbp-dark.png';
        if (cddbp_img) cddbp_img.src = './img-2/cddbp-dark.png';


    } else {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-eicw-4-light.png')";

        /* Images */
        if (lcd1_link) lcd1_link.href = './img/lcd-light.png';
        if (lcd1_img) lcd1_img.src = './img/lcd-light.png';

        if (lcd2_link) lcd2_link.href = './img/lcd2-light.png';
        if (lcd2_img) lcd2_img.src = './img/lcd2-light.png';

        if (lcd3_link) lcd3_link.href = './img/lcd3-light.png';
        if (lcd3_img) lcd3_img.src = './img/lcd3-light.png';

        if (bcr1_link) bcr1_link.href = './img-2/bcr-light.png';
        if (bcr1_img) bcr1_img.src = './img-2/bcr-light.png';

        if (bcr4_link) bcr4_link.href = './img-2/bcr-var-light.png';
        if (bcr4_img) bcr4_img.src = './img-2/bcr-var-light.png';

        if (cddbp_link) cddbp_link.href = './img-2/cddbp-light.png';
        if (cddbp_img) cddbp_img.src = './img-2/cddbp-light.png';

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