const apiUrl = 'https://bat-lta-9eb7bbf231a2.herokuapp.com/nearby-bus-stops'; // Update with your server URL

// Show loading message immediately
const busStopsContainer = document.getElementById('bus-stops');
if (busStopsContainer) {
    busStopsContainer.innerHTML = '<p class="pin-msg"><span class="spinner"></span>Searching for nearby bus stops...</p>';
}

// Fetch location as soon as possible
(function fetchLocationFast() {
    const cachedLocation = sessionStorage.getItem('userLocation');
    if (cachedLocation) {
        const { latitude, longitude } = JSON.parse(cachedLocation);
        fetchNearbyBusStops(latitude, longitude);
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sessionStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }));
                fetchNearbyBusStops(latitude, longitude);
            },
            (error) => {
                console.error('Geolocation error:', error);
                if (busStopsContainer) {
                    busStopsContainer.innerHTML = '<p class="pin-msg"><i class="fa-solid fa-triangle-exclamation"></i>Unable to retrieve your location.</p>';
                }
            },
            {
                enableHighAccuracy: false, // Faster, less battery
                timeout: 3000,             // 3 seconds max wait
                maximumAge: 0
            }
        );
    } else {
        if (busStopsContainer) {
            busStopsContainer.innerHTML = '<p class="pin-msg"><i class="fa-solid fa-triangle-exclamation"></i>Geolocation is not supported by your browser.</p>';
        }
    }
})();

async function fetchNearbyBusStops(latitude, longitude) {
    try {
        const response = await fetch(`${apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=2`);
        if (!response.ok) {
            throw new Error('Failed to fetch nearby bus stops');
        }

        const busStops = await response.json();
        displayBusStops(busStops);
    } catch (error) {
        console.error('Error:', error);
        if (busStopsContainer) {
            busStopsContainer.innerHTML = '<p class="pin-msg"><i class="fa-solid fa-triangle-exclamation"></i>Failed to fetch nearby bus stops. Please try again later.</p>';
        }
    }
}

// Function to toggle pin/unpin for a bus stop
function togglePinBusStop(busStop, pinButton) {
    let pinnedBusStops = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];
    const isAlreadyPinned = pinnedBusStops.some((stop) => stop.BusStopCode === busStop.BusStopCode);

    if (isAlreadyPinned) {
        const confirmUnpin = confirm(`Are you sure you want to unpin this bus stop?`);
        if (confirmUnpin) {
            pinnedBusStops = pinnedBusStops.filter((stop) => stop.BusStopCode !== busStop.BusStopCode);
            localStorage.setItem('bookmarkedBusStops', JSON.stringify(pinnedBusStops));
            alert(`Bus Stop Unpinned.`);
            pinButton.className = 'btn btn-toPin btn-nbs btn-sm';
            pinButton.innerHTML = '<i class="fa-sharp fa-regular fa-thumbtack-angle"></i>';
        }
    } else {
        pinnedBusStops.push(busStop);
        localStorage.setItem('bookmarkedBusStops', JSON.stringify(pinnedBusStops));
        alert(`Bus Stop Pinned.`);
        pinButton.className = 'btn btn-unpin btn-nbs btn-sm';
        pinButton.innerHTML = '<i class="fa-solid fa-thumbtack-angle-slash"></i>';
    }
}

// Display the 3 nearest bus stops
function displayBusStops(busStops) {
    const busStopsContainer = document.getElementById('bus-stops');
    busStopsContainer.innerHTML = '';

    if (!busStops || busStops.length === 0) {
        busStopsContainer.innerHTML = '<p class="pin-msg"><i class="fa-solid fa-circle-info"></i>No Bus Stops found nearby.</p>';
        return;
    }

    const pinnedBusStops = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];

    busStops.forEach((busStop) => {
        const distance = busStop.distance < 1
            ? `${(busStop.distance * 1000).toFixed(0)}m`
            : `${busStop.distance.toFixed(2)} km`;

        const isPinned = pinnedBusStops.some((stop) => stop.BusStopCode === busStop.BusStopCode);

        const busStopElement = document.createElement('div');
        busStopElement.className = 'bus-stop';
        busStopElement.innerHTML = `
            <div class="bus-stop-info">
                <div class="bus-stop-code">
                    <img src="assets/bus-icon.png" alt="Bus Icon">
                    <span class="bus-stop-code-text">${busStop.BusStopCode}</span>
                </div>
                <div class="bus-stop-details">
                <span class="bus-stop-description">${busStop.Description}</span>&nbsp;&nbsp;|&nbsp;
                <span class="road-name">${busStop.RoadName}</span>&nbsp;|&nbsp;
                <span class="distance">${distance}</span>
                </div>
            </div>
            <button class="${isPinned ? 'btn btn-unpin btn-nbs btn-sm' : 'btn btn-toPin btn-nbs btn-sm'} pin-button">
                <i class="${isPinned ? 'fa-solid fa-thumbtack-angle-slash' : 'fa-sharp fa-regular fa-thumbtack-angle'}"></i>
            </button>
        `;

        busStopElement.addEventListener('click', () => {
            window.location.href = `art.html?BusStopCode=${encodeURIComponent(busStop.BusStopCode)}`;
        });

        const pinButton = busStopElement.querySelector('.pin-button');
        pinButton.addEventListener('click', (event) => {
            event.stopPropagation();
            togglePinBusStop(busStop, pinButton);
        });

        busStopsContainer.appendChild(busStopElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBusStopButton = document.querySelector('a[href="buszy.html"]');
    const searchInput = document.getElementById('bus-stop-search');
    if (searchBusStopButton && searchInput) {
        searchBusStopButton.addEventListener('click', () => {
            searchInput.value = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const busStopCode = urlParams.get('BusStopCode');
    if (busStopCode) {
        const searchInput = document.getElementById('bus-stop-search');
        if (searchInput) {
            searchInput.value = busStopCode;
        }
    }
});