// Select all the teams items
const teamsItems = document.querySelectorAll('.teams-item');

// Function to check if the teams item is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check all teams items on scroll
function checkteamsItems() {
    teamsItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('show');  // Add 'show' class when in viewport
        }
    });
}

// Run the check on scroll and initially on page load
window.addEventListener('scroll', checkteamsItems);
window.addEventListener('load', checkteamsItems);
