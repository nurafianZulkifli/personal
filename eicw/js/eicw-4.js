/* Dark Mode Functionality for Individual Pages */

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateThemeIcon('dark');
    updateHrefForDarkMode();
} else {
    updateThemeIcon('light');
}

// Get both toggle buttons
const toggleButtonDesktop = document.getElementById('dark-mode-toggle-desktop');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Save the preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        updateThemeIcon('dark');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        updateThemeIcon('light');
    }
    updateHrefForDarkMode();
}

// Add event listeners to both buttons if they exist
if (toggleButtonDesktop) {
    toggleButtonDesktop.addEventListener('click', toggleDarkMode);
}

if (toggleButtonMobile) {
    toggleButtonMobile.addEventListener('click', toggleDarkMode);
}
// Function to update the theme icon with animation
function updateThemeIcon(theme) {
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

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

    // Remove the animation class after the animation ends
    setTimeout(() => {
        if (themeIconDesktop) themeIconDesktop.classList.remove('animate');
        if (themeIconMobile) themeIconMobile.classList.remove('animate');
    }, 300); // Match the duration of the CSS transition
}

function updateHrefForDarkMode() {
    /* Banners */
    const coverSect = document.getElementById('cui-img');
    const cdSect = document.getElementById('cd-img');

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

    const bcr3_link = document.getElementById('bcr3');
    const bcr3_img = document.getElementById('bcr3-img');

    const bcr4_link = document.getElementById('bcr4');
    const bcr4_img = document.getElementById('bcr4-img');

    /* Videos */
    const vid1 = document.getElementById('eicw-vid3');
    const vid1Source = vid1.querySelector('source');


    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-dark.png')";


        /* Images */
        lcd1_link.href = './img/lcd-dark.png';
        lcd1_img.src = './img/lcd-dark.png';

        lcd2_link.href = './img/lcd2-dark.png';
        lcd2_img.src = './img/lcd2-dark.png';

        lcd3_link.href = './img/lcd3-dark.png';
        lcd3_img.src = './img/lcd3-dark.png';

        bcr1_link.href = './img-2/bcr-dark.png';
        bcr1_img.src = './img-2/bcr-dark.png';

        bcr2_link.href = './img-2/bcr-compare-dark.png';
        bcr2_img.src = './img-2/bcr-compare-dark.png';

        bcr3_link.href = './img-2/bcr-tap-dark.png';
        bcr3_img.src = './img-2/bcr-tap-dark.png';

        bcr4_link.href = './img-2/bcr-var-dark.png';
        bcr4_img.src = './img-2/bcr-var-dark.png';


        /* Videos */
        vid1Source.src = './img/staris2-red.mp4';


    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-light.png')";

        /* Images */
        lcd1_link.href = './img/lcd-light.png';
        lcd1_img.src = './img/lcd-light.png';

        lcd2_link.href = './img/lcd2-light.png';
        lcd2_img.src = './img/lcd2-light.png';

        lcd3_link.href = './img/lcd3-light.png';
        lcd3_img.src = './img/lcd3-light.png';

        bcr1_link.href = './img-2/bcr-light.png';
        bcr1_img.src = './img-2/bcr-light.png';

        bcr2_link.href = './img-2/bcr-compare-light.png';
        bcr2_img.src = './img-2/bcr-compare-light.png';

        bcr3_link.href = './img-2/bcr-tap-light.png';
        bcr3_img.src = './img-2/bcr-tap-light.png';

        bcr4_link.href = './img-2/bcr-var-light.png';
        bcr4_img.src = './img-2/bcr-var-light.png';

        /* Videos */
        vid1Source.src = './img/staris2-red.mp4';

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