// ----------swiper-slider---------
const tabs = document.querySelectorAll(".scrollable-tabs-container a");

const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");

const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow");
const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow");

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("active");
    });
});

const manageIcons = () => {
    // Check if elements exist
    if (!tabsList || !leftArrowContainer || !rightArrowContainer) {
        return;
    }
    
    // Force recalculate layout
    tabsList.offsetHeight;
    
    // Check if scrolling is needed with a small tolerance
    const isScrollable = tabsList.scrollWidth > (tabsList.clientWidth + 2);
    
    
    if (!isScrollable) {
        // Force hide both arrows if no scrolling is needed
        leftArrowContainer.style.setProperty('display', 'none', 'important');
        rightArrowContainer.style.setProperty('display', 'none', 'important');
        leftArrowContainer.classList.remove("active");
        rightArrowContainer.classList.remove("active");
        return;
    }
    
    // Show arrows if scrolling is needed
    leftArrowContainer.style.setProperty('display', 'flex', 'important');
    rightArrowContainer.style.setProperty('display', 'flex', 'important');
    
    // Manage left arrow - hide if at the beginning
    if (tabsList.scrollLeft <= 5) {
        leftArrowContainer.classList.remove("active");
        leftArrowContainer.style.setProperty('display', 'none', 'important');
    } else {
        leftArrowContainer.classList.add("active");
        leftArrowContainer.style.setProperty('display', 'flex', 'important');
    }

    // Manage right arrow
    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 5;

    if (tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
        rightArrowContainer.style.setProperty('display', 'none', 'important');
    } else {
        rightArrowContainer.classList.add("active");
        rightArrowContainer.style.setProperty('display', 'flex', 'important');
    }
};

// Add event listeners only if elements exist
if (rightArrow && tabsList) {
    rightArrow.addEventListener("click", () => {
        tabsList.scrollLeft += 200;
        setTimeout(manageIcons, 10);
    });
}

if (leftArrow && tabsList) {
    leftArrow.addEventListener("click", () => {
        tabsList.scrollLeft -= 200;
        setTimeout(manageIcons, 10);
    });
}

if (tabsList) {
    tabsList.addEventListener("scroll", () => {
        setTimeout(manageIcons, 10);
    });
}

// Add resize event listener to check arrows when window is resized
window.addEventListener("resize", () => {
    setTimeout(manageIcons, 100);
});

// Initial check when page loads
document.addEventListener("DOMContentLoaded", () => {
    // Add multiple checks to ensure it works
    setTimeout(manageIcons, 100);
    setTimeout(manageIcons, 500);
    setTimeout(manageIcons, 1000);
});

// Also check on window load
window.addEventListener("load", () => {
    setTimeout(manageIcons, 100);
});