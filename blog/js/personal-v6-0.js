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

if (toggleButtonDesktop) {
}

if (toggleButtonMobile) {
}
// Function to update the theme icon with animation
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
    const pv6Page = document.getElementById('cv-pv6');

    /* Images */
    const overview_link = document.getElementById('overview');
    const overview_img = document.getElementById('overview-img');

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

    const v5_wf = document.getElementById('v5-wf');
    const v5_wf_img = document.getElementById('v5-wf-img');

    const v6_wf = document.getElementById('v6-wf');
    const v6_wf_img = document.getElementById('v6-wf-img');

    const logo_col = document.getElementById('logo-col');
    const logo_col_img = document.getElementById('logo-col-img');

    const colour_sch = document.getElementById('colour-sch');
    const colour_sch_img = document.getElementById('colour-sch-img');

    const nb1 = document.getElementById('nb1');
    const nb1_img = document.getElementById('nb1-img');

    const nb2 = document.getElementById('nb2');
    const nb2_img = document.getElementById('nb2-img');

    const fs1 = document.getElementById('fs1');
    const fs1_img = document.getElementById('fs1-img');

    const fs2 = document.getElementById('fs2');
    const fs2_img = document.getElementById('fs2-img');

    const mn1 = document.getElementById('mn1');
    const mn1_img = document.getElementById('mn1-img');

    const vid1 = document.getElementById('mn1-video');
    const vid1Source = vid1.querySelector('source');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/RlanStH.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/T4zeIqB.png';
        overview_img.src = 'https://i.imgur.com/T4zeIqB.png';

        evo_link.href = 'https://i.imgur.com/Nw7DPni.png';
        evo_img.src = 'https://i.imgur.com/Nw7DPni.png';

        v5_wf.href = 'https://i.imgur.com/pXQBxj3.png';
        v5_wf_img.src = 'https://i.imgur.com/pXQBxj3.png';

        v6_wf.href = 'https://i.imgur.com/n7BRWR4.png';
        v6_wf_img.src = 'https://i.imgur.com/n7BRWR4.png';

        logo_col.href = 'https://i.imgur.com/XMUiCNb.png';
        logo_col_img.src = 'https://i.imgur.com/XMUiCNb.png';

        colour_sch.href = 'https://i.imgur.com/uKqV2pG.png';
        colour_sch_img.src = 'https://i.imgur.com/uKqV2pG.png';

        nb1.href = 'https://i.imgur.com/1P8RyIK.png';
        nb1_img.src = 'https://i.imgur.com/1P8RyIK.png';

        nb2.href = 'https://i.imgur.com/NoBp3Hs.png';
        nb2_img.src = 'https://i.imgur.com/NoBp3Hs.png';

        fs1.href = 'https://i.imgur.com/lAO8qNY.png';
        fs1_img.src = 'https://i.imgur.com/lAO8qNY.png';

        fs2.href = 'https://i.imgur.com/a0dHcs8.png';
        fs2_img.src = 'https://i.imgur.com/a0dHcs8.png';

        mn1.href = 'https://i.imgur.com/ixXAuFt.png';
        mn1_img.src = 'https://i.imgur.com/ixXAuFt.png';

        /* Videos */
        vid1Source.src = 'https://i.imgur.com/CGixwLp.mp4';

    } else {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/oRKQIek.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/XTAol50.png';
        overview_img.src = 'https://i.imgur.com/XTAol50.png';

        evo_link.href = 'https://i.imgur.com/FGFW3cP.png';
        evo_img.src = 'https://i.imgur.com/FGFW3cP.png';

        v5_wf.href = 'https://i.imgur.com/m5IfoIQ.png';
        v5_wf_img.src = 'https://i.imgur.com/m5IfoIQ.png';

        v6_wf.href = 'https://i.imgur.com/tLuFHf9.png';
        v6_wf_img.src = 'https://i.imgur.com/tLuFHf9.png';

        logo_col.href = 'https://i.imgur.com/XTAol50.png';
        logo_col_img.src = 'https://i.imgur.com/XTAol50.png';

        colour_sch.href = 'https://i.imgur.com/kM74UcT.png';
        colour_sch_img.src = 'https://i.imgur.com/kM74UcT.png';

        nb1.href = 'https://i.imgur.com/qD6fECV.png';
        nb1_img.src = 'https://i.imgur.com/qD6fECV.png';

        nb2.href = 'https://i.imgur.com/rDKZwWk.png';
        nb2_img.src = 'https://i.imgur.com/rDKZwWk.png';

        fs1.href = 'https://i.imgur.com/P2nO6CK.png';
        fs1_img.src = 'https://i.imgur.com/P2nO6CK.png';

        fs2.href = 'https://i.imgur.com/BKGfaQS.png';
        fs2_img.src = 'https://i.imgur.com/BKGfaQS.png';

        mn1.href = 'https://i.imgur.com/6mvxAKY.png';
        mn1_img.src = 'https://i.imgur.com/6mvxAKY.png';

        /* Videos */
        vid1Source.src = 'https://i.imgur.com/FP0hIij.mp4';
    }

    vid1.load();


}

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});