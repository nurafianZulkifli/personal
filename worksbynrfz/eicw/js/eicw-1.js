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

    const es_link = document.getElementById('es');
    const es_img = document.getElementById('es-img');

    const cp_link = document.getElementById('cp');
    const cp_img = document.getElementById('cp-img');

    const ls_link = document.getElementById('ls');
    const ls_img = document.getElementById('ls-img');

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

    const wf1_link = document.getElementById('wf1');
    const wf1_img = document.getElementById('wf1-img');

    const wf2_link = document.getElementById('wf2');
    const wf2_img = document.getElementById('wf2-img');

    const ed_link = document.getElementById('ed');
    const ed_img = document.getElementById('ed-img');

    const edann1_link = document.getElementById('edann1');
    const edann1_img = document.getElementById('edann1-img');
    
    const edann2_link = document.getElementById('edann2');
    const edann2_img = document.getElementById('edann2-img');

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

        es_link.href = '../../img/eicw/es-dark.png';
        es_img.src = '../../img/eicw/es-dark.png';

        cp_link.href = '../../img/eicw/cp-dark.png';
        cp_img.src = '../../img/eicw/cp-dark.png';

        ls_link.href = '../../img/eicw/ls-dark.png';
        ls_img.src = '../../img/eicw/ls-dark.png';

        tt_link.href = '../../img/eicw/tt-dark.png';
        tt_img.src = '../../img/eicw/tt-dark.png';

        ttann_link.href = '../../img/eicw/ttann-dark.png';
        ttann_img.src = '../../img/eicw/ttann-dark.png';

        lsb_link.href = '../../img/eicw/lsb-dark.png';
        lsb_img.src = '../../img/eicw/lsb-dark.png';

        lsbann1_link.href = '../../img/eicw/lsbann1-dark.png';
        lsbann1_img.src = '../../img/eicw/lsbann1-dark.png';

        lsbann2_link.href = '../../img/eicw/lsbann2-dark.png';
        lsbann2_img.src = '../../img/eicw/lsbann2-dark.png';

        wf1_link.href = '../../img/eicw/wf1-dark.png';
        wf1_img.src = '../../img/eicw/wf1-dark.png';

        wf2_link.href = '../../img/eicw/wf2-dark.png';
        wf2_img.src = '../../img/eicw/wf2-dark.png';

        ed_link.href = '../../img/eicw/ed-dark.png';
        ed_img.src = '../../img/eicw/ed-dark.png';

        edann1_link.href = '../../img/eicw/edann1-dark.png';
        edann1_img.src = '../../img/eicw/edann1-dark.png';

        edann2_link.href = '../../img/eicw/edann2-dark.png';
        edann2_img.src = '../../img/eicw/edann2-dark.png';

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

        es_link.href = '../../img/eicw/es-light.png';
        es_img.src = '../../img/eicw/es-light.png';

        cp_link.href = '../../img/eicw/cp-light.png';
        cp_img.src = '../../img/eicw/cp-light.png';

        ls_link.href = '../../img/eicw/ls-light.png';
        ls_img.src = '../../img/eicw/ls-light.png';

        tt_link.href = '../../img/eicw/tt-light.png';
        tt_img.src = '../../img/eicw/tt-light.png';

        ttann_link.href = '../../img/eicw/ttann-light.png';
        ttann_img.src = '../../img/eicw/ttann-light.png';

        lsb_link.href = '../../img/eicw/lsb-light.png';
        lsb_img.src = '../../img/eicw/lsb-light.png';

        lsbann1_link.href = '../../img/eicw/lsbann1-light.png';
        lsbann1_img.src = '../../img/eicw/lsbann1-light.png';

        lsbann2_link.href = '../../img/eicw/lsbann2-light.png';
        lsbann2_img.src = '../../img/eicw/lsbann2-light.png';

        wf1_link.href = '../../img/eicw/wf1-light.png';
        wf1_img.src = '../../img/eicw/wf1-light.png';

        wf2_link.href = '../../img/eicw/wf2-light.png';
        wf2_img.src = '../../img/eicw/wf2-light.png';

        ed_link.href = '../../img/eicw/ed-light.png';
        ed_img.src = '../../img/eicw/ed-light.png';

        edann1_link.href = '../../img/eicw/edann1-light.png';
        edann1_img.src = '../../img/eicw/edann1-light.png';

        edann2_link.href = '../../img/eicw/edann2-light.png';
        edann2_img.src = '../../img/eicw/edann2-light.png';


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