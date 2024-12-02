function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get the nav element
const nav = document.querySelector('nav');

// Set a threshold for when the sticky effect should be removed (e.g., scroll 100px down)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Check if we've scrolled down past the threshold
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Add the class to remove sticky effect
        nav.classList.add('sticky-disabled');
    } else {
        // Remove the class to restore sticky effect
        nav.classList.remove('sticky-disabled');
    }

    // Update the scroll position
    lastScrollY = window.scrollY;
});
