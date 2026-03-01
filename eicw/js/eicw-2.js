/* Dark Mode Functionality for Individual Pages */

// Check for theme parameter in URL (for cross-domain sync from worksbynrfz.com)
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    if (themeParam && ['light', 'dark', 'system'].includes(themeParam)) {
        localStorage.setItem('theme-preference', themeParam);
    }
})();

// Use window properties if they exist from initial script, otherwise create them
if (typeof window._themePreference === 'undefined') {
    window._themePreference = localStorage.getItem('theme-preference') || 'system';
}
if (typeof window._prefersDark === 'undefined') {
    window._prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Determine if dark mode should be active
function shouldBeDark() {
    if (window._themePreference === 'dark') return true;
    if (window._themePreference === 'light') return false;
    if (window._themePreference === 'system') return window._prefersDark;
    return window._prefersDark; // Default to system preference
}

// Apply theme on page load
if (shouldBeDark()) {
    document.body.classList.add('dark-mode');
    updateThemeIcon('dark');
    updateHrefForDarkMode();
} else {
    updateThemeIcon('light');
}

// Listen to theme toggle clicks
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    function cycleTheme() {
        const themes = ['light', 'dark', 'system'];
        const currentTheme = window._themePreference || 'system';
        const currentIndex = themes.indexOf(currentTheme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        applyTheme(nextTheme);
    }
    
    function applyTheme(preference) {
        localStorage.setItem('theme-preference', preference);
        window._themePreference = preference;
        
        if (preference === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcon('dark');
        } else if (preference === 'light') {
            document.body.classList.remove('dark-mode');
            updateThemeIcon('light');
        } else if (preference === 'system') {
            if (window._prefersDark) {
                document.body.classList.add('dark-mode');
                updateThemeIcon('dark');
            } else {
                document.body.classList.remove('dark-mode');
                updateThemeIcon('light');
            }
        }
    }
    
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', (e) => {
            e.preventDefault();
            cycleTheme();
        });
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', (e) => {
            e.preventDefault();
            cycleTheme();
        });
    }
});

// Follow system theme changes when set to 'system' preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    window._prefersDark = e.matches;
    if (localStorage.getItem('theme-preference') === 'system' || localStorage.getItem('theme-preference') === null) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            updateThemeIcon('dark');
        } else {
            document.body.classList.remove('dark-mode');
            updateThemeIcon('light');
        }
    }
});

// Get both toggle buttons (for backward compatibility with mobile views)
const toggleButtonDesktop = document.getElementById('dark-mode-toggle-desktop');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');

// Function to update the theme icon and text with animation
function updateThemeIcon(theme) {
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const themeTextDesktop = document.getElementById('theme-text-desktop');
    const themeTextMobile = document.getElementById('theme-text-mobile');
    const preference = window._themePreference || 'system';

    // Add animation class to both icons
    if (themeIconDesktop) themeIconDesktop.classList.add('animate');
    if (themeIconMobile) themeIconMobile.classList.add('animate');

    // Update the icon based on the theme
    if (theme === 'dark') {
        if (themeIconDesktop) {
            themeIconDesktop.classList.remove('fa-sun-bright');
            themeIconDesktop.classList.add('fa-moon-stars');
        }
        if (themeIconMobile) {
            themeIconMobile.classList.remove('fa-sun-bright');
            themeIconMobile.classList.add('fa-moon-stars');
        }
    } else {
        if (themeIconDesktop) {
            themeIconDesktop.classList.remove('fa-moon-stars');
            themeIconDesktop.classList.add('fa-sun-bright');
        }
        if (themeIconMobile) {
            themeIconMobile.classList.remove('fa-moon-stars');
            themeIconMobile.classList.add('fa-sun-bright');
        }
    }
    
    // Update display text
    let displayText = 'Display: ';
    if (preference === 'light') {
        displayText += 'Light';
    } else if (preference === 'dark') {
        displayText += 'Dark';
    } else if (preference === 'system') {
        displayText += 'Follow System';
    }
    
    if (themeTextDesktop) themeTextDesktop.textContent = displayText;
    if (themeTextMobile) themeTextMobile.textContent = displayText;

    // Remove the animation class after the animation ends
    setTimeout(() => {
        if (themeIconDesktop) themeIconDesktop.classList.remove('animate');
        if (themeIconMobile) themeIconMobile.classList.remove('animate');
    }, 300); // Match the duration of the CSS transition
}



