/* Dark Mode Functionality for Individual Pages */

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateThemeIcon('dark');
    updateHrefForDarkMode();
} else {
    updateThemeIcon('light');
}

// Get both toggle buttons
const toggleButtonDesktop = document.getElementById('dark-mode-toggle-desktop');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');

// Function to toggle dark mode
function toggleDarkMode() {
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
}

// Add event listeners to both buttons if they exist
if (toggleButtonDesktop) {
    toggleButtonDesktop.addEventListener('click', toggleDarkMode);
}

if (toggleButtonMobile) {
    toggleButtonMobile.addEventListener('click', toggleDarkMode);
}
// Function to update the theme icon with animation
function updateThemeIcon(theme) {
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

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

    // Remove the animation class after the animation ends
    setTimeout(() => {
        if (themeIconDesktop) themeIconDesktop.classList.remove('animate');
        if (themeIconMobile) themeIconMobile.classList.remove('animate');
    }, 300); // Match the duration of the CSS transition
}

function updateHrefForDarkMode() {
    /* Banners */
    const pv6Page = document.getElementById('cv-pv6');

    /* Images */
    const overview_link = document.getElementById('overview');
    const overview_img = document.getElementById('overview-img');

    const evo_link = document.getElementById('evo');
    const evo_img = document.getElementById('evo-img');

    const v5_wf = document.getElementById('v5-wf');
    const v5_wf_img = document.getElementById('v5-wf-img');

    const v6_wf = document.getElementById('v6-wf');
    const v6_wf_img = document.getElementById('v6-wf-img');

    const logo_col = document.getElementById('logo-col');
    const logo_col_img = document.getElementById('logo-col-img');

    const colour_sch = document.getElementById('colour-sch');
    const colour_sch_img = document.getElementById('colour-sch-img');

    const nb1 = document.getElementById('nb1');
    const nb1_img = document.getElementById('nb1-img');

    const nb2 = document.getElementById('nb2');
    const nb2_img = document.getElementById('nb2-img');

    const fs1 = document.getElementById('fs1');
    const fs1_img = document.getElementById('fs1-img');

    const fs2 = document.getElementById('fs2');
    const fs2_img = document.getElementById('fs2-img');

    const mn1 = document.getElementById('mn1');
    const mn1_img = document.getElementById('mn1-img');

    const vid1 = document.getElementById('mn1-video');
    const vid1Source = vid1.querySelector('source');

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/XPhIYcu.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/XpY3OiV.png';
        overview_img.src = 'https://i.imgur.com/XpY3OiV.png';

        evo_link.href = 'https://i.imgur.com/xBSDj13.png';
        evo_img.src = 'https://i.imgur.com/xBSDj13.png';

        v5_wf.href = 'https://i.imgur.com/pXQBxj3.png';
        v5_wf_img.src = 'https://i.imgur.com/pXQBxj3.png';

        v6_wf.href = 'https://i.imgur.com/n7BRWR4.png';
        v6_wf_img.src = 'https://i.imgur.com/n7BRWR4.png';

        logo_col.href = 'https://i.imgur.com/XMUiCNb.png';
        logo_col_img.src = 'https://i.imgur.com/XMUiCNb.png';

        colour_sch.href = 'https://i.imgur.com/uKqV2pG.png';
        colour_sch_img.src = 'https://i.imgur.com/uKqV2pG.png';

        nb1.href = 'https://i.imgur.com/1P8RyIK.png';
        nb1_img.src = 'https://i.imgur.com/1P8RyIK.png';

        nb2.href = 'https://i.imgur.com/NoBp3Hs.png';
        nb2_img.src = 'https://i.imgur.com/NoBp3Hs.png';

        fs1.href = 'https://i.imgur.com/lAO8qNY.png';
        fs1_img.src = 'https://i.imgur.com/lAO8qNY.png';

        fs2.href = 'https://i.imgur.com/a0dHcs8.png';
        fs2_img.src = 'https://i.imgur.com/a0dHcs8.png';

        mn1.href = 'https://i.imgur.com/ixXAuFt.png';
        mn1_img.src = 'https://i.imgur.com/ixXAuFt.png';

        /* Videos */
        vid1Source.src = 'https://i.imgur.com/CGixwLp.mp4';

    } else {
        /* Banners */
        pv6Page.style.backgroundImage = "url(https://i.imgur.com/idzCOOS.png)";

        /* Images */
        overview_link.href = 'https://i.imgur.com/y5vsXSl.png';
        overview_img.src = 'https://i.imgur.com/y5vsXSl.png';

        evo_link.href = 'https://i.imgur.com/cxzZm72.png';
        evo_img.src = 'https://i.imgur.com/cxzZm72.png';

        v5_wf.href = 'https://i.imgur.com/m5IfoIQ.png';
        v5_wf_img.src = 'https://i.imgur.com/m5IfoIQ.png';

        v6_wf.href = 'https://i.imgur.com/tLuFHf9.png';
        v6_wf_img.src = 'https://i.imgur.com/tLuFHf9.png';

        logo_col.href = 'https://i.imgur.com/9985WRu.png';
        logo_col_img.src = 'https://i.imgur.com/9985WRu.png';

        colour_sch.href = 'https://i.imgur.com/CLWRabF.png';
        colour_sch_img.src = 'https://i.imgur.com/CLWRabF.png';

        nb1.href = 'https://i.imgur.com/qD6fECV.png';
        nb1_img.src = 'https://i.imgur.com/qD6fECV.png';

        nb2.href = 'https://i.imgur.com/rDKZwWk.png';
        nb2_img.src = 'https://i.imgur.com/rDKZwWk.png';

        fs1.href = 'https://i.imgur.com/P2nO6CK.png';
        fs1_img.src = 'https://i.imgur.com/P2nO6CK.png';

        fs2.href = 'https://i.imgur.com/BKGfaQS.png';
        fs2_img.src = 'https://i.imgur.com/BKGfaQS.png';

        mn1.href = 'https://i.imgur.com/6mvxAKY.png';
        mn1_img.src = 'https://i.imgur.com/6mvxAKY.png';

        /* Videos */
        vid1Source.src = 'https://i.imgur.com/FP0hIij.mp4';
    }

    vid1.load();


}

// Update the scroll indicator width based on scroll position
window.addEventListener("scroll", function () {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    scrollIndicator.style.width = scrollPercentage + "%"; // Update the width of the indicator
});