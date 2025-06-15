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

    const tf_link = document.getElementById('tf');
    const tf_img = document.getElementById('tf-img');

    const pl_link = document.getElementById('pl');
    const pl_img = document.getElementById('pl-img');

    const pl2_link = document.getElementById('pl2');
    const pl2_img = document.getElementById('pl2-img');

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

    const es_link = document.getElementById('es');
    const es_img = document.getElementById('es-img');

    const cp_link = document.getElementById('cp');
    const cp_img = document.getElementById('cp-img');

    const ls_link = document.getElementById('ls');
    const ls_img = document.getElementById('ls-img');

    const wf1_link = document.getElementById('wf1');
    const wf1_img = document.getElementById('wf1-img');

    const wf2_link = document.getElementById('wf2');
    const wf2_img = document.getElementById('wf2-img');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        coverSect.style.backgroundImage = "url('./img/cover-dark.png')";

        tf_link.href = './img/typeface-dark.png';
        tf_img.src = './img/typeface-dark.png';

        pl_link.href = './img/palettes-dark.png';
        pl_img.src = './img/palettes-dark.png';

        pl2_link.href = './img/palettes-dark2.png';
        pl2_img.src = './img/palettes-dark2.png';

        evo_link.href = './img/evo-dark.png';
        evo_img.src = './img/evo-dark.png';

        es_link.href = './img/es-dark.png';
        es_img.src = './img/es-dark.png';

        cp_link.href = './img/cp-dark.png';
        cp_img.src = './img/cp-dark.png';

        ls_link.href = './img/ls-dark.png';
        ls_img.src = './img/ls-dark.png';

        wf1_link.href = './img/wf1-dark.png';
        wf1_img.src = './img/wf1-dark.png';

        wf2_link.href = './img/wf2-dark.png';
        wf2_img.src = './img/wf2-dark.png';


    } else {
        coverSect.style.backgroundImage = "url('./img/cover-light.png')";

        tf_link.href = './img/typeface-light.png';
        tf_img.src = './img/typeface-light.png';

        pl_link.href = './img/palettes-light.png';
        pl_img.src = './img/palettes-light.png';

        pl2_link.href = './img/palettes-light2.png';
        pl2_img.src = './img/palettes-light2.png';

        evo_link.href = './img/evo-light.png';
        evo_img.src = './img/evo-light.png';

        es_link.href = './img/es-light.png';
        es_img.src = './img/es-light.png';

        cp_link.href = './img/cp-light.png';
        cp_img.src = './img/cp-light.png';

        ls_link.href = './img/ls-light.png';
        ls_img.src = './img/ls-light.png';

        wf1_link.href = './img/wf1-light.png';
        wf1_img.src = './img/wf1-light.png';

        wf2_link.href = './img/wf2-light.png';
        wf2_img.src = './img/wf2-light.png';
    }
}

// Only autoplay the video you want
document.getElementById('autoplayVideo').play();


// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});