// Generic Navigation Dropdown
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

    // Close after selecting an anchor link (in-page navigation)
    dropdown.querySelectorAll('.eicw-nav-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
})();

// Sticky nav (works despite body overflow-x: hidden which breaks position:sticky)
(function () {
    const navWrap = document.querySelector('.sticky-nav-wrap');
    if (!navWrap) return;

    // Placeholder holds space in the flow when the nav becomes fixed
    const placeholder = document.createElement('div');
    placeholder.className = 'sticky-nav-placeholder';
    placeholder.style.display = 'none';
    navWrap.after(placeholder);

    const navbarOffset = () => window.innerWidth <= 994 ? 72 : 75;
    let originalTop = null;
    let isSticky = false;

    function calcOriginalTop() {
        // Must be measured before sticky class is applied
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

    // Measure position once the layout is settled
    if (document.readyState === 'complete') {
        calcOriginalTop();
        check();
    } else {
        window.addEventListener('load', () => { calcOriginalTop(); check(); });
    }

    window.addEventListener('scroll', check, { passive: true });

    window.addEventListener('resize', () => {
        // Re-measure (must remove sticky first to get the natural position)
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

// Active section tracking — update dropdown label on scroll
(function () {
    const dropdown = document.getElementById('eicwNavDropdown');
    if (!dropdown) return;

    const btn = dropdown.querySelector('.eicw-nav-btn');
    const labelSpan = btn ? btn.querySelector('.eicw-nav-label') : null;
    if (!labelSpan) return;

    const links = Array.from(dropdown.querySelectorAll('.eicw-nav-menu a[href^="#"]'));

    // First link per unique anchor (preserves order)
    const anchorToLink = {};
    links.forEach(link => {
        const hash = link.getAttribute('href');
        if (!anchorToLink[hash]) anchorToLink[hash] = link;
    });

    // Ordered list of unique target sections (skip missing elements)
    const sections = Object.keys(anchorToLink)
        .map(hash => document.querySelector(hash))
        .filter(Boolean);

    function getActiveSection() {
        const navbarH = window.innerWidth <= 994 ? 72 : 75;
        const stickyH = document.querySelector('.sticky-nav-wrap')?.offsetHeight || 0;
        const threshold = navbarH + stickyH + 10;

        let active = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= threshold) {
                active = section;
            }
        }
        return active;
    }

    function updateLabel() {
        const active = getActiveSection();
        if (!active) return;
        const hash = '#' + active.id;
        const activeLink = anchorToLink[hash];
        if (!activeLink) return;

        // Mirror the active link's icon + text into the button label
        labelSpan.innerHTML = activeLink.innerHTML;

        // Sync active class on all nav links
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
    }

    window.addEventListener('scroll', updateLabel, { passive: true });
    window.addEventListener('load', updateLabel);
})();
