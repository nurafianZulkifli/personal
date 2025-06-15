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
    const coverSect = document.getElementById('cv-img');
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
        coverSect.style.backgroundImage = "url('./img/cover-psr-dark.png')";
        cdSect.style.backgroundImage = "url('./img/cdbus-dark.png')";


        /* Images */
        psr1a_link.href = './img/psr-1a-dark.png';
        psr1a_img.src = './img/psr-1a-dark.png';

        psr2_link.href = './img/psr-2-dark.png';
        psr2_img.src = './img/psr-2-dark.png';

        psr3a_link.href = './img/psr-3a-dark.png';
        psr3a_img.src = './img/psr-3a-dark.png';

        psr3b_link.href = './img/psr-3b-dark.png';
        psr3b_img.src = './img/psr-3b-dark.png';

        psr5a_link.href = './img/psr5a-dark.png';
        psr5a_img.src = './img/psr5a-dark.png';

        cck1a_link.href = './img/cck-1a-dark.png';
        cck1a_img.src = './img/cck-1a-dark.png';

        cck2_link.href = './img/cck-2-dark.png';
        cck2_img.src = './img/cck-2-dark.png';

        cck3a_link.href = './img/cck-3a-dark.png';
        cck3a_img.src = './img/cck-3a-dark.png';

        cck4a_link.href = './img/cck-4a-dark.png';
        cck4a_img.src = './img/cck-4a-dark.png';

        cs_link.href = './img/cs-dark.png';
        cs_img.src = './img/cs-dark.png';

        /* Videos */
        vid9Source.src = './img/eicw-vid9-dark.mp4';
        vid10Source.src = './img/eicw-vid10-dark.mp4';

    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-psr-light.png')";
        cdSect.style.backgroundImage = "url('./img/cdbus-light.png')";


        /* Images */
        psr1a_link.href = './img/psr-1a-light.png';
        psr1a_img.src = './img/psr-1a-light.png';

        psr2_link.href = './img/psr-2-light.png';
        psr2_img.src = './img/psr-2-light.png';

        psr3a_link.href = './img/psr-3a-light.png';
        psr3a_img.src = './img/psr-3a-light.png';

        psr3b_link.href = './img/psr-3b-light.png';
        psr3b_img.src = './img/psr-3b-light.png';

        psr5a_link.href = './img/psr5a-light.png';
        psr5a_img.src = './img/psr5a-light.png';

        cck1a_link.href = './img/cck-1a-light.png';
        cck1a_img.src = './img/cck-1a-light.png';

        cck2_link.href = './img/cck-2-light.png';
        cck2_img.src = './img/cck-2-light.png';

        cck3a_link.href = './img/cck-3a-light.png';
        cck3a_img.src = './img/cck-3a-light.png';

        cck4a_link.href = './img/cck-4a-light.png';
        cck4a_img.src = './img/cck-4a-light.png';

        cs_link.href = './img/cs-light.png';
        cs_img.src = './img/cs-light.png';

        /* Videos */
        vid9Source.src = './img/eicw-vid9-light.mp4';
        vid10Source.src = './img/eicw-vid10-light.mp4';

    }

    vid9.load();
    vid10.load();

}

// Only autoplay the video you want
document.getElementById('autoplayVideo').play();


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