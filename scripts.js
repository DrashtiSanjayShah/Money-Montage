// Select all value items
const valueItems = document.querySelectorAll('.value-item');

// Add event listeners to each question
valueItems.forEach(item => {
    const question = item.querySelector('.value-question');
    
    question.addEventListener('click', () => {
        // Toggle active class
        item.classList.toggle('active');
    });
});

// Set the first value item to active by default
valueItems[0].classList.add('active');
