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
    const lb_link = document.getElementById('lb1');
    const lb_img = document.getElementById('lb1-img');



    /* Videos */
    // const vid1 = document.getElementById('eicw-vid1');
    // const vid1Source = vid1.querySelector('source');



    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-dark.png')";
        iuSect.style.backgroundImage = "url('../../img/eicw/iu-dark.png')";

        /* Images */
        lb_link.href = '../../img/eicw/labels-dark1.png';
        lb_img.src = '../../img/eicw/labels-dark1.png';



        /* Videos */
        // vid1Source.src = '../../img/eicw/eicw-vid1-dark.mp4';


    } else {
        /* Banners */
        coverSect.style.backgroundImage = "url('../../img/eicw/cover-light.png')";
        iuSect.style.backgroundImage = "url('../../img/eicw/iu-light.png')";

        /* Images */
        lb_link.href = '../../img/eicw/labels-light1.png';
        lb_img.src = '../../img/eicw/labels-light1.png';


        /* Videos */
        // vid1Source.src = '../../img/eicw/eicw-vid1-light.mp4';

    }
    // vid1.load();

}