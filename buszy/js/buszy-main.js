// ****************************
// :: Bookmark (Pin) Management for Bus Stops
// ****************************
document.addEventListener('DOMContentLoaded', async () => {
    const bookmarksContainer = document.getElementById('bookmarks-container');

    // Function to load bookmarks from localStorage
    async function loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];
        bookmarksContainer.innerHTML = '';

        // Check if there are no bookmarks
        if (bookmarks.length === 0) {
            bookmarksContainer.innerHTML = '<p class="pin-msg">Add a Bus Stop.</p>';
            return;
        }

        try {
            // Show a "Re-fetching in progress" message
            bookmarksContainer.innerHTML = '<p class="pin-msg">Re-fetching Data In Progress, your pinned bus stops will show shortly...</p>';

            // Check if bus stops are already cached in localStorage
            let busStops = JSON.parse(localStorage.getItem('allBusStops')) || [];
            if (busStops.length === 0) {
                // Fetch all bus stops from the /bus-stops endpoint if not cached
                let skip = 0;
                let hasMoreData = true;

                while (hasMoreData) {
                    const response = await fetch(`https://bat-lta-9eb7bbf231a2.herokuapp.com/bus-stops?$skip=${skip}`);
                    const data = await response.json();

                    if (data.value.length === 0) {
                        hasMoreData = false;
                    } else {
                        busStops = busStops.concat(data.value);
                        skip += 500; // Move to the next page
                    }
                }

                // Save the fetched bus stops to localStorage
                localStorage.setItem('allBusStops', JSON.stringify(busStops));
            }

            console.log('Fetched or Cached Bus Stops:', busStops); // Debugging: Log all fetched or cached bus stops

            // Clear the "Re-fetching" message and display bookmarks
            bookmarksContainer.innerHTML = '';

            if (bookmarks.length > 0) {
                bookmarks.forEach((bookmark) => {
                    const busStop = busStops.find(stop => stop.BusStopCode === bookmark.BusStopCode);

                    const listItem = document.createElement('div');
                    listItem.className = 'list-group-item';
                    listItem.style.display = 'flex';
                    listItem.style.justifyContent = 'space-between';
                    listItem.style.alignItems = 'center';

                    // Make the bus stop details clickable
                    const link = document.createElement('a');
                    link.href = `buszy/art.html?BusStopCode=${encodeURIComponent(bookmark.BusStopCode)}`;
                    link.innerHTML = `
                    <div class="bus-stop-info">
                        <span class="bus-stop-code">
                            <img src="buszy/assets/bus-icon.png" alt="Bus Icon"> <!-- Replace with your bus icon path -->
                            <span class="bus-stop-code-text">${busStop.BusStopCode}</span>
                        </span>
                        <span class="bus-stop-description">${busStop.Description}</span>
                    </div>
                `;
                    link.style.flexGrow = '1';
                    link.style.textDecoration = 'none';
                    link.style.color = 'inherit';

                    // Remove Bookmark button
                    const removeButton = document.createElement('button');
                    removeButton.innerHTML = '<i class="fa-solid fa-thumbtack-angle-slash"></i>';
                    removeButton.className = 'btn btn-unpin btn-2';
                    removeButton.addEventListener('click', (event) => {
                        event.stopPropagation(); // Prevent the click from triggering the link
                        event.preventDefault(); // Prevent default link behavior
                        confirmAndRemoveBookmark(bookmark.BusStopCode);
                    });

                    listItem.appendChild(link);
                    listItem.appendChild(removeButton);
                    bookmarksContainer.appendChild(listItem);
                });
            } else {
                // If no bookmarks exist after re-fetching, show the message
                bookmarksContainer.innerHTML = '<p class="pin-msg">Add a Bus Stop.</p>';
            }
        } catch (error) {
            console.error('Error fetching bus stops:', error);
            bookmarksContainer.innerHTML = '<p class="error-msg">Error loading bus stop data.</p>';
        }
    }

    // Function to confirm and remove a bookmark
    function confirmAndRemoveBookmark(busStopCode) {
        const confirmation = confirm('Are you sure you want to unpin this bus stop?');
        if (confirmation) {
            removeBookmark(busStopCode);
        }
    }

    // Function to remove a bookmark
    function removeBookmark(busStopCode) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedBusStops')) || [];
        const updatedBookmarks = bookmarks.filter((b) => b.BusStopCode !== busStopCode);
        localStorage.setItem('bookmarkedBusStops', JSON.stringify(updatedBookmarks));
        loadBookmarks(); // Refresh the displayed list
        alert('Bus Stop Unpinned.');
    }

    // Load bookmarks on page load
    loadBookmarks();
});


// ****************************
// :: Dynamic Greeting Based on Time of Day
// ****************************
document.addEventListener('DOMContentLoaded', () => {
    const allappsElement = document.querySelector('h2'); // Select the <h2> element

    // Function to determine the all-apps based on the current time
    function getGreeting() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 5 && hours < 12) {
            return 'Good Morning!';
        } else if (hours >= 12 && hours < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    }

    // Update the <h2> element with the all-apps
    allappsElement.textContent = getGreeting();
});


// ****************************
// :: Bus Stop Click Navigation
// ****************************
document.addEventListener('DOMContentLoaded', () => {
    const busStopElements = document.querySelectorAll('.bus-stop'); // Add a class to bus stop elements

    busStopElements.forEach((element) => {
        element.addEventListener('click', () => {
            const busStopCode = element.getAttribute('data-bus-stop-code'); // Get the bus stop code
            const busStopName = element.getAttribute('data-bus-stop-name'); // Optional: Get the bus stop name

            // Redirect to art.html with the bus stop code as a query parameter
            const url = new URL('art.html', window.location.origin);
            url.searchParams.set('BusStopCode', busStopCode);
            if (busStopName) {
                url.searchParams.set('BusStopName', busStopName); // Optional
            }
            window.location.href = url.toString();
        });
    });
});

// ****************************
// :: Mobile Swipe Navigation for Tabs
// ****************************

// Only enable swipe navigation for touches below the tabs and not when keyboard is shown
(function () {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum px for swipe
    const tabLinks = Array.from(document.querySelectorAll('#scrollable-tabs a'));
    const tabsElem = document.getElementById('scrollable-tabs');
    if (!tabLinks.length || !tabsElem) return;

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

    let swipeStartY = 0;

    document.addEventListener('touchstart', function (e) {
        if (e.touches.length === 1) {
            // Only start swipe if below tabs and keyboard is not shown
            swipeStartY = e.touches[0].clientY;
            if (isBelowTabs(swipeStartY) && !isKeyboardShown()) {
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
