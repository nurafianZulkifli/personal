// ****************************
// :: Train Service Alerts ::
// ****************************

// Fetch train service alerts and update the alert box
async function fetchTrainServiceAlerts(retries = 3) {
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
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> ${alerts}`;
            } else {
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> No active train service alerts.`;
            }
            return; // Exit the function if successful
        } catch (error) {
            if (attempt === retries) {
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> Unable to load train service alerts after ${retries} attempts.`;
            } else {
                console.warn(`Attempt ${attempt} failed. Retrying...`);
            }
        }
    }
}

// Call the function to fetch train service alerts
fetchTrainServiceAlerts();


// ****************************
// :: Mobile Swipe Navigation for Tabs
// ****************************
(function () {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum px for swipe
    const tabLinks = Array.from(document.querySelectorAll('#scrollable-tabs a'));
    if (!tabLinks.length) return;
    function handleGesture() {
        if (touchEndX < touchStartX - minSwipeDistance) {
            // Swipe left: go to next tab
            const current = tabLinks.findIndex(link => link.classList.contains('active'));
            if (current !== -1 && current < tabLinks.length - 1) {
                window.location.href = tabLinks[current + 1].href;
            }
        }
        if (touchEndX > touchStartX + minSwipeDistance) {
            // Swipe right: go to previous tab
            const current = tabLinks.findIndex(link => link.classList.contains('active'));
            if (current > 0) {
                window.location.href = tabLinks[current - 1].href;
            }
        }
    }
    document.addEventListener('touchstart', function (e) {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
        }
    });
    document.addEventListener('touchend', function (e) {
        if (e.changedTouches.length === 1) {
            touchEndX = e.changedTouches[0].clientX;
            handleGesture();
        }
    });
})();