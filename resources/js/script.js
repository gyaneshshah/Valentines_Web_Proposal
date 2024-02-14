const mainVideo = document.getElementById('main-video');
const nextVideoYes = document.getElementById('next-video-yes');
const nextVideoNo = document.getElementById('next-video-no');
const overlay = document.getElementById('overlay');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Define the paths for the next videos
const nextVideoYesSrc = 'resources/next-video-yes.mp4';
const nextVideoNoSrc = 'resources/next-video-no.mp4';

// Preload the next videos
nextVideoYes.load();
nextVideoNo.load();

mainVideo.addEventListener('ended', function() {
    overlay.classList.remove('hidden');
});

yesBtn.addEventListener('click', function() {
    // Switch to the next video for "Yes"
    mainVideo.classList.add('hidden');
    nextVideoYes.classList.remove('hidden');
    nextVideoYes.play();
    // Hide the overlay
    overlay.classList.add('hidden');
});

noBtn.addEventListener('click', function() {
    // Switch to the next video for "No"
    mainVideo.classList.add('hidden');
    nextVideoNo.classList.remove('hidden');
    nextVideoNo.play();
    // Hide the overlay
    overlay.classList.add('hidden');
});
