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

// Array holding the paths to your 5 video files
const videos = [
  'assets/videos/Video1_Clouds_Cut',
  'assets/videos/Video2_Powder_Cut',
  'assets/videos/Video3_Meshglobes_Cut',
  'assets/videos/Video4_Sunset_Cut',
  'assets/videos/Video5_Beach_Cut'
];

// 🔹 Function to determine whether to use `.webm` or `.mp4`
function getVideoSrc(basePath) {
  return basePath + (document.createElement('video').canPlayType('video/webm') ? '_webm.webm' : '.mp4');
}

let currentIndex = 0;
let activePlayer = 1; // Start with heroVideo1 active

const video1 = document.getElementById('heroVideo1');
const video2 = document.getElementById('heroVideo2');

function playVideoSequence() {
let activeVideo = activePlayer === 1 ? video1 : video2;
let hiddenVideo = activePlayer === 1 ? video2 : video1;

currentIndex = (currentIndex + 1) % videos.length;
hiddenVideo.src = getVideoSrc(videos[currentIndex]); // ✅ Load the correct format

hiddenVideo.onloadeddata = () => {
  hiddenVideo.play();
  hiddenVideo.style.opacity = 1;
  activeVideo.style.opacity = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  setTimeout(playVideoSequence, 4700);
};
}

// ✅ Initialize: load and play the first video with correct format
video1.src = getVideoSrc(videos[currentIndex]);
video1.play();

// ✅ Force autoplay on mobile browsers
document.addEventListener('DOMContentLoaded', () => {
  video1.play().catch(error => console.log("Autoplay blocked:", error));
  video2.play().catch(error => console.log("Autoplay blocked:", error));
});

// Start the video switching loop after 5 seconds
setTimeout(playVideoSequence, 4700);