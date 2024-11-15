// Select the toggle button and add an event listener
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    // Toggle dark mode on the body
    document.body.classList.toggle('dark-mode');

    // Update the button text based on theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Theme';
    } else {
        themeToggle.textContent = 'Dark Theme';
    }
});

// Handle "I'm Feeling Lucky" button
const luckyButton = document.getElementById('feeling-lucky');
luckyButton.addEventListener('click', () => {
    const query = document.querySelector('input[name="q"]').value;
    if (query) {
        // Redirect to Google's "I'm Feeling Lucky" functionality
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    } else {
        alert('Please enter a search term!');
    }
});
