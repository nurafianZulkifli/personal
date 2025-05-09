/* Dark Mode Functionality for Individual Pages */

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateHrefForDarkMode();
}

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save the preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
    updateHrefForDarkMode();
});

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



    /* Videos */
    const vid9 = document.getElementById('eicw-vid9');
    const vid9Source = vid9.querySelector('source');


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

        /* Videos */
        vid9Source.src = './img/eicw-vid9-dark.mp4';

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

        /* Videos */
        vid9Source.src = './img/eicw-vid9-light.mp4';

    }

    vid9.load();

}

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (video) {
        video.play().catch(function (error) {
            console.log('Autoplay was prevented:', error);
        });
    });
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