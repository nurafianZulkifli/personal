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

    const wo1_link = document.getElementById('wo1');
    const wo1_img = document.getElementById('wo1-img');

    const wo2_link = document.getElementById('wo2');
    const wo2_img = document.getElementById('wo2-img');

    const exit_link = document.getElementById('exit');
    const exit_img = document.getElementById('exit-img');

    const lift1_link = document.getElementById('lift1');
    const lift1_img = document.getElementById('lift1-img');

    const lift2_link = document.getElementById('lift2');
    const lift2_img = document.getElementById('lift2-img');

    const liftd_link = document.getElementById('liftd');
    const liftd_img = document.getElementById('liftd-img');

    const ed1_link = document.getElementById('ed1');
    const ed1_img = document.getElementById('ed1-img');

    const sn_link = document.getElementById('sn');
    const sn_img = document.getElementById('sn-img');

    const se_link = document.getElementById('se');
    const se_img = document.getElementById('se-img');

    const tt_link = document.getElementById('tt');
    const tt_img = document.getElementById('tt-img');

    const ttann_link = document.getElementById('ttann');
    const ttann_img = document.getElementById('ttann-img');

    const lsb_link = document.getElementById('lsb');
    const lsb_img = document.getElementById('lsb-img');

    const lsbann1_link = document.getElementById('lsbann1');
    const lsbann1_img = document.getElementById('lsbann1-img');

    const lsbann2_link = document.getElementById('lsbann2');
    const lsbann2_img = document.getElementById('lsbann2-img');

    const ed_link = document.getElementById('ed');
    const ed_img = document.getElementById('ed-img');

    const edann1_link = document.getElementById('edann1');
    const edann1_img = document.getElementById('edann1-img');

    const edann2_link = document.getElementById('edann2');
    const edann2_img = document.getElementById('edann2-img');

    const ts_link = document.getElementById('ts');
    const ts_img = document.getElementById('ts-img');

    const tsann1_link = document.getElementById('tsann1');
    const tsann1_img = document.getElementById('tsann1-img');

    const tsann2_link = document.getElementById('tsann2');
    const tsann2_img = document.getElementById('tsann2-img');

    const os_link = document.getElementById('os');
    const os_img = document.getElementById('os-img');

    const osann1_link = document.getElementById('osann1');
    const osann1_img = document.getElementById('osann1-img');

    const ud_link = document.getElementById('ud');
    const ud_img = document.getElementById('ud-img');

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

    const ic4_link = document.getElementById('ic4');
    const ic4_img = document.getElementById('ic4-img');

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
    const vid1 = document.getElementById('eicw-vid1');
    const vid1Source = vid1.querySelector('source');

    const vid2 = document.getElementById('eicw-vid2');
    const vid2Source = vid2.querySelector('source');

    const vid3 = document.getElementById('eicw-vid3');
    const vid3Source = vid3.querySelector('source');

    const vid4 = document.getElementById('eicw-vid4');
    const vid4Source = vid4.querySelector('source');

    const vid5 = document.getElementById('eicw-vid5');
    const vid5Source = vid5.querySelector('source');

    const vid6 = document.getElementById('eicw-vid6');
    const vid6Source = vid6.querySelector('source');

    const vid7 = document.getElementById('eicw-vid7');
    const vid7Source = vid7.querySelector('source');

    const vid8 = document.getElementById('eicw-vid8');
    const vid8Source = vid8.querySelector('source');

    const vid9 = document.getElementById('eicw2-vid1');
    const vid9Source = vid9.querySelector('source');

    const vid10 = document.getElementById('eicw2-vid2');
    const vid10Source = vid10.querySelector('source');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        coverSect.style.backgroundImage = "url('./img/cover-2-dark.png')";
        ciSect.style.backgroundImage = "url('./img/c-i-dark.png')";

        wo1_link.href = './img/wo1-dark.png';
        wo1_img.src = './img/wo1-dark.png';

        wo2_link.href = './img/wo2-dark.png';
        wo2_img.src = './img/wo2-dark.png';

        exit_link.href = './img/exit-dark.png';
        exit_img.src = './img/exit-dark.png';

        lift1_link.href = './img/lift-dark1.png';
        lift1_img.src = './img/lift-dark1.png';

        lift2_link.href = './img/lift-dark2.png';
        lift2_img.src = './img/lift-dark2.png';

        liftd_link.href = './img/liftd-dark.png';
        liftd_img.src = './img/liftd-dark.png';

        ed1_link.href = './img/ed1-dark.png';
        ed1_img.src = './img/ed1-dark.png';

        sn_link.href = './img/sn-dark.png';
        sn_img.src = './img/sn-dark.png';

        se_link.href = './img/se-dark.png';
        se_img.src = './img/se-dark.png';

        tt_link.href = './img/tt-dark.png';
        tt_img.src = './img/tt-dark.png';

        ttann_link.href = './img/ttann-dark.png';
        ttann_img.src = './img/ttann-dark.png';

        lsb_link.href = './img/lsb-dark.png';
        lsb_img.src = './img/lsb-dark.png';

        lsbann1_link.href = './img/lsbann1-dark.png';
        lsbann1_img.src = './img/lsbann1-dark.png';

        lsbann2_link.href = './img/lsbann2-dark.png';
        lsbann2_img.src = './img/lsbann2-dark.png';

        ed_link.href = './img/ed-dark.png';
        ed_img.src = './img/ed-dark.png';

        edann1_link.href = './img/edann1-dark.png';
        edann1_img.src = './img/edann1-dark.png';

        edann2_link.href = './img/edann2-dark.png';
        edann2_img.src = './img/edann2-dark.png';

        ts_link.href = './img/ts-dark.png';
        ts_img.src = './img/ts-dark.png';

        tsann1_link.href = './img/tsann1-dark.png';
        tsann1_img.src = './img/tsann1-dark.png';

        tsann2_link.href = './img/tsann2-dark.png';
        tsann2_img.src = './img/tsann2-dark.png';

        os_link.href = './img/os-dark.png';
        os_img.src = './img/os-dark.png';

        osann1_link.href = './img/osann1-dark.png';
        osann1_img.src = './img/osann1-dark.png';

        ud_link.href = './img/ud-dark.png';
        ud_img.src = './img/ud-dark.png';

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

        ic4_link.href = './img/ic4-dark.png';
        ic4_img.src = './img/ic4-dark.png';

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
        vid1Source.src = './img/eicw-vid1-dark.mp4';
        vid2Source.src = './img/eicw-vid2-dark.mp4';
        vid3Source.src = './img/eicw-vid3-dark.mp4';
        vid4Source.src = './img/eicw-vid4-dark.mp4';
        vid5Source.src = './img/eicw-vid5-dark.mp4';
        vid6Source.src = './img/eicw-vid6-dark.mp4';
        vid7Source.src = './img/eicw-vid7-dark.mp4';
        vid8Source.src = './img/eicw-vid8-dark.mp4';
        vid9Source.src = './img/eicw2-vid1-dark.mp4';
        vid10Source.src = './img/eicw2-vid2-dark.mp4';

    } else {
        coverSect.style.backgroundImage = "url('./img/cover-2-light.png')";
        ciSect.style.backgroundImage = "url('./img/c-i-light.png')";



        wo1_link.href = './img/wo1-light.png';
        wo1_img.src = './img/wo1-light.png';

        wo2_link.href = './img/wo2-light.png';
        wo2_img.src = './img/wo2-light.png';

        exit_link.href = './img/exit-light.png';
        exit_img.src = './img/exit-light.png';

        lift1_link.href = './img/lift-light1.png';
        lift1_img.src = './img/lift-light1.png';

        lift2_link.href = './img/lift-light2.png';
        lift2_img.src = './img/lift-light2.png';

        liftd_link.href = './img/liftd-light.png';
        liftd_img.src = './img/liftd-light.png';

        ed1_link.href = './img/ed1-light.png';
        ed1_img.src = './img/ed1-light.png';

        sn_link.href = './img/sn-light.png';
        sn_img.src = './img/sn-light.png';

        se_link.href = './img/se-light.png';
        se_img.src = './img/se-light.png';

        tt_link.href = './img/tt-light.png';
        tt_img.src = './img/tt-light.png';

        ttann_link.href = './img/ttann-light.png';
        ttann_img.src = './img/ttann-light.png';

        lsb_link.href = './img/lsb-light.png';
        lsb_img.src = './img/lsb-light.png';

        lsbann1_link.href = './img/lsbann1-light.png';
        lsbann1_img.src = './img/lsbann1-light.png';

        lsbann2_link.href = './img/lsbann2-light.png';
        lsbann2_img.src = './img/lsbann2-light.png';

        ed_link.href = './img/ed-light.png';
        ed_img.src = './img/ed-light.png';

        edann1_link.href = './img/edann1-light.png';
        edann1_img.src = './img/edann1-light.png';

        edann2_link.href = './img/edann2-light.png';
        edann2_img.src = './img/edann2-light.png';

        ts_link.href = './img/ts-light.png';
        ts_img.src = './img/ts-light.png';

        tsann1_link.href = './img/tsann1-light.png';
        tsann1_img.src = './img/tsann1-light.png';

        tsann2_link.href = './img/tsann2-light.png';
        tsann2_img.src = './img/tsann2-light.png';

        os_link.href = './img/os-light.png';
        os_img.src = './img/os-light.png';

        osann1_link.href = './img/osann1-light.png';
        osann1_img.src = './img/osann1-light.png';

        ud_link.href = './img/ud-light.png';
        ud_img.src = './img/ud-light.png';

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

        ic4_link.href = './img/ic4-light.png';
        ic4_img.src = './img/ic4-light.png';

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
        vid1Source.src = './img/eicw-vid1-light.mp4';
        vid2Source.src = './img/eicw-vid2-light.mp4';
        vid3Source.src = './img/eicw-vid3-light.mp4';
        vid4Source.src = './img/eicw-vid4-light.mp4';
        vid5Source.src = './img/eicw-vid5-light.mp4';
        vid6Source.src = './img/eicw-vid6-light.mp4';
        vid7Source.src = './img/eicw-vid7-light.mp4';
        vid8Source.src = './img/eicw-vid8-light.mp4';
        vid9Source.src = './img/eicw2-vid1-light.mp4';
        vid10Source.src = './img/eicw2-vid2-light.mp4';
    }
    vid1.load();
    vid2.load();
    vid3.load();
    vid4.load();
    vid5.load();
    vid6.load();
    vid7.load();
    vid8.load();
    vid9.load();
    vid10.load();
}


// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});