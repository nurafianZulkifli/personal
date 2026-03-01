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
    const coverSect = document.getElementById('covccl-img');
    const platSect = document.getElementById('plat-img');
    const entSect = document.getElementById('ent-img');
    const concSect = document.getElementById('conc-img');

    /* Images */
    const cclDiag_link = document.getElementById('ccl-diag');
    const cclDiag_img = document.getElementById('ccl-diag-img');

    const arrow_link = document.getElementById('arrow');
    const arrow_img = document.getElementById('arrow-img');

    const wfp_link = document.getElementById('wfp');
    const wfp_img = document.getElementById('wfp-img');

    const wfm_link = document.getElementById('wfm');
    const wfm_img = document.getElementById('wfm-img');

    const evo3_link = document.getElementById('evo3');
    const evo3_img = document.getElementById('evo3-img');


    /* Videos */



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-eicw-5-dark.png')";
        if (platSect) platSect.style.backgroundImage = "url('./img/plat-dark.png')";
        if (entSect) entSect.style.backgroundImage = "url('./img/ent-dark.png')";
        if (concSect) concSect.style.backgroundImage = "url('./img/conc-dark.png')";


        /* Images */
        if (cclDiag_link) cclDiag_link.href = './img/ccl-diag-dark.png';
        if (cclDiag_img) cclDiag_img.src = './img/ccl-diag-dark.png';

        if (arrow_link) arrow_link.href = './img/arrow-dark.png';
        if (arrow_img) arrow_img.src = './img/arrow-dark.png';

        if (wfm_link) wfm_link.href = './img/ccl6-7aD.png';
        if (wfm_img) wfm_img.src = './img/ccl6-7aD.png';

        if (wfp_link) wfp_link.href = './img/ccl6-7D.png';
        if (wfp_img) wfp_img.src = './img/ccl6-7D.png';

        if (evo3_link) evo3_link.href = './img/ccl6-overview-dark.png';
        if (evo3_img) evo3_img.src = './img/ccl6-overview-dark.png';

        /* Videos */


    } else {
        /* Banners */
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-eicw-5-light.png')";
        if (platSect) platSect.style.backgroundImage = "url('./img/plat-light.png')";
        if (entSect) entSect.style.backgroundImage = "url('./img/ent-light.png')";
        if (concSect) concSect.style.backgroundImage = "url('./img/conc-light.png')";


        /* Images */
        if (cclDiag_link) cclDiag_link.href = './img/ccl-diag-light.png';
        if (cclDiag_img) cclDiag_img.src = './img/ccl-diag-light.png';

        if (arrow_link) arrow_link.href = './img/arrow-light.png';
        if (arrow_img) arrow_img.src = './img/arrow-light.png';

        if (wfm_link) wfm_link.href = './img/ccl6-7aL.png';
        if (wfm_img) wfm_img.src = './img/ccl6-7aL.png';

        if (wfp_link) wfp_link.href = './img/ccl6-7.png';
        if (wfp_img) wfp_img.src = './img/ccl6-7.png';

        if (evo3_link) evo3_link.href = './img/ccl6-overview-light.png';
        if (evo3_img) evo3_img.src = './img/ccl6-overview-light.png';


        /* Videos */


    }



}

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

// document.addEventListener('contextmenu', function(e) {
//     if (e.target.tagName === 'IMG') {
//         e.preventDefault();
//     }
// });

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});


/* Audio Elements */
// Only attach handlers once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    var ccl = document.getElementById("chimes");
    if (ccl) {
        ccl.addEventListener('mousedown', handleChimesClick);
        ccl.addEventListener('touchstart', handleChimesTap);
    }
});

let clickCount = 0;
let clickTimer = null;
let tapCount = 0;
let tapTimer = null;

// Single click/tap to play normal chime, triple click/tap to play alternate chime
function handleChimesClick(event) {
    if (event.button !== 0) return; // Only left mouse button
    clickCount++;
    if (clickCount === 3) {
        clearTimeout(clickTimer);
        playAltAudio();
        clickCount = 0;
    } else {
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            if (clickCount === 1) playAudio();
            clickCount = 0;
        }, 400);
    }
}

function handleChimesTap(event) {
    tapCount++;
    if (tapCount === 3) {
        clearTimeout(tapTimer);
        playAltAudio();
        tapCount = 0;
    } else {
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => {
            if (tapCount === 1) playAudio();
            tapCount = 0;
        }, 500);
    }
}

function playAudio() {
    const audio = document.getElementById('chimes-audio');
    const altAudio = document.getElementById('chimes-alt');
    if (audio) {
        // Stop and reset both audios before playing
        if (altAudio) {
            altAudio.pause();
            altAudio.currentTime = 0;
        }
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}

function playAltAudio() {
    const audio = document.getElementById('chimes-audio');
    const altAudio = document.getElementById('chimes-alt');
    if (altAudio) {
        // Stop and reset both audios before playing
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        altAudio.pause();
        altAudio.currentTime = 0;
        altAudio.play();
    }
}
