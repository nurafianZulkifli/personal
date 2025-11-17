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



    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-light.png')";

        /* Images */
        bcrcrc_link.href = './img-2/bcr-compare-light.png';
        bcrcrc_img.src = './img-2/bcr-compare-light.png';

        bcrtap_link.href = './img/lcd3-light.png';
        bcrtap_img.src = './img/lcd3-light.png';

        btrcr1_link.href = './img-2/btrcr1-light.png';
        btrcr1_img.src = './img-2/btrcr1-light.png';

        btrcr2_link.href = './img-2/btrcr2-light.png';
        btrcr2_img.src = './img-2/btrcr2-light.png';

        btrcr3_link.href = './img-2/btrcr3-light.png';
        btrcr3_img.src = './img-2/btrcr3-light.png';


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