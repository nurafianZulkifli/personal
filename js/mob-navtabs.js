      // Hide/show mobile bottom nav on scroll (mobile only)
        (function () {
            var lastScrollY = window.scrollY;
            var nav = document.querySelector('.mobile-bottom-nav');
            var ticking = false;
            var isHidden = false;

            function onScroll() {
                var currentScrollY = window.scrollY;
                if (window.innerWidth > 600) return; // Only on mobile
                if (currentScrollY > lastScrollY + 4) {
                    // Scrolling down
                    if (!isHidden) {
                        nav.style.transform = 'translateY(100%)';
                        nav.style.transition = 'transform 0.3s cubic-bezier(.4,0,.2,1)';
                        isHidden = true;
                    }
                } else if (currentScrollY < lastScrollY - 4) {
                    // Scrolling up
                    if (isHidden) {
                        nav.style.transform = 'translateY(0)';
                        nav.style.transition = 'transform 0.3s cubic-bezier(.4,0,.2,1)';
                        isHidden = false;
                    }
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
                if (window.innerWidth > 600) {
                    nav.style.transform = '';
                    isHidden = false;
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