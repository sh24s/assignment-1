// ===== Coin sound =====
const coinSound = new Audio("assets/sounds/mario_coin_sound.mp3");

// Play coin sound anywhere on page click
document.body.addEventListener("click", () => {
  coinSound.currentTime = 0; 
  coinSound.play();
});

// ===== Blocks Reveal Skills =====
document.querySelectorAll(".block").forEach(block => {
  block.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const skill = block.getAttribute("data-skill");
    block.classList.add("revealed");
    block.textContent = skill; // show skill inside white box
    coinSound.currentTime = 0;
    coinSound.play();
  });
});