function updateHrefForDarkMode() {
    /* Existing logic for updating banners, images, and videos */
    const coverSect = document.getElementById('cv-img-2');
    const ciSect = document.getElementById('ci-img');
    const dsbSect = document.getElementById('dsb-img');
    const iuSect = document.getElementById('iu-img');
    const ieSect = document.getElementById('ie-img');

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
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-2-dark.png')";
        if (ciSect) ciSect.style.backgroundImage = "url('./img/c-i-dark.png')";
        if (dsbSect) dsbSect.style.backgroundImage = "url('./img/dsb-dark.png')";
        if (iuSect) iuSect.style.backgroundImage = "url('./img/iu-dark.png')";
        if (ieSect) ieSect.style.backgroundImage = "url('./img/ie-dark.png')";

        if (wo1_link) wo1_link.href = './img/wo1-dark.png';
        if (wo1_img) wo1_img.src = './img/wo1-dark.png';

        if (wo2_link) wo2_link.href = './img/wo2-dark.png';
        if (wo2_img) wo2_img.src = './img/wo2-dark.png';

        if (exit_link) exit_link.href = './img/exit-dark.png';
        if (exit_img) exit_img.src = './img/exit-dark.png';

        if (lift1_link) lift1_link.href = './img/lift-dark1.png';
        if (lift1_img) lift1_img.src = './img/lift-dark1.png';

        if (lift2_link) lift2_link.href = './img/lift-dark2.png';
        if (lift2_img) lift2_img.src = './img/lift-dark2.png';

        if (liftd_link) liftd_link.href = './img/liftd-dark.png';
        if (liftd_img) liftd_img.src = './img/liftd-dark.png';

        if (ed1_link) ed1_link.href = './img/ed1-dark.png';
        if (ed1_img) ed1_img.src = './img/ed1-dark.png';

        if (sn_link) sn_link.href = './img/sn-dark.png';
        if (sn_img) sn_img.src = './img/sn-dark.png';

        if (se_link) se_link.href = './img/se-dark.png';
        if (se_img) se_img.src = './img/se-dark.png';

        if (tt_link) tt_link.href = './img/tt-dark.png';
        if (tt_img) tt_img.src = './img/tt-dark.png';

        if (ttann_link) ttann_link.href = './img/ttann-dark.png';
        if (ttann_img) ttann_img.src = './img/ttann-dark.png';

        if (lsb_link) lsb_link.href = './img/lsb-dark.png';
        if (lsb_img) lsb_img.src = './img/lsb-dark.png';

        if (lsbann1_link) lsbann1_link.href = './img/lsbann1-dark.png';
        if (lsbann1_img) lsbann1_img.src = './img/lsbann1-dark.png';

        if (lsbann2_link) lsbann2_link.href = './img/lsbann2-dark.png';
        if (lsbann2_img) lsbann2_img.src = './img/lsbann2-dark.png';

        if (ed_link) ed_link.href = './img/ed-dark.png';
        if (ed_img) ed_img.src = './img/ed-dark.png';

        if (edann1_link) edann1_link.href = './img/edann1-dark.png';
        if (edann1_img) edann1_img.src = './img/edann1-dark.png';

        if (edann2_link) edann2_link.href = './img/edann2-dark.png';
        if (edann2_img) edann2_img.src = './img/edann2-dark.png';

        if (ts_link) ts_link.href = './img/ts-dark.png';
        if (ts_img) ts_img.src = './img/ts-dark.png';

        if (tsann1_link) tsann1_link.href = './img/tsann1-dark.png';
        if (tsann1_img) tsann1_img.src = './img/tsann1-dark.png';

        if (tsann2_link) tsann2_link.href = './img/tsann2-dark.png';
        if (tsann2_img) tsann2_img.src = './img/tsann2-dark.png';

        if (os_link) os_link.href = './img/os-dark.png';
        if (os_img) os_img.src = './img/os-dark.png';

        if (osann1_link) osann1_link.href = './img/osann1-dark.png';
        if (osann1_img) osann1_img.src = './img/osann1-dark.png';

        if (ud_link) ud_link.href = './img/ud-dark.png';
        if (ud_img) ud_img.src = './img/ud-dark.png';

        if (lb1_link) lb1_link.href = './img/lb1-dark.png';
        if (lb1_img) lb1_img.src = './img/lb1-dark.png';

        if (lb2_link) lb2_link.href = './img/lb2-dark.png';
        if (lb2_img) lb2_img.src = './img/lb2-dark.png';

        if (ic1_link) ic1_link.href = './img/ic1-dark.png';
        if (ic1_img) ic1_img.src = './img/ic1-dark.png';

        if (ic2_link) ic2_link.href = './img/ic2-dark.png';
        if (ic2_img) ic2_img.src = './img/ic2-dark.png';

        if (ic3_link) ic3_link.href = './img/ic3-dark.png';
        if (ic3_img) ic3_img.src = './img/ic3-dark.png';

        if (ic4_link) ic4_link.href = './img/ic4-dark.png';
        if (ic4_img) ic4_img.src = './img/ic4-dark.png';

        if (sne1_link) sne1_link.href = './img/sne1-dark.png';
        if (sne1_img) sne1_img.src = './img/sne1-dark.png';

        if (sne2_link) sne2_link.href = './img/sne2-dark.png';
        if (sne2_img) sne2_img.src = './img/sne2-dark.png';

        if (sne3_link) sne3_link.href = './img/sne3-dark.png';
        if (sne3_img) sne3_img.src = './img/sne3-dark.png';

        if (evo2_link) evo2_link.href = './img/evo2-dark.png';
        if (evo2_img) evo2_img.src = './img/evo2-dark.png';

        if (ep1_link) ep1_link.href = './img/ep1-dark.png';
        if (ep1_img) ep1_img.src = './img/ep1-dark.png';

        if (ep2_link) ep2_link.href = './img/ep2-dark.png';
        if (ep2_img) ep2_img.src = './img/ep2-dark.png';

        if (ms1_link) ms1_link.href = './img/ms1-dark.png';
        if (ms1_img) ms1_img.src = './img/ms1-dark.png';

        if (ms2_link) ms2_link.href = './img/ms2-dark.png';
        if (ms2_img) ms2_img.src = './img/ms2-dark.png';

        if (ms3_link) ms3_link.href = './img/ms3-dark.png';
        if (ms3_img) ms3_img.src = './img/ms3-dark.png';

        if (ms4_link) ms4_link.href = './img/ms4-dark.png';
        if (ms4_img) ms4_img.src = './img/ms4-dark.png';

        if (ms5_link) ms5_link.href = './img/ms5-dark.png';
        if (ms5_img) ms5_img.src = './img/ms5-dark.png';

        /* Videos */
        if (vid1Source) vid1Source.src = './img/eicw-vid1-dark.mp4';
        if (vid2Source) vid2Source.src = './img/eicw-vid2-dark.mp4';
        if (vid3Source) vid3Source.src = './img/eicw-vid3-dark.mp4';
        if (vid4Source) vid4Source.src = './img/eicw-vid4-dark.mp4';
        if (vid5Source) vid5Source.src = './img/eicw-vid5-dark.mp4';
        if (vid6Source) vid6Source.src = './img/eicw-vid6-dark.mp4';
        if (vid7Source) vid7Source.src = './img/eicw-vid7-dark.mp4';
        if (vid8Source) vid8Source.src = './img/eicw-vid8-dark.mp4';
        if (vid9Source) vid9Source.src = './img/eicw2-vid1-dark.mp4';
        if (vid10Source) vid10Source.src = './img/eicw2-vid2-dark.mp4';

    } else {
        if (coverSect) coverSect.style.backgroundImage = "url('./img/cover-2-light.png')";
        if (ciSect) ciSect.style.backgroundImage = "url('./img/c-i-light.png')";
        if (dsbSect) dsbSect.style.backgroundImage = "url('./img/dsb-light.png')";
        if (iuSect) iuSect.style.backgroundImage = "url('./img/iu-light.png')";
        if (ieSect) ieSect.style.backgroundImage = "url('./img/ie-light.png')";

        if (wo1_link) wo1_link.href = './img/wo1-light.png';
        if (wo1_img) wo1_img.src = './img/wo1-light.png';

        if (wo2_link) wo2_link.href = './img/wo2-light.png';
        if (wo2_img) wo2_img.src = './img/wo2-light.png';

        if (exit_link) exit_link.href = './img/exit-light.png';
        if (exit_img) exit_img.src = './img/exit-light.png';

        if (lift1_link) lift1_link.href = './img/lift-light1.png';
        if (lift1_img) lift1_img.src = './img/lift-light1.png';

        if (lift2_link) lift2_link.href = './img/lift-light2.png';
        if (lift2_img) lift2_img.src = './img/lift-light2.png';

        if (liftd_link) liftd_link.href = './img/liftd-light.png';
        if (liftd_img) liftd_img.src = './img/liftd-light.png';

        if (ed1_link) ed1_link.href = './img/ed1-light.png';
        if (ed1_img) ed1_img.src = './img/ed1-light.png';

        if (sn_link) sn_link.href = './img/sn-light.png';
        if (sn_img) sn_img.src = './img/sn-light.png';

        if (se_link) se_link.href = './img/se-light.png';
        if (se_img) se_img.src = './img/se-light.png';

        if (tt_link) tt_link.href = './img/tt-light.png';
        if (tt_img) tt_img.src = './img/tt-light.png';

        if (ttann_link) ttann_link.href = './img/ttann-light.png';
        if (ttann_img) ttann_img.src = './img/ttann-light.png';

        if (lsb_link) lsb_link.href = './img/lsb-light.png';
        if (lsb_img) lsb_img.src = './img/lsb-light.png';

        if (lsbann1_link) lsbann1_link.href = './img/lsbann1-light.png';
        if (lsbann1_img) lsbann1_img.src = './img/lsbann1-light.png';

        if (lsbann2_link) lsbann2_link.href = './img/lsbann2-light.png';
        if (lsbann2_img) lsbann2_img.src = './img/lsbann2-light.png';

        if (ed_link) ed_link.href = './img/ed-light.png';
        if (ed_img) ed_img.src = './img/ed-light.png';

        if (edann1_link) edann1_link.href = './img/edann1-light.png';
        if (edann1_img) edann1_img.src = './img/edann1-light.png';

        if (edann2_link) edann2_link.href = './img/edann2-light.png';
        if (edann2_img) edann2_img.src = './img/edann2-light.png';

        if (ts_link) ts_link.href = './img/ts-light.png';
        if (ts_img) ts_img.src = './img/ts-light.png';

        if (tsann1_link) tsann1_link.href = './img/tsann1-light.png';
        if (tsann1_img) tsann1_img.src = './img/tsann1-light.png';

        if (tsann2_link) tsann2_link.href = './img/tsann2-light.png';
        if (tsann2_img) tsann2_img.src = './img/tsann2-light.png';

        if (os_link) os_link.href = './img/os-light.png';
        if (os_img) os_img.src = './img/os-light.png';

        if (osann1_link) osann1_link.href = './img/osann1-light.png';
        if (osann1_img) osann1_img.src = './img/osann1-light.png';

        if (ud_link) ud_link.href = './img/ud-light.png';
        if (ud_img) ud_img.src = './img/ud-light.png';

        if (lb1_link) lb1_link.href = './img/lb1-light.png';
        if (lb1_img) lb1_img.src = './img/lb1-light.png';

        if (lb2_link) lb2_link.href = './img/lb2-light.png';
        if (lb2_img) lb2_img.src = './img/lb2-light.png';

        if (ic1_link) ic1_link.href = './img/ic1-light.png';
        if (ic1_img) ic1_img.src = './img/ic1-light.png';

        if (ic2_link) ic2_link.href = './img/ic2-light.png';
        if (ic2_img) ic2_img.src = './img/ic2-light.png';

        if (ic3_link) ic3_link.href = './img/ic3-light.png';
        if (ic3_img) ic3_img.src = './img/ic3-light.png';

        if (ic4_link) ic4_link.href = './img/ic4-light.png';
        if (ic4_img) ic4_img.src = './img/ic4-light.png';

        if (sne1_link) sne1_link.href = './img/sne1-light.png';
        if (sne1_img) sne1_img.src = './img/sne1-light.png';

        if (sne2_link) sne2_link.href = './img/sne2-light.png';
        if (sne2_img) sne2_img.src = './img/sne2-light.png';

        if (sne3_link) sne3_link.href = './img/sne3-light.png';
        if (sne3_img) sne3_img.src = './img/sne3-light.png';

        if (evo2_link) evo2_link.href = './img/evo2-light.png';
        if (evo2_img) evo2_img.src = './img/evo2-light.png';

        if (ep1_link) ep1_link.href = './img/ep1-light.png';
        if (ep1_img) ep1_img.src = './img/ep1-light.png';

        if (ep2_link) ep2_link.href = './img/ep2-light.png';
        if (ep2_img) ep2_img.src = './img/ep2-light.png';

        if (ms1_link) ms1_link.href = './img/ms1-light.png';
        if (ms1_img) ms1_img.src = './img/ms1-light.png';

        if (ms2_link) ms2_link.href = './img/ms2-light.png';
        if (ms2_img) ms2_img.src = './img/ms2-light.png';

        if (ms3_link) ms3_link.href = './img/ms3-light.png';
        if (ms3_img) ms3_img.src = './img/ms3-light.png';

        if (ms4_link) ms4_link.href = './img/ms4-light.png';
        if (ms4_img) ms4_img.src = './img/ms4-light.png';

        if (ms5_link) ms5_link.href = './img/ms5-light.png';
        if (ms5_img) ms5_img.src = './img/ms5-light.png';


        /* Videos */
        if (vid1Source) vid1Source.src = './img/eicw-vid1-light.mp4';
        if (vid2Source) vid2Source.src = './img/eicw-vid2-light.mp4';
        if (vid3Source) vid3Source.src = './img/eicw-vid3-light.mp4';
        if (vid4Source) vid4Source.src = './img/eicw-vid4-light.mp4';
        if (vid5Source) vid5Source.src = './img/eicw-vid5-light.mp4';
        if (vid6Source) vid6Source.src = './img/eicw-vid6-light.mp4';
        if (vid7Source) vid7Source.src = './img/eicw-vid7-light.mp4';
        if (vid8Source) vid8Source.src = './img/eicw-vid8-light.mp4';
        if (vid9Source) vid9Source.src = './img/eicw2-vid1-light.mp4';
        if (vid10Source) vid10Source.src = './img/eicw2-vid2-light.mp4';
    }
    if (vid1) vid1.load();
    if (vid2) vid2.load();
    if (vid3) vid3.load();
    if (vid4) vid4.load();
    if (vid5) vid5.load();
    if (vid6) vid6.load();
    if (vid7) vid7.load();
    if (vid8) vid8.load();
    if (vid9) vid9.load();
    if (vid10) vid10.load();
}


