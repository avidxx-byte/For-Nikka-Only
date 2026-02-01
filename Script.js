const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

// When she clicks Yes
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay! Mahal na mahal kita ❤️";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif"; // Happy cat/bear gif
    
    // Hide the No button and make Yes button bigger or hide it too
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// When she hovers over No (Desktop)
noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.position = "absolute";
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});
