// EICW Navigation Dropdown
(function () {
    const dropdown = document.getElementById('eicwNavDropdown');
    if (!dropdown) return;

    const btn = dropdown.querySelector('.eicw-nav-btn');

    btn.addEventListener('click', () => {
        const isOpen = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            btn.focus();
        }
    });
})();

// Sticky nav
(function () {
    const navWrap = document.querySelector('.sticky-nav-wrap');
    if (!navWrap) return;

    const placeholder = document.createElement('div');
    placeholder.className = 'sticky-nav-placeholder';
    placeholder.style.display = 'none';
    navWrap.after(placeholder);

    const navbarOffset = () => window.innerWidth <= 994 ? 72 : 75;

    let originalTop = null;
    let isSticky = false;

    function calcOriginalTop() {
        const rect = navWrap.getBoundingClientRect();
        originalTop = rect.top + (window.scrollY || window.pageYOffset);
    }

    function check() {
        if (originalTop === null) return;
        const scrollY = window.scrollY || window.pageYOffset;
        const threshold = originalTop - navbarOffset();
        if (!isSticky && scrollY >= threshold) {
            isSticky = true;
            navWrap.classList.add('is-sticky');
            navWrap.style.top = navbarOffset() + 'px';
            placeholder.style.height = navWrap.offsetHeight + 'px';
            placeholder.style.display = 'block';
        } else if (isSticky && scrollY < threshold) {
            isSticky = false;
            navWrap.classList.remove('is-sticky');
            navWrap.style.top = '';
            placeholder.style.display = 'none';
        }
    }

    if (document.readyState === 'complete') {
        calcOriginalTop(); check();
    } else {
        window.addEventListener('load', () => { calcOriginalTop(); check(); });
    }

    window.addEventListener('scroll', check, { passive: true });

    window.addEventListener('resize', () => {
        const wasSticky = isSticky;
        if (wasSticky) {
            navWrap.classList.remove('is-sticky');
            placeholder.style.display = 'none';
            isSticky = false;
        }
        calcOriginalTop();
        if (wasSticky) check();
        if (isSticky) navWrap.style.top = navbarOffset() + 'px';
    }, { passive: true });
})();
