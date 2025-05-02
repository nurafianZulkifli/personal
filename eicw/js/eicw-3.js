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
    const iuSect = document.getElementById('iu-img');

    /* Images */
    const cs_link = document.getElementById('cs');
    const cs_img = document.getElementById('cs-img');

    const wfs_link = document.getElementById('wfs');
    const wfs_img = document.getElementById('wfs-img');

    const wfs2_link = document.getElementById('wfs2');
    const wfs2_img = document.getElementById('wfs2-img');

    const lcd1_link = document.getElementById('lcd1');
    const lcd1_img = document.getElementById('lcd1-img');

    const lcd2_link = document.getElementById('lcd2');
    const lcd2_img = document.getElementById('lcd2-img');

    /* Videos */



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-3-dark.png')";
        iuSect.style.backgroundImage = "url('./img/iu-dark.png')";


        /* Images */
        cs_link.href = './img/cs-dark.png';
        cs_img.src = './img/cs-dark.png';

        wfs_link.href = './img/wfs-dark.png';
        wfs_img.src = './img/wfs-dark.png';

        wfs2_link.href = './img/wfs2-dark.png';
        wfs2_img.src = './img/wfs2-dark.png';

        lcd1_link.href = './img/lcd-dark.png';
        lcd1_img.src = './img/lcd-dark.png';

        lcd2_link.href = './img/lcd2-dark.png';
        lcd2_img.src = './img/lcd2-dark.png';

        /* Videos */


    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-3-light.png')";
        iuSect.style.backgroundImage = "url('./img/iu-light.png')";


        /* Images */
        cs_link.href = './img/cs-light.png';
        cs_img.src = './img/cs-light.png';

        wfs_link.href = './img/wfs-light.png';
        wfs_img.src = './img/wfs-light.png';

        wfs2_link.href = './img/wfs2-light.png';
        wfs2_img.src = './img/wfs2-light.png';

        lcd1_link.href = './img/lcd-light.png';
        lcd1_img.src = './img/lcd-light.png';

        lcd2_link.href = './img/lcd2-light.png';
        lcd2_img.src = './img/lcd2-light.png';


        /* Videos */


    }


}

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (video) {
        video.play().catch(function (error) {
            console.log('Autoplay was prevented:', error);
        });
    });
});

// document.addEventListener('contextmenu', function (e) {
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