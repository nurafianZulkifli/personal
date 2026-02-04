// ****************************
// :: Time Format Change Handling
// ****************************
// Function to handle time format change
document.addEventListener('DOMContentLoaded', () => {
    const timeFormatRadios = document.querySelectorAll('input[name="time-format"]');

    // Load the saved time format from localStorage
    const savedFormat = localStorage.getItem('timeFormat');
    if (savedFormat) {
        document.querySelector(`input[value="${savedFormat}"]`).checked = true;
    }

    // Add event listeners to update the time format
    timeFormatRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedFormat = event.target.value;
            localStorage.setItem('timeFormat', selectedFormat);
            alert(`Time format updated to ${selectedFormat}.`);
        });
    });
});


// ****************************
// :: Re-fetch Data Handling
// ****************************
// Handle re-fetch data button
const clearCacheBtn = document.getElementById('clear-cache-btn');
clearCacheBtn.addEventListener('click', async () => {
    if (confirm('Are you sure you want to re-fetch data? This will delete existing cached data.')) {
        try {
            // Clear cached data
            localStorage.removeItem('allBusStops');

            // Fetch updated data from the API
            const response = await fetch('https://bat-lta-9eb7bbf231a2.herokuapp.com/bus-stops');
            if (!response.ok) {
                throw new Error('Failed to fetch data from the API.');
            }

            const updatedData = await response.json();

            // Save the updated data to localStorage
            localStorage.setItem('allBusStops', JSON.stringify(updatedData));

            alert('Data successfully re-fetched and updated.');
        } catch (error) {
            console.error('Error re-fetching data:', error);
            alert('An error occurred while re-fetching data. Please try again later.');
        }
    }
});


// ****************************
// :: Export Storage Handling
// ****************************
// Handle export storage button
const exportStorageBtn = document.getElementById('export-storage-btn');
exportStorageBtn.addEventListener('click', () => {
    try {
        // Get only specific localStorage keys
        const keysToExport = ['dark-mode', 'timeFormat', 'bookmarkedBusStops'];
        const storageData = {};

        keysToExport.forEach(key => {
            const value = localStorage.getItem(key);
            if (value !== null) {
                storageData[key] = value;
            }
        });

        // Create a blob from the JSON data
        const jsonString = JSON.stringify(storageData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Create a temporary download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `buszy-storage-${new Date().toISOString().split('T')[0]}.json`;

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the object URL
        URL.revokeObjectURL(url);

        alert('Storage data exported successfully.');
    } catch (error) {
        console.error('Error exporting storage:', error);
        alert('An error occurred while exporting storage. Please try again.');
    }
});


// ****************************
// :: PWA Installation Handling
// ****************************

if ('serviceWorker' in navigator) {
    // Use relative path from settings.html to service-worker.js
    navigator.serviceWorker.register('../service-worker.js').catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

const installBtn = document.getElementById('install-btn');
let deferredPrompt = null;

function updateInstallButton(installed) {
    if (installed) {
        installBtn.textContent = 'Installed';
        installBtn.disabled = true;
    } else {
        installBtn.textContent = 'Not installed';
        installBtn.disabled = deferredPrompt === null;
    }
}

function detectInstalled() {
    // For most browsers
    return window.matchMedia('(display-mode: standalone)').matches
        // For iOS Safari
        || window.navigator.standalone === true;
}

window.addEventListener('DOMContentLoaded', () => {
    updateInstallButton(detectInstalled());
    // Fallback for browsers that do not support beforeinstallprompt
    if (!('onbeforeinstallprompt' in window)) {
        installBtn.disabled = true;
        installBtn.textContent = 'Install not supported';
    }
});

window.addEventListener('appinstalled', () => {
    updateInstallButton(true);
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.disabled = false;
    updateInstallButton(false);
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            updateInstallButton(true);
        }
        deferredPrompt = null;
        installBtn.disabled = true;
    } else {
        alert('Install prompt is not available. Try refreshing the page or using a supported browser.');
    }
});


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
