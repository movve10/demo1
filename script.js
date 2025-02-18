const form = document.getElementById('contact-form');
const feedbackMessage = document.getElementById('feedback-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from being submitted.

    // Hide the form
    form.querySelector('form').style.display = 'none';

    // Show the feedback message with fade-in effect
    feedbackMessage.style.display = 'block';
    feedbackMessage.style.opacity = 0; // Start as invisible
    feedbackMessage.style.transition = 'opacity 0.7s ease-in'; // Set transition
    setTimeout(() => {
        feedbackMessage.style.opacity = 1; // Fade in after setting the transition
    }, 150); // Small delay to trigger the transition

    // Reset the form after 5 seconds
    form.reset(); // Reset the form
});
