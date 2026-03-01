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
    /* Banners */
    const coverSect = document.getElementById('cbus-img');
    const cdSect = document.getElementById('cd-img');


    /* Images */
    const psr1a_link = document.getElementById('psr1a');
    const psr1a_img = document.getElementById('psr1a-img');

    const psr2_link = document.getElementById('psr2');
    const psr2_img = document.getElementById('psr2-img');

    const psr3a_link = document.getElementById('psr3a');
    const psr3a_img = document.getElementById('psr3a-img');

    const psr3b_link = document.getElementById('psr3b');
    const psr3b_img = document.getElementById('psr3b-img');

    const psr5a_link = document.getElementById('psr5a');
    const psr5a_img = document.getElementById('psr5a-img');

    const cck1a_link = document.getElementById('cck1a');
    const cck1a_img = document.getElementById('cck1a-img');

    const cck2_link = document.getElementById('cck2');
    const cck2_img = document.getElementById('cck2-img');

    const cck3a_link = document.getElementById('cck3a');
    const cck3a_img = document.getElementById('cck3a-img');

    const cck4a_link = document.getElementById('cck4a');
    const cck4a_img = document.getElementById('cck4a-img');

    const cs_link = document.getElementById('cs');
    const cs_img = document.getElementById('cs-img');

    /* Videos */
    const vid9 = document.getElementById('eicw-vid9');
    const vid9Source = vid9.querySelector('source');

    const vid10 = document.getElementById('eicw-vid10');
    const vid10Source = vid10.querySelector('source');


    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-psr-dark.png')";
        if (cdSect) cdSect.style.backgroundImage = "url('./img/cdbus-dark.png')";


        /* Images */
        if (psr1a_link) psr1a_link.href = './img/psr-1a-dark.png';
        if (psr1a_img) psr1a_img.src = './img/psr-1a-dark.png';

        if (psr2_link) psr2_link.href = './img/psr-2-dark.png';
        if (psr2_img) psr2_img.src = './img/psr-2-dark.png';

        if (psr3a_link) psr3a_link.href = './img/psr-3a-dark.png';
        if (psr3a_img) psr3a_img.src = './img/psr-3a-dark.png';

        if (psr3b_link) psr3b_link.href = './img/psr-3b-dark.png';
        if (psr3b_img) psr3b_img.src = './img/psr-3b-dark.png';

        if (psr5a_link) psr5a_link.href = './img/psr5a-dark.png';
        if (psr5a_img) psr5a_img.src = './img/psr5a-dark.png';

        if (cck1a_link) cck1a_link.href = './img/cck-1a-dark.png';
        if (cck1a_img) cck1a_img.src = './img/cck-1a-dark.png';

        if (cck2_link) cck2_link.href = './img/cck-2-dark.png';
        if (cck2_img) cck2_img.src = './img/cck-2-dark.png';

        if (cck3a_link) cck3a_link.href = './img/cck-3a-dark.png';
        if (cck3a_img) cck3a_img.src = './img/cck-3a-dark.png';

        if (cck4a_link) cck4a_link.href = './img/cck-4a-dark.png';
        if (cck4a_img) cck4a_img.src = './img/cck-4a-dark.png';

        if (cs_link) cs_link.href = './img/cs-dark.png';
        if (cs_img) cs_img.src = './img/cs-dark.png';

        /* Videos */
        if (vid9Source) vid9Source.src = './img/eicw-vid9-dark.mp4';
        if (vid10Source) vid10Source.src = './img/eicw-vid10-dark.mp4';

    } else {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-psr-light.png')";
        if (cdSect) cdSect.style.backgroundImage = "url('./img/cdbus-light.png')";


        /* Images */
        if (psr1a_link) psr1a_link.href = './img/psr-1a-light.png';
        if (psr1a_img) psr1a_img.src = './img/psr-1a-light.png';

        if (psr2_link) psr2_link.href = './img/psr-2-light.png';
        if (psr2_img) psr2_img.src = './img/psr-2-light.png';

        if (psr3a_link) psr3a_link.href = './img/psr-3a-light.png';
        if (psr3a_img) psr3a_img.src = './img/psr-3a-light.png';

        if (psr3b_link) psr3b_link.href = './img/psr-3b-light.png';
        if (psr3b_img) psr3b_img.src = './img/psr-3b-light.png';

        if (psr5a_link) psr5a_link.href = './img/psr5a-light.png';
        if (psr5a_img) psr5a_img.src = './img/psr5a-light.png';

        if (cck1a_link) cck1a_link.href = './img/cck-1a-light.png';
        if (cck1a_img) cck1a_img.src = './img/cck-1a-light.png';

        if (cck2_link) cck2_link.href = './img/cck-2-light.png';
        if (cck2_img) cck2_img.src = './img/cck-2-light.png';

        if (cck3a_link) cck3a_link.href = './img/cck-3a-light.png';
        if (cck3a_img) cck3a_img.src = './img/cck-3a-light.png';

        if (cck4a_link) cck4a_link.href = './img/cck-4a-light.png';
        if (cck4a_img) cck4a_img.src = './img/cck-4a-light.png';

        if (cs_link) cs_link.href = './img/cs-light.png';
        if (cs_img) cs_img.src = './img/cs-light.png';

        /* Videos */
        if (vid9Source) vid9Source.src = './img/eicw-vid9-light.mp4';
        if (vid10Source) vid10Source.src = './img/eicw-vid10-light.mp4';

    }

    if (vid9) vid9.load();
    if (vid10) vid10.load();

}

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});

// Autoplay videos row by row when scrolled into view
document.addEventListener('DOMContentLoaded', function () {
    var rows = Array.from(document.querySelectorAll('.video-row'));
    if (rows.length === 0) return;

    var currentRowIndex = 0;
    var isPlaying = false;

    // Prepare all videos: muted, no loop, inline
    rows.forEach(function (row) {
        var videos = row.querySelectorAll('video');
        videos.forEach(function (video) {
            video.loop = false;
            video.muted = true;
            video.playsInline = true;
        });
    });

    function isRowInViewport(row) {
        var rect = row.getBoundingClientRect();
        // Row is considered visible when at least part of it is in the viewport
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function playRow(index) {
        if (index >= rows.length) {
            isPlaying = false;
            return;
        }

        currentRowIndex = index;

        // If the row isn't visible yet, wait for scroll
        if (!isRowInViewport(rows[index])) {
            isPlaying = false;
            return;
        }

        isPlaying = true;
        var videos = rows[index].querySelectorAll('video');
        var finishedCount = 0;

        videos.forEach(function (video) {
            video.addEventListener('ended', function onEnded() {
                video.removeEventListener('ended', onEnded);
                finishedCount++;
                if (finishedCount >= videos.length) {
                    playRow(index + 1);
                }
            });

            video.play().catch(function (error) {
                console.log('Autoplay was prevented:', error);
                finishedCount++;
                if (finishedCount >= videos.length) {
                    playRow(index + 1);
                }
            });
        });
    }

    function onScroll() {
        // If not currently playing and there are rows left, check if the next row is visible
        if (!isPlaying && currentRowIndex < rows.length && isRowInViewport(rows[currentRowIndex])) {
            playRow(currentRowIndex);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Also check immediately in case the first row is already visible on load
    onScroll();
});