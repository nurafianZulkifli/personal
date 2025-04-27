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
    const ieSect = document.getElementById('ie-img');

    /* Images */
    const lb1_link = document.getElementById('lb1');
    const lb1_img = document.getElementById('lb1-img');

    const lb2_link = document.getElementById('lb2');
    const lb2_img = document.getElementById('lb2-img');

    const ic1_link = document.getElementById('ic1');
    const ic1_img = document.getElementById('ic1-img');

    const ic2_link = document.getElementById('ic2');
    const ic2_img = document.getElementById('ic2-img');

    const ic3_link = document.getElementById('ic3');
    const ic3_img = document.getElementById('ic3-img');

    const sne1_link = document.getElementById('sne1');
    const sne1_img = document.getElementById('sne1-img');

    const sne2_link = document.getElementById('sne2');
    const sne2_img = document.getElementById('sne2-img');

    const sne3_link = document.getElementById('sne3');
    const sne3_img = document.getElementById('sne3-img');

    const evo2_link = document.getElementById('evo2');
    const evo2_img = document.getElementById('evo2-img');

    const ep1_link = document.getElementById('ep1');
    const ep1_img = document.getElementById('ep1-img');

    const ep2_link = document.getElementById('ep2');
    const ep2_img = document.getElementById('ep2-img');

    const ms1_link = document.getElementById('ms1');
    const ms1_img = document.getElementById('ms1-img');

    const ms2_link = document.getElementById('ms2');
    const ms2_img = document.getElementById('ms2-img');

    const ms3_link = document.getElementById('ms3');
    const ms3_img = document.getElementById('ms3-img');

    const ms4_link = document.getElementById('ms4');
    const ms4_img = document.getElementById('ms4-img');

    const ms5_link = document.getElementById('ms5');
    const ms5_img = document.getElementById('ms5-img');


    /* Videos */
    const vid1 = document.getElementById('eicw2-vid1');
    const vid1Source = vid1.querySelector('source');

    const vid2 = document.getElementById('eicw2-vid2');
    const vid2Source = vid2.querySelector('source');



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-dark.png')";
        iuSect.style.backgroundImage = "url('./img/iu-dark.png')";
        ieSect.style.backgroundImage = "url('./img/ie-dark.png')";

        /* Images */
        lb1_link.href = './img/lb1-dark.png';
        lb1_img.src = './img/lb1-dark.png';

        lb2_link.href = './img/lb2-dark.png';
        lb2_img.src = './img/lb2-dark.png';

        ic1_link.href = './img/ic1-dark.png';
        ic1_img.src = './img/ic1-dark.png';

        ic2_link.href = './img/ic2-dark.png';
        ic2_img.src = './img/ic2-dark.png';

        ic3_link.href = './img/ic3-dark.png';
        ic3_img.src = './img/ic3-dark.png';

        sne1_link.href = './img/sne1-dark.png';
        sne1_img.src = './img/sne1-dark.png';

        sne2_link.href = './img/sne2-dark.png';
        sne2_img.src = './img/sne2-dark.png';

        sne3_link.href = './img/sne3-dark.png';
        sne3_img.src = './img/sne3-dark.png';

        evo2_link.href = './img/evo2-dark.png';
        evo2_img.src = './img/evo2-dark.png';

        ep1_link.href = './img/ep1-dark.png';
        ep1_img.src = './img/ep1-dark.png';

        ep2_link.href = './img/ep2-dark.png';
        ep2_img.src = './img/ep2-dark.png';

        ms1_link.href = './img/ms1-dark.png';
        ms1_img.src = './img/ms1-dark.png';

        ms2_link.href = './img/ms2-dark.png';
        ms2_img.src = './img/ms2-dark.png';

        ms3_link.href = './img/ms3-dark.png';
        ms3_img.src = './img/ms3-dark.png';

        ms4_link.href = './img/ms4-dark.png';
        ms4_img.src = './img/ms4-dark.png';

        ms5_link.href = './img/ms5-dark.png';
        ms5_img.src = './img/ms5-dark.png';

        /* Videos */
        vid1Source.src = './img/eicw2-vid1-dark.mp4';
        vid2Source.src = './img/eicw2-vid2-dark.mp4';

    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('./img/cover-light.png')";
        iuSect.style.backgroundImage = "url('./img/iu-light.png')";
        ieSect.style.backgroundImage = "url('./img/ie-light.png')";

        /* Images */
        lb1_link.href = './img/lb1-light.png';
        lb1_img.src = './img/lb1-light.png';

        lb2_link.href = './img/lb2-light.png';
        lb2_img.src = './img/lb2-light.png';

        ic1_link.href = './img/ic1-light.png';
        ic1_img.src = './img/ic1-light.png';

        ic2_link.href = './img/ic2-light.png';
        ic2_img.src = './img/ic2-light.png';

        ic3_link.href = './img/ic3-light.png';
        ic3_img.src = './img/ic3-light.png';

        sne1_link.href = './img/sne1-light.png';
        sne1_img.src = './img/sne1-light.png';

        sne2_link.href = './img/sne2-light.png';
        sne2_img.src = './img/sne2-light.png';

        sne3_link.href = './img/sne3-light.png';
        sne3_img.src = './img/sne3-light.png';

        evo2_link.href = './img/evo2-light.png';
        evo2_img.src = './img/evo2-light.png';

        ep1_link.href = './img/ep1-light.png';
        ep1_img.src = './img/ep1-light.png';

        ep2_link.href = './img/ep2-light.png';
        ep2_img.src = './img/ep2-light.png';

        ms1_link.href = './img/ms1-light.png';
        ms1_img.src = './img/ms1-light.png';

        ms2_link.href = './img/ms2-light.png';
        ms2_img.src = './img/ms2-light.png';

        ms3_link.href = './img/ms3-light.png';
        ms3_img.src = './img/ms3-light.png';

        ms4_link.href = './img/ms4-light.png';
        ms4_img.src = './img/ms4-light.png';

        ms5_link.href = './img/ms5-light.png';
        ms5_img.src = './img/ms5-light.png';

        /* Videos */
        vid1Source.src = './img/eicw2-vid1-light.mp4';
        vid2Source.src = './img/eicw2-vid2-light.mp4';

    }
    vid1.load();
    vid2.load();

}

document.addEventListener('DOMContentLoaded', function () {
    var videos = document.querySelectorAll('video');
    videos.forEach(function (video) {
        video.play().catch(function (error) {
            console.log('Autoplay was prevented:', error);
        });
    });
});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});