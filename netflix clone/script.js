// script.js

// Example functionality: Auto-scroll for content sections
const scrollContainer = (containerSelector, scrollAmount) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        let scrollPosition = 0;
        setInterval(() => {
            scrollPosition += scrollAmount;
            if (scrollPosition >= container.scrollWidth) {
                scrollPosition = 0;
            }
            container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }, 3000); // Scroll every 3 seconds
    }
};

// Apply auto-scroll to movies and series containers
scrollContainer('.movies-container', 200);
scrollContainer('.web-series-container', 200);
