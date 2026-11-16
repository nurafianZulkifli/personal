// (part of Version 7 Redesign) Replace breadcrumb trails with a single back link.
(function () {
    function getBackTarget() {
        var path = window.location.pathname.toLowerCase();

        if (/\/blog\/[^/]+\.html$/.test(path)) {
            return { href: '../blog.html', label: 'Back to blog' };
        }
        if (/\/worksbynrfz\/project\.html$/.test(path)) {
            return { href: '../works-by-nrfz.html', label: 'Back to projects' };
        }
        if (/\/eicw\/(?!intro\.html$)[^/]+\.html$/.test(path)) {
            return { href: 'intro.html', label: 'Back to EICW' };
        }
        if (/\/eicw\/intro\.html$/.test(path)) {
            return { href: '../menu.html', label: 'Back to menu' };
        }
        if (/\/menu\.html$/.test(path)) {
            return { href: './', label: 'Back home' };
        }

        return { href: 'menu.html', label: 'Back to menu' };
    }

    function replaceBreadcrumbs() {
        var auto = getBackTarget();
        document.querySelectorAll('ol.breadcrumb').forEach(function (list) {
            if (list.dataset.backButtonApplied === 'true') return;

            var target = {
                href: list.dataset.backHref || auto.href,
                label: list.dataset.backLabel || auto.label
            };
            var nav = list.closest('nav');
            if (nav) nav.setAttribute('aria-label', target.label);
            list.innerHTML =
                '<li class="breadcrumb-item">' +
                '<a href="' + target.href + '" aria-label="' + target.label + '">' +
                '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>' +
                '</a></li>';
            list.dataset.backButtonApplied = 'true';
        });
    }

    replaceBreadcrumbs();

    if (document.body) {
        new MutationObserver(replaceBreadcrumbs).observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();

// Add edge refraction where SVG backdrop filters are supported; CSS provides the fallback.
(function () {
    if (!window.ResizeObserver || !window.CSS ||
        !CSS.supports('backdrop-filter', 'url("#nav-glass")')) return;

    var surfaces = document.querySelectorAll(
        '.navbar-container .navbar, .mobile-bottom-nav ul, .wbnrfz-works.floating-cards .card, ' +
        '.breadcrumb.breadcrumb-fixed, .breadcrumb-desktop .breadcrumb-item a, ' +
        '.eicw-nav-btn, .eicw-nav-menu'
    );
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    if (!context) return;

    function updateGlass(surface) {
        var width = Math.round(surface.offsetWidth);
        var height = Math.round(surface.offsetHeight);
        if (!width || !height) return;

        canvas.width = width;
        canvas.height = height;
        var pixels = context.createImageData(width, height);
        var radius = Math.min(parseFloat(getComputedStyle(surface).borderTopLeftRadius), width / 2, height / 2);
        var edgeWidth = Math.min(16, radius);

        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var dx = x + 0.5 - width / 2;
                var dy = y + 0.5 - height / 2;
                var qx = Math.abs(dx) - (width / 2 - radius);
                var qy = Math.abs(dy) - (height / 2 - radius);
                var ox = Math.max(qx, 0);
                var oy = Math.max(qy, 0);
                var distance = Math.sqrt(ox * ox + oy * oy) + Math.min(Math.max(qx, qy), 0) - radius;
                var amount = distance <= 0 && distance > -edgeWidth ? Math.pow(1 + distance / edgeWidth, 2) * 90 : 0;
                var length = Math.sqrt(ox * ox + oy * oy);
                var nx = length ? ox / length * Math.sign(dx) : (qx > qy ? Math.sign(dx) : 0);
                var ny = length ? oy / length * Math.sign(dy) : (qy >= qx ? Math.sign(dy) : 0);
                var i = (y * width + x) * 4;
                pixels.data[i] = 128 + nx * amount;
                pixels.data[i + 1] = 128 + ny * amount;
                pixels.data[i + 2] = 128;
                pixels.data[i + 3] = 255;
            }
        }

        context.putImageData(pixels, 0, 0);
        var map = canvas.toDataURL('image/png');
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
            '<filter id="nav-glass" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">' +
            '<feImage href="' + map + '" x="0" y="0" width="' + width + '" height="' + height + '" result="map"/>' +
            '<feDisplacementMap in="SourceGraphic" in2="map" scale="24" xChannelSelector="R" yChannelSelector="G"/>' +
            '</filter></svg>';
        var filter = 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '#nav-glass")';
        surface.style.backdropFilter = 'blur(8px) ' + filter + ' saturate(150%)';
    }

    var timers = new WeakMap();
    var observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
            var surface = entry.target;
            clearTimeout(timers.get(surface));
            timers.set(surface, setTimeout(function () {
                updateGlass(surface);
            }, 120));
        });
    });

    function observeSurface(surface) {
        updateGlass(surface);
        observer.observe(surface);
    }

    surfaces.forEach(observeSurface);

    function observeBackToTop() {
        var button = document.getElementById('scrollUp');
        if (button) observeSurface(button);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeBackToTop);
    } else {
        observeBackToTop();
    }
})();

        // (part of Version 7 Redesign) Collapse desktop navigation labels on scroll down.
        (function () {
            var navbar = document.querySelector('.navbar-container');
            if (!navbar) return;
            var lastScrollY = window.scrollY;

            function updateNavbar() {
                var currentScrollY = window.scrollY;
                if (currentScrollY <= 50 || currentScrollY < lastScrollY - 4) {
                    navbar.classList.remove('scrolled');
                } else if (currentScrollY > lastScrollY + 4) {
                    navbar.classList.add('scrolled');
                }
                lastScrollY = currentScrollY;
            }

            updateNavbar();
            window.addEventListener('scroll', updateNavbar, { passive: true });
        })();

      // (part of Version 7 Redesign) Collapse mobile navigation labels based on scroll direction.
        (function () {
            var lastScrollY = window.scrollY;
            var nav = document.querySelector('.mobile-bottom-nav');
            var ticking = false;

            function onScroll() {
                var currentScrollY = window.scrollY;
                if (!nav) return;
                if (window.innerWidth > 994) return;
                if (currentScrollY > lastScrollY + 4) {
                    // Scrolling down
                    nav.classList.add('labels-hidden');
                } else if (currentScrollY < lastScrollY - 4) {
                    // Scrolling up
                    nav.classList.remove('labels-hidden');
                }
                lastScrollY = currentScrollY;
            }

            window.addEventListener('scroll', function () {
                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        onScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Reset nav position on resize
            window.addEventListener('resize', function () {
                if (window.innerWidth > 994 && nav) {
                    nav.classList.remove('labels-hidden');
                }
            });
        })();

        // Toggle .at-top class based on scroll position
        function updateBreadcrumbAtTop() {
            var bc = document.getElementById('floating-breadcrumb');
            if (!bc) return;
            if (window.scrollY <= 0) {
                bc.classList.add('at-top');
            } else {
                bc.classList.remove('at-top');
            }
        }
        window.addEventListener('scroll', updateBreadcrumbAtTop);
        window.addEventListener('DOMContentLoaded', updateBreadcrumbAtTop);

// Haptic feedback on tap for interactive elements (mobile only)
(function () {
    if (!navigator.vibrate) return;

    const HAPTIC_SHORT = 8;   // buttons, links
    const HAPTIC_MEDIUM = 18; // nav items, dropdowns

    const selector = [
        'a',
        'button',
        '[role="button"]',
        '.nav-link',
        '.mobile-bottom-nav a',
        '.eicw-nav-btn',
        '.eicw-nav-menu a',
        'summary',
        '.list-group-item',
        '.eicw-collapsible summary',
    ].join(',');

    document.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'touch') return;
        const target = e.target.closest(selector);
        if (!target) return;

        const isMedium =
            target.closest('.mobile-bottom-nav') ||
            target.classList.contains('eicw-nav-btn') ||
            target.tagName === 'SUMMARY';

        navigator.vibrate(isMedium ? HAPTIC_MEDIUM : HAPTIC_SHORT);
    }, { passive: true });
})();