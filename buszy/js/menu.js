    // Update display mode text and icon based on dark mode
    function updateDisplayModeMenu() {
        var a = document.getElementById('dark-mode-toggle-desktop');
        if (!a) return;
        var h5 = a.querySelector('h5.lg-menu');
        var icon = h5 ? h5.querySelector('i') : null;
        var isDark = document.body.classList.contains('dark-mode');
        if (h5 && icon) {
            if (isDark) {
                h5.innerHTML = '<i class="fa-solid fa-moon"></i> Display: Dark';
            } else {
                h5.innerHTML = '<i class="fa-solid fa-sun-bright"></i> Display: Light';
            }
        }
    }
    document.addEventListener('DOMContentLoaded', updateDisplayModeMenu);
    new MutationObserver(updateDisplayModeMenu).observe(document.body, { attributes: true, attributeFilter: ['class'] });