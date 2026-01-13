
// *********************************
// :: Bus Stop Search and Pagination
// *********************************
document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('bus-stop-search');
    const apiUrl = 'https://bat-lta-9eb7bbf231a2.herokuapp.com/bus-stops';
    const listGroup = document.querySelector('.list-group');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const limit = 20;
    let allBusStops = [];
    let currentPage = 1;
    let totalPages = 1;

    // Function to fetch all bus stops in batches
    async function fetchAllBusStops() {
        let allBusStops = [];
        let skip = 0;
        const batchSize = 500;

        while (true) {
            try {
                const response = await fetch(`${apiUrl}?$skip=${skip}&$top=${batchSize}`, {
                    method: 'GET',
                    headers: { accept: 'application/json' },
                });

                if (!response.ok) throw new Error('Failed to fetch bus stops');

                const data = await response.json();
                allBusStops = allBusStops.concat(data.value);

                if (data.value.length < batchSize) break;

                skip += batchSize;
            } catch (error) {
                console.error('Error fetching bus stops:', error);
                break;
            }
        }

        localStorage.setItem('allBusStops', JSON.stringify(allBusStops));
        return allBusStops;
    }

    // Function to display bus stops for the current page
    function displayBusStops(busStops, page) {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedBusStops = busStops.slice(startIndex, endIndex);

        listGroup.innerHTML = '';
        if (busStops.length === 0) {
            listGroup.innerHTML = '<p class="pin-msg"><i class="fa-solid fa-circle-info"></i>No bus stops found.</p>';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            return;
        }

        // Get bookmarked bus stops from localStorage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];

        paginatedBusStops.forEach((busStop) => {
            const listItem = document.createElement('div');
            listItem.className = 'list-group-item';
            listItem.style.display = 'flex';
            listItem.style.justifyContent = 'space-between';
            listItem.style.alignItems = 'center';

            // Make the bus stop details clickable
            const link = document.createElement('a');
            link.href = `art.html?BusStopCode=${encodeURIComponent(busStop.BusStopCode)}`;
            link.innerHTML = `
                    <div class="bus-stop-info">
                        <span class="bus-stop-code">
                            <img src="assets/bus-icon.png" alt="Bus Icon"> <!-- Replace with your bus icon path -->
                            <span class="bus-stop-code-text">${busStop.BusStopCode}</span>
                        </span>
                        <span class="bus-stop-description">${busStop.Description}</span>
                    </div>
                `;
            link.style.flexGrow = '1';
            link.style.textDecoration = 'none';
            link.style.color = 'inherit';

            // Pinned button
            const bookmarkButton = document.createElement('button');
            const isPinned = bookmarks.some((b) => b.BusStopCode === busStop.BusStopCode);

            if (isPinned) {
                // If already bookmarked, show as bookmarked
                bookmarkButton.innerHTML = '<i class="fa-solid fa-thumbtack-angle-slash"></i>'
                bookmarkButton.className = 'btn btn-unpin btn-sm';
            } else {
                // If not bookmarked, show as a regular bookmark button
                bookmarkButton.innerHTML = '<i class="fa-sharp fa-regular fa-thumbtack-angle"></i>';
                bookmarkButton.className = 'btn btn-toPin btn-sm';
            }

            // Add event listener to toggle bookmark
            bookmarkButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the click from triggering the link
                event.preventDefault(); // Prevent default link behavior
                togglePinned(busStop, bookmarkButton);
            });

            listItem.appendChild(link);
            listItem.appendChild(bookmarkButton);
            listGroup.appendChild(listItem);
        });

        prevButton.style.display = page > 1 ? 'inline-block' : 'none';
        nextButton.style.display = page < totalPages ? 'inline-block' : 'none';
    }

    // Function to toggle a bookmark
    function togglePinned(busStop, button) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];
        const bookmarkIndex = bookmarks.findIndex((b) => b.BusStopCode === busStop.BusStopCode);

        if (bookmarkIndex === -1) {
            // Add the pinned bus stop
            bookmarks.push(busStop);
            localStorage.setItem('bookmarkedBusStops', JSON.stringify(bookmarks));
            alert('Bus Stop Pinned.');

            // Update the button to indicate the bus stop is pinned
            button.innerHTML = '<i class="fa-solid fa-thumbtack-angle-slash"></i>';
            button.classList.remove('btn-toPin');
            button.classList.add('btn-unpin');
        } else {
            // Confirm before unpinning
            const confirmUnpin = confirm('Are you sure you want to unpin this bus stop?');
            if (!confirmUnpin) return;

            // Remove the pinned bus stop
            bookmarks.splice(bookmarkIndex, 1);
            localStorage.setItem('bookmarkedBusStops', JSON.stringify(bookmarks));
            alert('Bus Stop Unpinned.');

            // Update the button to indicate the bus stop is not pinned
            button.innerHTML = '<i class="fa-sharp fa-regular fa-thumbtack-angle"></i>';
            button.classList.remove('btn-unpin');
            button.classList.add('btn-toPin');
        }
    }

    // Load bus stops from localStorage or fetch from API
    const cachedBusStops = localStorage.getItem('allBusStops');
    if (cachedBusStops) {
        allBusStops = JSON.parse(cachedBusStops);
    } else {
        allBusStops = await fetchAllBusStops();
    }

    totalPages = Math.ceil(allBusStops.length / limit);
    displayBusStops(allBusStops, currentPage);

    // Pagination
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayBusStops(allBusStops, currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayBusStops(allBusStops, currentPage);
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredBusStops = allBusStops.filter((busStop) =>
            busStop.BusStopCode.toLowerCase().includes(query) ||
            busStop.Description.toLowerCase().includes(query)
        );
        totalPages = Math.ceil(filteredBusStops.length / limit);
        currentPage = 1;
        displayBusStops(filteredBusStops, currentPage);
    });
});


// *******************************
// :: Hide Keyboard on Outside Tap
// *******************************
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('touchstart', (event) => {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.tagName === 'INPUT' && !activeElement.contains(event.target)) {
            activeElement.blur();
        }
    });
});


// ****************************
// :: Loading Messages Rotation
// ****************************
document.addEventListener('DOMContentLoaded', () => {
    const loadingMessages = [
        "Loading Bus Arrival Data...",
        "Fetching All Bus Stop Data...",
        "First time use will take a lot longer...",
        "Once loaded, everything will be cached.",
        "Cached data means faster load times!"
    ];

    const loadingMessageElement = document.getElementById('loading-message');
    let messageIndex = 0;

    // Function to update the loading message
    const updateLoadingMessage = () => {
        loadingMessageElement.innerHTML = `
                <span class="spinner" role="status" style="margin-right: 0.5em;"></span>${loadingMessages[messageIndex]}
            `;
        messageIndex = (messageIndex + 1) % loadingMessages.length; // Cycle through messages
    };

    // Show the first message immediately
    updateLoadingMessage();

    // Change the message every 4 seconds
    setInterval(updateLoadingMessage, 4000);
});
