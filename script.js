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
    // 1. Calculate safe bounds (80% of screen to keep it centered)
    const widthScope = window.innerWidth * 0.8;
    const heightScope = window.innerHeight * 0.8;
    
    // 2. Generate random position within that 80% scope
    const i = Math.floor(Math.random() * widthScope) + (window.innerWidth * 0.1);
    const j = Math.floor(Math.random() * heightScope) + (window.innerHeight * 0.1);

    // 3. Force the button to these coordinates
    noBtn.style.position = "fixed";
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
    
    // 4. Ensure it's on the very top layer
    noBtn.style.zIndex = "9999";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});
