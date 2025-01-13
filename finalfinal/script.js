document.addEventListener('DOMContentLoaded', function() {
    // Select all value items
    const valueItems = document.querySelectorAll('.value-item');
  
    // Ensure timeline items are defined
    const timelineItems = document.querySelectorAll('.services-item');
  
    // Initially hide all answers and set the first item to active
    valueItems.forEach((item, index) => {
        const answer = item.querySelector('.value-answer');
  
        if (index === 0) {
            item.classList.add('active'); // Add active class to the first item
            answer.style.display = 'block'; // Show the answer for the first item
        } else {
            answer.style.display = 'none'; // Hide all other answers
        }
    });
  
    // Add event listeners to each question
    valueItems.forEach(item => {
        const question = item.querySelector('.value-question');
        const answer = item.querySelector('.value-answer');
        const toggleSign = item.querySelector('.toggle-sign'); 
  
        question.addEventListener('click', () => {
        // Check if the item is already active
        const isActive = item.classList.contains('active');

        // Hide all answers and remove active class
        valueItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.value-answer').style.display = 'none'; // Hide all answers
            i.querySelector('.toggle-sign').textContent = '+'; // Change all signs to plus
        });

        // If it wasn't active, activate it and show the answer
        if (!isActive) {
            item.classList.add('active');
            answer.style.display = 'block'; // Show the answer for the clicked question
            toggleSign.textContent = '-'; // Change the sign to minus
        }
    });
    });
  
    // Loader functionality
    const loader = document.getElementById("loader");
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.display = "none"; // Hide loader
        }, 2300); // 2 seconds delay for loader
    });
  
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
  
    if (hamburgerMenu && mobileMenu && closeMenu) {
        hamburgerMenu.addEventListener('click', function() {
            mobileMenu.classList.add('show'); // Show mobile menu
        });
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('show'); // Hide mobile menu
        });
    }
  
    // Function to check if the element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && // Top is visible
            rect.bottom > 0                   // Bottom is visible
        );
    }
  
    // Function to check all timeline items on scroll
    function checkTimelineItems() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('show');  // Add 'show' class when in viewport
            } else {
                item.classList.remove('show'); // Remove 'show' class when scrolled away
            }
        });
    }
  
    // Check on load and when scrolling
    window.addEventListener('scroll', checkTimelineItems);
    window.addEventListener('load', checkTimelineItems);
  
    // Profile toggle functionality
    const profileModal = document.getElementById('profileModal');
    const viewProfileButton = document.getElementById('viewProfileButton'); // Ensure this button exists
  
    if (viewProfileButton) {
        viewProfileButton.addEventListener('click', () => {
            profileModal.style.display = 'block'; // Show the modal
        });
    }
  
    const closeModalButton = document.getElementById('closeModal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            profileModal.style.display = 'none'; // Hide the modal
        });
    }
  });
  