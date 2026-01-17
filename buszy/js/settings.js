
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
// :: PWA Installation Handling
// ****************************

if ('serviceWorker' in navigator) {
    // Use relative path from settings.html to service-worker.js
    navigator.serviceWorker.register('../service-worker.js').catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

const installBtn = document.getElementById('install-btn');
const refreshBtn = document.getElementById('refresh-btn');
// Ensure deferredPrompt is always defined in global scope
window.deferredPrompt = null;

function updateInstallButton(installed) {
    if (installed) {
        installBtn.textContent = 'Installed';
        installBtn.disabled = true;
        refreshBtn.style.display = 'inline-block';
    } else {
        installBtn.textContent = 'Not installed';
        installBtn.disabled = false;
        refreshBtn.style.display = 'none';
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
});

window.addEventListener('appinstalled', () => {
    updateInstallButton(true);
});

refreshBtn.addEventListener('click', () => {
    window.location.reload();
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    updateInstallButton(false);
});

installBtn.addEventListener('click', async () => {
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        const { outcome } = await window.deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            updateInstallButton(true);
        }
        window.deferredPrompt = null;
    }
});