// Update the scroll indicator width on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-indicator').style.width = scrollPercentage + '%';
});

// Update the scroll indicator width on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.min((scrollTop / docHeight) * 100, 100); // Cap at 100%
    document.getElementById('scroll-indicator').style.width = scrollPercentage + '%';
});

// Autoplay videos one by one when scrolled into view
document.addEventListener('DOMContentLoaded', function () {
    var videos = Array.from(document.querySelectorAll('video'));
    if (videos.length === 0) return;

    var currentIndex = 0;
    var isPlaying = false;

    // Prepare all videos: muted, no loop, inline
    videos.forEach(function (video) {
        video.loop = false;
        video.muted = true;
        video.playsInline = true;
    });

    function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function playNext(index) {
        if (index >= videos.length) {
            isPlaying = false;
            return;
        }

        currentIndex = index;

        if (!isInViewport(videos[index])) {
            isPlaying = false;
            return;
        }

        isPlaying = true;
        var video = videos[index];

        video.addEventListener('ended', function onEnded() {
            video.removeEventListener('ended', onEnded);
            playNext(index + 1);
        });

        video.play().catch(function (error) {
            console.log('Autoplay was prevented:', error);
            playNext(index + 1);
        });
    }

    function onScroll() {
        if (!isPlaying && currentIndex < videos.length && isInViewport(videos[currentIndex])) {
            playNext(currentIndex);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Check immediately in case the first video is already visible
    onScroll();
});