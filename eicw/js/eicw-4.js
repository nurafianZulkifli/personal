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
    const platSect = document.getElementById('plat-img');
    const entSect = document.getElementById('ent-img');
    const concSect = document.getElementById('conc-img');

    /* Images */
    const cclDiag_link = document.getElementById('ccl-diag');
    const cclDiag_img = document.getElementById('ccl-diag-img');

    const arrow_link = document.getElementById('arrow');
    const arrow_img = document.getElementById('arrow-img');

    const wfm_link = document.getElementById('wfm');
    const wfm_img = document.getElementById('wfm-img');

    const evo3_link = document.getElementById('evo3');
    const evo3_img = document.getElementById('evo3-img');


    /* Videos */



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-dark.png')";
        platSect.style.backgroundImage = "url('./img/plat-dark.png')";
        entSect.style.backgroundImage = "url('./img/ent-dark.png')";
        concSect.style.backgroundImage = "url('./img/conc-dark.png')";


        /* Images */
        cclDiag_link.href = './img/ccl-diag-dark.png';
        cclDiag_img.src = './img/ccl-diag-dark.png';

        arrow_link.href = './img/arrow-dark.png';
        arrow_img.src = './img/arrow-dark.png';

        wfm_link.href = './img/ccl6-7aD.png';
        wfm_img.src = './img/ccl6-7aD.png';

        evo3_link.href = './img/ccl6-overview-dark.png';
        evo3_img.src = './img/ccl6-overview-dark.png';

        /* Videos */


    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-eicw-4-light.png')";
        platSect.style.backgroundImage = "url('./img/plat-light.png')";
        entSect.style.backgroundImage = "url('./img/ent-light.png')";
        concSect.style.backgroundImage = "url('./img/conc-light.png')";


        /* Images */
        cclDiag_link.href = './img/ccl-diag-light.png';
        cclDiag_img.src = './img/ccl-diag-light.png';

        arrow_link.href = './img/arrow-light.png';
        arrow_img.src = './img/arrow-light.png';

        wfm_link.href = './img/ccl6-7aL.png';
        wfm_img.src = './img/ccl6-7aL.png';

        evo3_link.href = './img/ccl6-overview-light.png';
        evo3_img.src = './img/ccl6-overview-light.png';


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