// ****************************
// :: Train Service Alerts ::
// ****************************

// Fetch train service alerts and update the alert box
async function fetchTrainServiceAlerts(retries = 7) {
    const alertBox = document.getElementById('train-alert');
    const url = 'https://bat-lta-9eb7bbf231a2.herokuapp.com/train-service-alerts';

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch train service alerts: ${response.statusText}`);
            }
            const data = await response.json();

            // Check if there is a valid alert message
            if (data && data.value && data.value.Message && Array.isArray(data.value.Message) && data.value.Message.length > 0) {
                const alerts = data.value.Message.map(msg => msg.Content || 'No content available').join('<br>');
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> ${alerts}</p>`;
            } else {
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> No active train service alerts.</p>`;
            }
            return; // Exit the function if successful
        } catch (error) {
            if (attempt === retries) {
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> Unable to load train service alerts after ${retries} attempts.</p>`;
            } else {
                console.warn(`Attempt ${attempt} failed. Retrying...`);
            }
        }
    }
}

// Call the function to fetch train service alerts
fetchTrainServiceAlerts(7);


// ****************************
// :: Mobile Swipe Navigation for Tabs
// ****************************

// Only enable swipe navigation for touches below the tabs and not when keyboard is shown
(function () {
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;
    const minSwipeDistance = 50; // Minimum px for swipe
    const tabLinks = Array.from(document.querySelectorAll('#scrollable-tabs a'));
    const tabsElem = document.getElementById('scrollable-tabs');
    const tabsContainer = tabsElem ? tabsElem.parentElement : null;
    if (!tabLinks.length || !tabsElem || !tabsContainer) return;

    // Add transition style to the container
    tabsContainer.style.transition = 'transform 0.25s cubic-bezier(0.4,0,0.2,1)';

    // Helper: check if an input or textarea is focused (keyboard likely open)
    function isKeyboardShown() {
        const active = document.activeElement;
        return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    }

    // Only respond to swipes below the tabs
    function isBelowTabs(y) {
        const rect = tabsElem.getBoundingClientRect();
        return y > rect.bottom;
    }

    function handleGesture() {
        if (touchEndX < touchStartX - minSwipeDistance) {
            // Swipe left: go to next tab
            const current = tabLinks.findIndex(link => link.classList.contains('active'));
            if (current !== -1 && current < tabLinks.length - 1) {
                animateSwipe(-1, () => {
                    window.location.href = tabLinks[current + 1].href;
                });
            }
        }
        if (touchEndX > touchStartX + minSwipeDistance) {
            // Swipe right: go to previous tab
            const current = tabLinks.findIndex(link => link.classList.contains('active'));
            if (current > 0) {
                animateSwipe(1, () => {
                    window.location.href = tabLinks[current - 1].href;
                });
            }
        }
    }

    function animateSwipe(direction, callback) {
        if (!tabsContainer) return callback();
        isSwiping = true;
        tabsContainer.style.transform = `translateX(${direction * 60}px)`;
        setTimeout(() => {
            tabsContainer.style.transform = '';
            isSwiping = false;
            callback();
        }, 250);
    }

    let swipeStartY = 0;

    document.addEventListener('touchstart', function (e) {
        if (e.touches.length === 1) {
            // Only start swipe if below tabs and keyboard is not shown
            swipeStartY = e.touches[0].clientY;
            if (isBelowTabs(swipeStartY) && !isKeyboardShown() && !isSwiping) {
                touchStartX = e.touches[0].clientX;
            } else {
                touchStartX = null;
            }
        }
    });
    document.addEventListener('touchend', function (e) {
        if (e.changedTouches.length === 1 && touchStartX !== null) {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        }
        touchStartX = null;
    });
})();
