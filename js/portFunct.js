document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const sortDropdown = document.getElementById("sort-options");
    const searchInput = document.getElementById("search-input");
    const cardsContainer = document.querySelector(".wbnrfz-grid");
    const cards = Array.from(cardsContainer.querySelectorAll(".card"));

    // Helper to update grid class after fade animations
    function updateGridClass() {
        setTimeout(() => {
            const visibleCards = cards.filter(card => card.style.display !== "none");
            cardsContainer.classList.remove("two-cards", "one-card");
            if (visibleCards.length === 2) {
                cardsContainer.classList.add("two-cards");
            } else if (visibleCards.length === 1) {
                cardsContainer.classList.add("one-card");
            }
        }, 350); // Wait for fade-out animation to finish
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            cards.forEach(card => {
                if (filter === "*" || card.classList.contains(filter.substring(1))) {
                    card.style.display = "block";
                    card.classList.remove("fade-out");
                    card.classList.add("fade-in");
                } else {
                    card.classList.remove("fade-in");
                    card.classList.add("fade-out");
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });

            updateGridClass();
        });
    });

    // Sort functionality
    sortDropdown.addEventListener("change", function () {
        const sortValue = this.value;

        const sortedCards = [...cards].sort((a, b) => {
            if (sortValue === "newest") {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (sortValue === "oldest") {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            } else if (sortValue === "alphabetical") {
                const titleA = a.querySelector("h3").textContent.toLowerCase();
                const titleB = b.querySelector("h3").textContent.toLowerCase();
                return titleA.localeCompare(titleB);
            }
        });

        cardsContainer.innerHTML = "";
        sortedCards.forEach(card => cardsContainer.appendChild(card));
        updateGridClass();
    });

    // Search functionality
    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        cards.forEach(card => {
            const cardTitle = card.querySelector("h3").textContent.toLowerCase();
            if (cardTitle.includes(searchText)) {
                card.style.display = "block";
                card.classList.remove("fade-out");
                card.classList.add("fade-in");
            } else {
                card.classList.remove("fade-in");
                card.classList.add("fade-out");
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });

        updateGridClass();
    });
});