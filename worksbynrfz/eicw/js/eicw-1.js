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
    const ciSect = document.getElementById('ci-img');
    const eiaSect = document.getElementById('eia-img');

    /* Images */
    const tf_link = document.getElementById('tf');
    const tf_img = document.getElementById('tf-img');

    const pl_link = document.getElementById('pl');
    const pl_img = document.getElementById('pl-img');

    const pl2_link = document.getElementById('pl2');
    const pl2_img = document.getElementById('pl2-img');

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

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

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

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-dark.png')";
        ciSect.style.backgroundImage = "url('../../img/eicw/c-i-dark.png')";
        eiaSect.style.backgroundImage = "url('../../img/eicw/eia-dark.png')";

        /* Images */
        tf_link.href = '../../img/eicw/typeface-dark.png';
        tf_img.src = '../../img/eicw/typeface-dark.png';

        pl_link.href = '../../img/eicw/palettes-dark.png';
        pl_img.src = '../../img/eicw/palettes-dark.png';

        pl2_link.href = '../../img/eicw/palettes-dark2.png';
        pl2_img.src = '../../img/eicw/palettes-dark2.png';

        wo1_link.href = '../../img/eicw/wo1-dark.png';
        wo1_img.src = '../../img/eicw/wo1-dark.png';

        wo2_link.href = '../../img/eicw/wo2-dark.png';
        wo2_img.src = '../../img/eicw/wo2-dark.png';

        exit_link.href = '../../img/eicw/exit-dark.png';
        exit_img.src = '../../img/eicw/exit-dark.png';

        lift1_link.href = '../../img/eicw/lift-dark1.png';
        lift1_img.src = '../../img/eicw/lift-dark1.png';

        lift2_link.href = '../../img/eicw/lift-dark2.png';
        lift2_img.src = '../../img/eicw/lift-dark2.png';

        liftd_link.href = '../../img/eicw/liftd-dark.png';
        liftd_img.src = '../../img/eicw/liftd-dark.png';

        ed1_link.href = '../../img/eicw/ed1-dark.png';
        ed1_img.src = '../../img/eicw/ed1-dark.png';

        sn_link.href = '../../img/eicw/sn-dark.png';
        sn_img.src = '../../img/eicw/sn-dark.png';

        se_link.href = '../../img/eicw/se-dark.png';
        se_img.src = '../../img/eicw/se-dark.png';

        evo_link.href = '../../img/eicw/evo-dark.png';
        evo_img.src = '../../img/eicw/evo-dark.png';

        /* Videos */
        vid1Source.src = '../../img/eicw/eicw-vid1-dark.mp4';
        vid2Source.src = '../../img/eicw/eicw-vid2-dark.mp4';
        vid3Source.src = '../../img/eicw/eicw-vid3-dark.mp4';
        vid4Source.src = '../../img/eicw/eicw-vid4-dark.mp4';
        vid5Source.src = '../../img/eicw/eicw-vid5-dark.mp4';
        vid6Source.src = '../../img/eicw/eicw-vid6-dark.mp4';
        vid7Source.src = '../../img/eicw/eicw-vid7-dark.mp4';
        vid8Source.src = '../../img/eicw/eicw-vid8-dark.mp4';

    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-light.png')";
        ciSect.style.backgroundImage = "url('../../img/eicw/c-i-light.png')";
        eiaSect.style.backgroundImage = "url('../../img/eicw/eia-light.png')";

        /* Images */
        tf_link.href = '../../img/eicw/typeface-light.png';
        tf_img.src = '../../img/eicw/typeface-light.png';

        pl_link.href = '../../img/eicw/palettes-light.png';
        pl_img.src = '../../img/eicw/palettes-light.png';

        pl2_link.href = '../../img/eicw/palettes-light2.png';
        pl2_img.src = '../../img/eicw/palettes-light2.png';

        wo1_link.href = '../../img/eicw/wo1-light.png';
        wo1_img.src = '../../img/eicw/wo1-light.png';

        wo2_link.href = '../../img/eicw/wo2-light.png';
        wo2_img.src = '../../img/eicw/wo2-light.png';

        exit_link.href = '../../img/eicw/exit-light.png';
        exit_img.src = '../../img/eicw/exit-light.png';

        lift1_link.href = '../../img/eicw/lift-light1.png';
        lift1_img.src = '../../img/eicw/lift-light1.png';

        lift2_link.href = '../../img/eicw/lift-light2.png';
        lift2_img.src = '../../img/eicw/lift-light2.png';

        liftd_link.href = '../../img/eicw/liftd-light.png';
        liftd_img.src = '../../img/eicw/liftd-light.png';

        ed1_link.href = '../../img/eicw/ed1-light.png';
        ed1_img.src = '../../img/eicw/ed1-light.png';

        sn_link.href = '../../img/eicw/sn-light.png';
        sn_img.src = '../../img/eicw/sn-light.png';

        se_link.href = '../../img/eicw/se-light.png';
        se_img.src = '../../img/eicw/se-light.png';

        evo_link.href = '../../img/eicw/evo-light.png';
        evo_img.src = '../../img/eicw/evo-light.png';

        /* Videos */
        vid1Source.src = '../../img/eicw/eicw-vid1-light.mp4';
        vid2Source.src = '../../img/eicw/eicw-vid2-light.mp4';
        vid3Source.src = '../../img/eicw/eicw-vid3-light.mp4';
        vid4Source.src = '../../img/eicw/eicw-vid4-light.mp4';
        vid5Source.src = '../../img/eicw/eicw-vid5-light.mp4';
        vid6Source.src = '../../img/eicw/eicw-vid6-light.mp4';
        vid7Source.src = '../../img/eicw/eicw-vid7-light.mp4';
        vid8Source.src = '../../img/eicw/eicw-vid8-light.mp4';
    }
    vid1.load();
    vid2.load();
    vid3.load();
    vid4.load();
    vid5.load();
    vid6.load();
    vid7.load();
    vid8.load();
}