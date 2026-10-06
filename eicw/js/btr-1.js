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
    const coverSect = document.getElementById('covbtr-img');

    /* Images */
    const bcrcrc_link = document.getElementById('bcrcrc');
    const bcrcrc_img = document.getElementById('bcrcrc-img');

    const bcrtap_link = document.getElementById('bcrtap');
    const bcrtap_img = document.getElementById('bcrtap-img');

    const btrcr1_link = document.getElementById('btrcr1');
    const btrcr1_img = document.getElementById('btrcr1-img');

    const btrcr2_link = document.getElementById('btrcr2');
    const btrcr2_img = document.getElementById('btrcr2-img');

    const btrcr3_link = document.getElementById('btrcr3');
    const btrcr3_img = document.getElementById('btrcr3-img');

    const btrcr4_link = document.getElementById('btrcr4');
    const btrcr4_img = document.getElementById('btrcr4-img');

    const btrcr5_link = document.getElementById('btrcr5');
    const btrcr5_img = document.getElementById('btrcr5-img');

    const btrcr6_link = document.getElementById('btrcr6');
    const btrcr6_img = document.getElementById('btrcr6-img');

    const btrcr7_link = document.getElementById('btrcr7');
    const btrcr7_img = document.getElementById('btrcr7-img');

    const btrcr7a_link = document.getElementById('btrcr7a');
    const btrcr7a_img = document.getElementById('btrcr7a-img');



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-dark.png')";


        /* Images */
        bcrcrc_link.href = './img-2/bcr-compare-dark.png';
        bcrcrc_img.src = './img-2/bcr-compare-dark.png';

        bcrtap_link.href = './img-2/bcr-tap-dark.png';
        bcrtap_img.src = './img-2/bcr-tap-dark.png';

        btrcr1_link.href = './img-2/btrcr1-dark.png';
        btrcr1_img.src = './img-2/btrcr1-dark.png';

        btrcr2_link.href = './img-2/btrcr2-dark.png';
        btrcr2_img.src = './img-2/btrcr2-dark.png';

        btrcr3_link.href = './img-2/btrcr3-dark.png';
        btrcr3_img.src = './img-2/btrcr3-dark.png';

        btrcr4_link.href = './img-2/btrcr4-dark.png';
        btrcr4_img.src = './img-2/btrcr4-dark.png';

        btrcr5_link.href = './img-2/btrcr5-dark.png';
        btrcr5_img.src = './img-2/btrcr5-dark.png';
        
        btrcr6_link.href = './img-2/btrcr6-dark.png';
        btrcr6_img.src = './img-2/btrcr6-dark.png';

        btrcr7_link.href = './img-2/btrcr7-dark.png';
        btrcr7_img.src = './img-2/btrcr7-dark.png';

        btrcr7a_link.href = './img-2/btrcr7a-dark.png';
        btrcr7a_img.src = './img-2/btrcr7a-dark.png';


    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-ui-ux-light.png')";

        /* Images */
        bcrcrc_link.href = './img-2/bcr-compare-light.png';
        bcrcrc_img.src = './img-2/bcr-compare-light.png';

        bcrtap_link.href = './img-2/bcr-tap-light.png';
        bcrtap_img.src = './img-2/bcr-tap-light.png';

        btrcr1_link.href = './img-2/btrcr1-light.png';
        btrcr1_img.src = './img-2/btrcr1-light.png';

        btrcr2_link.href = './img-2/btrcr2-light.png';
        btrcr2_img.src = './img-2/btrcr2-light.png';

        btrcr3_link.href = './img-2/btrcr3-light.png';
        btrcr3_img.src = './img-2/btrcr3-light.png';

        btrcr4_link.href = './img-2/btrcr4-light.png';
        btrcr4_img.src = './img-2/btrcr4-light.png';

        btrcr5_link.href = './img-2/btrcr5-light.png';
        btrcr5_img.src = './img-2/btrcr5-light.png';

        btrcr6_link.href = './img-2/btrcr6-light.png';
        btrcr6_img.src = './img-2/btrcr6-light.png';

        btrcr7_link.href = './img-2/btrcr7-light.png';
        btrcr7_img.src = './img-2/btrcr7-light.png';

        btrcr7a_link.href = './img-2/btrcr7a-light.png';
        btrcr7a_img.src = './img-2/btrcr7a-light.png';


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

// Play each accordion's video rows in order when it is opened
document.addEventListener('DOMContentLoaded', function () {
    var sections = Array.from(document.querySelectorAll('.eicw-collapsible'))
        .map(function (details) {
            return {
                details: details,
                rows: Array.from(details.querySelectorAll('.video-row'))
            };
        })
        .filter(function (section) {
            return section.rows.length > 0;
        });
    var activeDetails = null;
    var activeRun = 0;

    sections.forEach(function (section) {
        section.rows.forEach(function (row) {
            row.querySelectorAll('video').forEach(function (video) {
                video.loop = false;
                video.muted = true;
                video.playsInline = true;
            });
        });
    });

    function stopSection(section) {
        section.rows.forEach(function (row) {
            row.querySelectorAll('video').forEach(function (video) {
                video.pause();
                video.currentTime = 0;
            });
        });
    }

    function playSection(section) {
        activeRun++;
        var run = activeRun;

        sections.forEach(function (otherSection) {
            stopSection(otherSection);
        });
        activeDetails = section.details;

        function playRow(index) {
            if (run !== activeRun || !section.details.open) return;
            if (index >= section.rows.length) {
                activeDetails = null;
                return;
            }

            var videos = Array.from(section.rows[index].querySelectorAll('video'));
            if (videos.length === 0) {
                playRow(index + 1);
                return;
            }

            var finishedCount = 0;
            videos.forEach(function (video) {
                video.currentTime = 0;

                function onEnded() {
                    if (run !== activeRun) return;
                    finishedCount++;
                    if (finishedCount === videos.length) {
                        playRow(index + 1);
                    }
                }

                video.addEventListener('ended', onEnded, { once: true });
                video.play().catch(function (error) {
                    if (run !== activeRun) return;
                    console.error('Accordion video playback failed:', error);
                    activeRun++;
                    activeDetails = null;
                    sections.forEach(stopSection);
                });
            });
        }

        playRow(0);
    }

    sections.forEach(function (section) {
        section.details.addEventListener('toggle', function () {
            if (section.details.open) {
                playSection(section);
            } else if (activeDetails === section.details) {
                activeRun++;
                activeDetails = null;
                stopSection(section);
            }
        });
    });
});