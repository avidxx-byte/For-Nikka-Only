const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
    document.getElementById("question").innerHTML = "Yay! Best day ever! ❤️";
    document.getElementById("message").innerHTML = "Mahal na mahal kita, Nikka! See you on the 14th! 😘";
    
    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

function moveButton() {
    // Keeps the button within the visible screen area
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth - 20));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight - 20));
    
    noBtn.style.position = "fixed";
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});
