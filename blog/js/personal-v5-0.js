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
    const pv5Page = document.getElementById('cv-pv5');

    /* Images */
    const gc1_link = document.getElementById('gc1');
    const gc1_img = document.getElementById('gc1-img');

    const gc2_link = document.getElementById('gc2');
    const gc2_img = document.getElementById('gc2-img');

    const opv4 = document.getElementById('opv4');
    const opv4_img = document.getElementById('opv4-img');

    const opv5 = document.getElementById('opv5');
    const opv5_img = document.getElementById('opv5-img');

    const hmv4 = document.getElementById('hmv4');
    const hmv4_img = document.getElementById('hmv4-img');

    const hmv5 = document.getElementById('hmv5');
    const hmv5_img = document.getElementById('hmv5-img');

    const eicwv4 = document.getElementById('eicwv4');
    const eicwv4_img = document.getElementById('eicwv4-img');

    const eicwv5 = document.getElementById('eicwv5');
    const eicwv5_img = document.getElementById('eicwv5-img');

    const footv4 = document.getElementById('footv4');
    const footv4_img = document.getElementById('footv4-img');

    const footv5 = document.getElementById('footv5');
    const footv5_img = document.getElementById('footv5-img');

    const aboutv4 = document.getElementById('aboutv4');
    const aboutv4_img = document.getElementById('aboutv4-img');

    const aboutv5 = document.getElementById('aboutv5');
    const aboutv5_img = document.getElementById('aboutv5-img');

    const homev5 = document.getElementById('homev5');
    const homev5_img = document.getElementById('homev5-img');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        pv5Page.style.backgroundImage = "url(https://i.imgur.com/bOE19OL.png)";

        /* Images */
        gc1_link.href = 'https://i.imgur.com/Qm2oHBz.png';
        gc1_img.src = 'https://i.imgur.com/Qm2oHBz.png';

        gc2_link.href = 'https://i.imgur.com/3fUcmIB.png';
        gc2_img.src = 'https://i.imgur.com/3fUcmIB.png';

        opv4.href = 'https://i.imgur.com/hOpLjmk.png';
        opv4_img.src = 'https://i.imgur.com/hOpLjmk.png';

        opv5.href = 'https://i.imgur.com/FoOMBfk.png';
        opv5_img.src = 'https://i.imgur.com/FoOMBfk.png';

        hmv4.href = 'https://i.imgur.com/AUOgj3s.png';
        hmv4_img.src = 'https://i.imgur.com/AUOgj3s.png';

        hmv5.href = 'https://i.imgur.com/hAlBg3D.png';
        hmv5_img.src = 'https://i.imgur.com/hAlBg3D.png';

        eicwv4.href = 'https://i.imgur.com/m8aKnEv.png';
        eicwv4_img.src = 'https://i.imgur.com/m8aKnEv.png';

        eicwv5.href = 'https://i.imgur.com/wbMBPUf.png';
        eicwv5_img.src = 'https://i.imgur.com/wbMBPUf.png';

        footv4.href = 'https://i.imgur.com/6MWaAjH.png';
        footv4_img.src = 'https://i.imgur.com/6MWaAjH.png';

        footv5.href = 'https://i.imgur.com/CNQcS4r.png';
        footv5_img.src = 'https://i.imgur.com/CNQcS4r.png';

        aboutv4.href = 'https://i.imgur.com/S3ZgoWf.jpeg';
        aboutv4_img.src = 'https://i.imgur.com/S3ZgoWf.jpeg';

        aboutv5.href = 'https://i.imgur.com/OXxX2Ox.png';
        aboutv5_img.src = 'https://i.imgur.com/OXxX2Ox.png';

        homev5.href = 'https://i.imgur.com/WIhPGZP.jpeg';
        homev5_img.src = 'https://i.imgur.com/WIhPGZP.jpeg';

    } else {
        /* Banners */
        pv5Page.style.backgroundImage = "url(https://i.imgur.com/JfP4t5u.png)";

        /* Images */
        gc1_link.href = 'https://i.imgur.com/rZNeia0.png';
        gc1_img.src = 'https://i.imgur.com/rZNeia0.png';

        gc2_link.href = 'https://i.imgur.com/OkpOkHg.png';
        gc2_img.src = 'https://i.imgur.com/OkpOkHg.png';

        opv4.href = 'https://i.imgur.com/aXX0gH4.png';
        opv4_img.src = 'https://i.imgur.com/aXX0gH4.png';

        opv5.href = 'https://i.imgur.com/NH8ryqW.png';
        opv5_img.src = 'https://i.imgur.com/NH8ryqW.png';

        hmv4.href = 'https://i.imgur.com/UQ8UnfO.png';
        hmv4_img.src = 'https://i.imgur.com/UQ8UnfO.png';

        hmv5.href = 'https://i.imgur.com/0f3ZjLT.png';
        hmv5_img.src = 'https://i.imgur.com/0f3ZjLT.png';

        eicwv4.href = 'https://i.imgur.com/Xt7Xhev.png';
        eicwv4_img.src = 'https://i.imgur.com/Xt7Xhev.png';

        eicwv5.href = 'https://i.imgur.com/wybzXsU.jpeg';
        eicwv5_img.src = 'https://i.imgur.com/wybzXsU.jpeg';

        footv4.href = 'https://i.imgur.com/PgMi16g.png';
        footv4_img.src = 'https://i.imgur.com/PgMi16g.png';

        footv5.href = 'https://i.imgur.com/Tw1NomM.png';
        footv5_img.src = 'https://i.imgur.com/Tw1NomM.png';

        aboutv4.href = 'https://i.imgur.com/L7s06d7.jpeg';
        aboutv4_img.src = 'https://i.imgur.com/L7s06d7.jpeg';

        aboutv5.href = 'https://i.imgur.com/kNbnjvx.png';
        aboutv5_img.src = 'https://i.imgur.com/kNbnjvx.png';

        homev5.href = 'https://i.imgur.com/lqMA2oV.jpeg';
        homev5_img.src = 'https://i.imgur.com/lqMA2oV.jpeg';
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