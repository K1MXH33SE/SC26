// Accordion Toggle
function toggleContent(elementId, headerElement) {
    var content = document.getElementById(elementId);
    var icon = headerElement.querySelector('.accordion-icon');

    if (content.style.maxHeight) {
        // CLOSE
        content.style.maxHeight = null;
        icon.innerHTML = "+";
        content.classList.remove('open'); // Removes class to rotate compass back
    } else {
        // OPEN
        content.style.maxHeight = content.scrollHeight + "px";
        icon.innerHTML = "&mdash;";
        content.classList.add('open'); // Adds class to rotate compass 270deg
    }
}

// Horizontal Scroll Logic
const scrollContainer = document.querySelector('.scroll-container');
const stickyWrapper = document.querySelector('.sticky-wrapper');
const horizontalTrack = document.querySelector('.horizontal-track');

window.addEventListener('scroll', () => {
    // 1. Get position relative to viewport
    const containerTop = scrollContainer.getBoundingClientRect().top;
    
    // 2. Dimensions
    const containerHeight = scrollContainer.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // 3. Logic for percentage scrolled
    let percentage = 0;
    
    if (containerTop <= 0 && containerTop > -(containerHeight - viewportHeight)) {
        const scrolledDistance = Math.abs(containerTop);
        const maxDistance = containerHeight - viewportHeight;
        percentage = scrolledDistance / maxDistance;
    } else if (containerTop <= -(containerHeight - viewportHeight)) {
        percentage = 1;
    }
    
    // 4. Move Track (300vw for 3 extra slides -> Total 4 slides)
    const moveAmount = percentage * 300; 
    horizontalTrack.style.transform = `translateX(-${moveAmount}vw)`;
});

// --- VIDEO SOUND TOGGLE ---
const videoPlayer = document.querySelector('.video-player');
const soundBtn = document.getElementById('soundToggle');

if(soundBtn && videoPlayer) {
    soundBtn.addEventListener('click', () => {
        if(videoPlayer.muted) {
            videoPlayer.muted = false; // Unmute
            soundBtn.textContent = "SOUND OFF";
        } else {
            videoPlayer.muted = true; // Mute
            soundBtn.textContent = "SOUND ON";
        }
    });
}