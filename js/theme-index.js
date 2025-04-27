// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    // const themeIcon = document.getElementById('theme-icon');
    // if (themeIcon) {
    //     themeIcon.classList.remove('fa-moon');
    //     themeIcon.classList.add('fa-sun');
    // }
}

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');

    // Update the icon dynamically
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        // if (themeIcon) {
        //     themeIcon.classList.remove('fa-moon');
        //     themeIcon.classList.add('fa-sun');
        // }
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        // if (themeIcon) {
        //     themeIcon.classList.remove('fa-sun');
        //     themeIcon.classList.add('fa-moon');
        // }
    }
});