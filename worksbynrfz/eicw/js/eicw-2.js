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


    /* Videos */
    const vid1 = document.getElementById('eicw2-vid1');
    const vid1Source = vid1.querySelector('source');

    const vid2 = document.getElementById('eicw2-vid2');
    const vid2Source = vid2.querySelector('source');



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-dark.png')";
        iuSect.style.backgroundImage = "url('../../img/eicw/iu-dark.png')";

        /* Images */
        lb1_link.href = '../../img/eicw/lb1-dark.png';
        lb1_img.src = '../../img/eicw/lb1-dark.png';

        lb2_link.href = '../../img/eicw/lb2-dark.png';
        lb2_img.src = '../../img/eicw/lb2-dark.png';

        ic1_link.href = '../../img/eicw/ic1-dark.png';
        ic1_img.src = '../../img/eicw/ic1-dark.png';

        ic2_link.href = '../../img/eicw/ic2-dark.png';
        ic2_img.src = '../../img/eicw/ic2-dark.png';

        ic3_link.href = '../../img/eicw/ic3-dark.png';
        ic3_img.src = '../../img/eicw/ic3-dark.png';

        sne1_link.href = '../../img/eicw/sne1-dark.png';
        sne1_img.src = '../../img/eicw/sne1-dark.png';

        sne2_link.href = '../../img/eicw/sne2-dark.png';
        sne2_img.src = '../../img/eicw/sne2-dark.png';

        sne3_link.href = '../../img/eicw/sne3-dark.png';
        sne3_img.src = '../../img/eicw/sne3-dark.png';


        /* Videos */
        vid1Source.src = '../../img/eicw/eicw2-vid1-dark.mp4';
        vid2Source.src = '../../img/eicw/eicw2-vid2-dark.mp4';

    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-light.png')";
        iuSect.style.backgroundImage = "url('../../img/eicw/iu-light.png')";

        /* Images */
        lb1_link.href = '../../img/eicw/lb1-light.png';
        lb1_img.src = '../../img/eicw/lb1-light.png';

        lb2_link.href = '../../img/eicw/lb2-light.png';
        lb2_img.src = '../../img/eicw/lb2-light.png';

        ic1_link.href = '../../img/eicw/ic1-light.png';
        ic1_img.src = '../../img/eicw/ic1-light.png';

        ic2_link.href = '../../img/eicw/ic2-light.png';
        ic2_img.src = '../../img/eicw/ic2-light.png';

        ic3_link.href = '../../img/eicw/ic3-light.png';
        ic3_img.src = '../../img/eicw/ic3-light.png';

        sne1_link.href = '../../img/eicw/sne1-light.png';
        sne1_img.src = '../../img/eicw/sne1-light.png';

        sne2_link.href = '../../img/eicw/sne2-light.png';
        sne2_img.src = '../../img/eicw/sne2-light.png';

        sne3_link.href = '../../img/eicw/sne3-light.png';
        sne3_img.src = '../../img/eicw/sne3-light.png';


        /* Videos */
        vid1Source.src = '../../img/eicw/eicw2-vid1-light.mp4';
        vid2Source.src = '../../img/eicw/eicw2-vid2-light.mp4';

    }
    vid1.load();
    vid2.load();

}