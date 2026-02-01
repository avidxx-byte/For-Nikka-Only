const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// Select the images
const mainImg = document.getElementById("main-gif"); // The center photo
const leftImg = document.querySelector(".left");
const rightImg = document.querySelector(".right");

yesBtn.addEventListener("click", () => {
    // 1. Update the Text
    document.getElementById("question").innerHTML = "Yay! Best day ever! ❤️";
    document.getElementById("message").innerHTML = "Mahal na mahal kita, baebii! Be my Valentine forevermore! 😘";
    
    // 2. Hide the side photos and the buttons
    leftImg.style.display = "none";
    rightImg.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // 3. Change the center photo to a celebration GIF
    // You can use this link or upload your own and put the filename here
    mainImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZ6bm93ZzRybm93ZzRybm93ZzRybm93ZzRybm93ZzRyJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCBmYyZjdD1n/UMon0fuimoAN9ueUNP/giphy.gif";
    
    // 4. Make the center photo bigger and straight
    mainImg.style.transform = "rotate(0deg) scale(1.5)";
});

function moveButton() {
    // 1. Get the padding/margin to keep it away from the very edge
    const padding = 50; 
    
    // 2. Calculate the maximum available width and height
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    // 3. Ensure the random number is at least 'padding' pixels away from 0
    const i = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const j = Math.max(padding, Math.floor(Math.random() * maxHeight));

    // 4. Force 'fixed' position so it doesn't care about the notebook card
    noBtn.style.position = "fixed";
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
    
    // 5. Make it stay on top of everything
    noBtn.style.zIndex = "1000";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});
