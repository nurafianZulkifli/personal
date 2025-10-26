document.addEventListener("DOMContentLoaded", function () {
    // Initialize Isotope
    const portfolioContainer = document.querySelector(".pw-portfolio");

    // Wait for all images to load before initializing Isotope
    imagesLoaded(portfolioContainer, function () {
        const iso = new Isotope(portfolioContainer, {
            itemSelector: ".single_gallery_item",
            layoutMode: "fitRows", // Ensures items are arranged in rows without gaps
            fitRows: {
                gutter: 0, // Removes any extra spacing between rows
            },
            getSortData: {
                year: "[data-year] parseInt", // Sort by year (numeric value from data-year attribute)
                title: ".hover-content-blog h4", // Sort by title (text inside h4 in hover-content-blog)
            },
        });

        // Filter functionality - FIXED: Changed from .btn-filter to .btn-fliter to match HTML
        const filterButtons = document.querySelectorAll(".btn-fliter");
        filterButtons.forEach((button) => {
            button.addEventListener("click", function () {
                // Remove active class from all buttons
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                // Add active class to the clicked button
                this.classList.add("active");

                // Get the filter value from the button
                const filterValue = this.getAttribute("data-filter");
                // Apply the filter
                iso.arrange({ filter: filterValue });
            });
        });

        // Sort functionality
        const sortSelect = document.getElementById("sort-options");
        if (sortSelect) {
            sortSelect.addEventListener("change", function () {
                const sortValue = this.value;

                if (sortValue === "newest") {
                    iso.arrange({ sortBy: "year", sortAscending: false }); // Sort by year descending
                } else if (sortValue === "oldest") {
                    iso.arrange({ sortBy: "year", sortAscending: true }); // Sort by year ascending
                } else if (sortValue === "alphabetical") {
                    iso.arrange({ sortBy: "title", sortAscending: true }); // Sort by title alphabetically
                } else {
                    iso.arrange({ sortBy: "original-order" }); // Default order
                }
            });
        }

        // Dynamic Title Update
        const titleElement = document.getElementById("filter-title");
        filterButtons.forEach((button) => {
            button.addEventListener("click", function () {
                // Get the filter text from the button
                const filterText = this.textContent.trim();
                // Update the title
                titleElement.textContent = filterText;
            });
        });

        // Search functionality
        const searchInput = document.getElementById("portfolio-search");
        const portfolioItems = document.querySelectorAll(".single_gallery_item");
        const noResultsMessage = document.getElementById("no-results-message");

        if (searchInput) {
            searchInput.addEventListener("input", () => {
                const searchTerm = searchInput.value.toLowerCase();
                let hasResults = false;

                portfolioItems.forEach((item) => {
                    const title = item.querySelector("h4").textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        item.style.display = "block";
                        hasResults = true;
                    } else {
                        item.style.display = "none";
                    }
                });

                // Show or hide the "Project Not Found" message
                if (noResultsMessage) {
                    noResultsMessage.style.display = hasResults ? "none" : "block";
                }

                // Trigger Isotope layout recalculation to remove blank spaces
                iso.arrange();
            });
        }
    });
});