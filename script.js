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
  'assets/videos/video1_clouds_cut.mp4',
  'assets/videos/video2_powder_cut.mp4',
  'assets/videos/video3_meshglobes_cut.mp4',
  'assets/videos/video4_Sunset_cut.mp4',
  'assets/videos/video5_Beach_cut.mp4'
];

let currentIndex = 0;
let activePlayer = 1; // Start with heroVideo1 active

const video1 = document.getElementById('heroVideo1');
const video2 = document.getElementById('heroVideo2');

function playVideoSequence() {
  // Determine active and hidden videos
  let activeVideo, hiddenVideo;
  if (activePlayer === 1) {
    activeVideo = video1;
    hiddenVideo = video2;
  } else {
    activeVideo = video2;
    hiddenVideo = video1;
  }

  // Determine the next video in the sequence
  currentIndex = (currentIndex + 1) % videos.length;
  
  // Load the next video into the hidden element
  hiddenVideo.src = videos[currentIndex];
  hiddenVideo.load();
  
  hiddenVideo.onloadeddata = () => {
    // Start playing the hidden video
    hiddenVideo.play();
    
    // Crossfade: show the hidden video and hide the active one
    hiddenVideo.style.opacity = 1;
    activeVideo.style.opacity = 0;
    
    // Update activePlayer for next switch
    activePlayer = activePlayer === 1 ? 2 : 1;
    
    // Set timer for next transition (5 seconds)
    setTimeout(playVideoSequence, 5000);
  };
}

// Initialize: load and play the first video in heroVideo1
video1.src = videos[currentIndex];
video1.play();

// Start the switching sequence after 5 seconds
setTimeout(playVideoSequence, 4700);