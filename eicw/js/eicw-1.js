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
    /* Existing logic for updating banners, images, and videos */
    const coverSect = document.getElementById('cv-img');
    const ciSect = document.getElementById('ci-img');
    const eiaSect = document.getElementById('eia-img');

    const tf_link = document.getElementById('tf');
    const tf_img = document.getElementById('tf-img');

    const pl_link = document.getElementById('pl');
    const pl_img = document.getElementById('pl-img');

    const pl2_link = document.getElementById('pl2');
    const pl2_img = document.getElementById('pl2-img');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        coverSect.style.backgroundImage = "url('./img/cover-dark.png')";
        ciSect.style.backgroundImage = "url('./img/c-i-dark.png')";
        eiaSect.style.backgroundImage = "url('./img/eia-dark.png')";

        tf_link.href = './img/typeface-dark.png';
        tf_img.src = './img/typeface-dark.png';

        pl_link.href = './img/palettes-dark.png';
        pl_img.src = './img/palettes-dark.png';

        pl2_link.href = './img/palettes-dark2.png';
        pl2_img.src = './img/palettes-dark2.png';

    } else {
        coverSect.style.backgroundImage = "url('./img/cover-light.png')";
        ciSect.style.backgroundImage = "url('./img/c-i-light.png')";
        eiaSect.style.backgroundImage = "url('./img/eia-light.png')";

        tf_link.href = './img/typeface-light.png';
        tf_img.src = './img/typeface-light.png';

        pl_link.href = './img/palettes-light.png';
        pl_img.src = './img/palettes-light.png';

        pl2_link.href = './img/palettes-light2.png';
        pl2_img.src = './img/palettes-light2.png';
    }
}