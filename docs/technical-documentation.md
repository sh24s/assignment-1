# Technical Documentation — Assignment 2

## 1. Project Architecture
- Frontend only: built using HTML, CSS, and JavaScript.
- No backend/server required; runs entirely in the browser.
- Assets: Images (Mario background, blocks, project screenshots) and audio ( Mario coin sound effect).

## 2. Styling (CSS)

- Font: Press Start 2P
 (Google Fonts) for retro pixel aesthetic.

- Theme: Pixel-style with borders, shadows, and white “content boxes” for readability.

# Key Sections:
- header → Red retro header bar with navigation links..
- .block-section → White content boxes (About, Projects, Contact).
- .blocks → Mario-style interactive skill blocks.

# Animations:
- .block:hover → small lift on hover.
- .fade-in → Smooth appear when section scrolls into view.
- .block.revealed → Glow + scale animation when skill is unlocked.


## 3. Interactivity (JavaScript)
- Coin Sound
const coinSound = new Audio("assets/sounds/mario_coin_sound.mp3");
document.body.addEventListener("click", () => {
  coinSound.currentTime = 0;
  coinSound.play();
});
(Plays Mario coin sound whenever the user clicks anywhere on the page).

- Skill Reveal Blocks
document.querySelectorAll(".block").forEach(block => {
  block.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const skill = block.getAttribute("data-skill");
    block.classList.add("revealed");
    block.textContent = skill;
    coinSound.currentTime = 0;
    coinSound.play();
  });
});

(Each .block has a data-skill (e.g., HTML, CSS)).

- On click → block changes style, reveals skill text, plays sound.


 ## 4. Assets Management

- Images:

mario.jpeg → page background.

block_svg.jpeg → hidden skill block design.

to-doList.png, timer.png → project previews.

-Audio:

mario_coin_sound.mp3 → click interaction sound effect.

## 5. Testing & Debugging

- Local test: Open index.html in browser.

- Check interactions:

Clicking skill blocks → reveal skill text + play coin sound.

Clicking anywhere else → play coin sound.

- Cross-browser:

Chrome, Firefox, Edge → fully functional.

Safari → may require enabling sound autoplay.


