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

    const navbarOffset = () => window.innerWidth <= 994 ? 20 : 75;

    let originalTop = null;
    let isSticky = false;

    function mobileStickyPos() {
        if (window.innerWidth > 994) return;
        const bc = document.querySelector('.breadcrumb.breadcrumb-fixed');
        const bcRight = bc ? bc.getBoundingClientRect().right : 20;
        navWrap.style.left = (bcRight + 10) + 'px';
        navWrap.style.right = '20px';
        navWrap.style.width = 'auto';
        navWrap.style.transform = 'none';
        navWrap.style.maxWidth = 'none';
    }

    function clearMobileStickyPos() {
        navWrap.style.left = '';
        navWrap.style.right = '';
        navWrap.style.width = '';
        navWrap.style.transform = '';
        navWrap.style.maxWidth = '';
    }

    function calcOriginalTop() {
        const rect = navWrap.getBoundingClientRect();
        originalTop = rect.top + (window.scrollY || window.pageYOffset);
    }

    function check() {
        if (originalTop === null) return;
        if (window.innerWidth > 994) return;
        const scrollY = window.scrollY || window.pageYOffset;
        const threshold = originalTop - navbarOffset();
        if (!isSticky && scrollY >= threshold) {
            isSticky = true;
            navWrap.classList.add('is-sticky');
            navWrap.style.top = navbarOffset() + 'px';
            mobileStickyPos();
            placeholder.style.height = navWrap.offsetHeight + 'px';
            placeholder.style.display = 'block';
        } else if (isSticky && scrollY < threshold) {
            isSticky = false;
            navWrap.classList.remove('is-sticky');
            navWrap.style.top = '';
            clearMobileStickyPos();
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
        // Defer so merge/unmerge settles before re-measuring
        setTimeout(() => {
            calcOriginalTop();
            check();
            if (isSticky) {
                navWrap.style.top = navbarOffset() + 'px';
                mobileStickyPos();
            }
        }, 0);
    }, { passive: true });
})();

// Desktop merge: move section nav dropdown into the main navbar
(function () {
    const dropdown = document.getElementById('eicwNavDropdown');
    const navWrap = document.querySelector('.sticky-nav-wrap');
    const navbar = document.querySelector('.navbar');
    const navbarContainer = document.querySelector('.navbar-container');
    if (!dropdown || !navWrap || !navbar || !navbarContainer) return;

    let isMerged = false;
    let escapedMenu = null;

    // Sync escaped menu visibility whenever dropdown open/close state changes
    const observer = new MutationObserver(() => {
        if (!escapedMenu) return;
        const isOpen = dropdown.classList.contains('open');
        escapedMenu.style.opacity = isOpen ? '1' : '';
        escapedMenu.style.visibility = isOpen ? 'visible' : '';
        escapedMenu.style.pointerEvents = isOpen ? 'auto' : '';
        escapedMenu.style.transform = isOpen ? 'translateY(0)' : '';
    });
    observer.observe(dropdown, { attributes: true, attributeFilter: ['class'] });

    function merge() {
        if (isMerged) return;
        escapedMenu = dropdown.querySelector('.eicw-nav-menu');
        const navbarNav = navbar.querySelector('.navbar-nav');
        navbar.insertBefore(dropdown, navbarNav);
        if (escapedMenu) {
            navbarContainer.appendChild(escapedMenu);
            escapedMenu.classList.add('navbar-escaped-menu');
        }
        navbar.classList.add('has-section-nav');
        dropdown.classList.add('navbar-merged');
        navWrap.classList.add('nav-merged-desktop');
        isMerged = true;
    }

    function unmerge() {
        if (!isMerged) return;
        if (escapedMenu) {
            dropdown.appendChild(escapedMenu);
            escapedMenu.classList.remove('navbar-escaped-menu');
            escapedMenu.style.opacity = '';
            escapedMenu.style.visibility = '';
            escapedMenu.style.pointerEvents = '';
            escapedMenu.style.transform = '';
            escapedMenu = null;
        }
        const hr = navWrap.querySelector('hr');
        navWrap.insertBefore(dropdown, hr || null);
        navbar.classList.remove('has-section-nav');
        dropdown.classList.remove('navbar-merged');
        navWrap.classList.remove('nav-merged-desktop');
        isMerged = false;
    }

    function checkMerge() {
        if (window.innerWidth > 994) merge();
        else unmerge();
    }

    checkMerge();
    window.addEventListener('resize', checkMerge, { passive: true });
})();
