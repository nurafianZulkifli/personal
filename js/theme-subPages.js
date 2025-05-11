/* Dark Mode Functionality for Individual Pages */

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateThemeIcon('dark');
    updateHrefForDarkMode();
} else {
    updateThemeIcon('light');
}

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
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
});

// Function to update the theme icon with animation
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');

    // Add animation class
    themeIcon.classList.add('animate');

    // Update the icon based on the theme
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun-bright');
        themeIcon.classList.add('fa-moon-stars');
    } else {
        themeIcon.classList.remove('fa-moon-stars');
        themeIcon.classList.add('fa-sun-bright');
    }

    // Remove the animation class after the animation ends
    setTimeout(() => {
        themeIcon.classList.remove('animate');
    }, 300); // Match the duration of the CSS transition
}

function updateHrefForDarkMode() {
    /* Banners */
    const aboutPage = document.getElementById('cv-about');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        aboutPage.style.backgroundImage = "url('img/bg-img/hero-bg-small-dark.png')";


    } else {
        /* Banners */
        aboutPage.style.backgroundImage = "url('img/bg-img/hero-bg-small.png')";
    }


}