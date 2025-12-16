
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
            const response = await fetch('https://bat-lta-9eb7bbf231a2.herokuapp.com/bus-stops'); // Replace with your API URL
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
    navigator.serviceWorker.register('js/service-worker.js');
}

const installBtn = document.getElementById('install-btn');
const refreshBtn = document.getElementById('refresh-btn');

// Function to update button text and refresh button visibility
function updateInstallButton(installed) {
    if (installed) {
        installBtn.textContent = 'Installed';
        installBtn.disabled = true;
        refreshBtn.style.display = 'inline-block'; // Show refresh if installed
    } else {
        installBtn.textContent = 'Not installed';
        installBtn.disabled = false;
        refreshBtn.style.display = 'none'; // Hide refresh if not installed
    }
}

// Detect if app is installed
window.addEventListener('DOMContentLoaded', () => {
    let isInstalled = (window.matchMedia('(display-mode: standalone)').matches) ||
        (window.navigator.standalone === true);
    updateInstallButton(isInstalled);
});


refreshBtn.addEventListener('click', () => {
    window.location.reload();
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
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
    }
});

// Listen for appinstalled event
refreshBtn.addEventListener('click', () => {
    window.location.reload();
});

