const button = document.getElementById("button");
let level = 0;
let clicks = 0;
let timeout = 500;
let gameStarted = false;

button.style.marginTop = "10px";
button.style.marginLeft = "10px";

button.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        moveButton();
    }
    clicks++;
    if (clicks === 3) {
        level++;
        clicks = 0;
        if (level <= 5) {
            alert(`You are the winner! You can go next level ${level}!`);
            timeout -= 100;
        } else {
            alert(`Congratulations! You have completed all levels!`);
            timeout = 500;
        }
    }
});

function moveButton() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomY = Math.random() * (windowHeight - buttonHeight);
    const randomX = Math.random() * (windowWidth - buttonWidth);

    button.style.marginTop = randomY + "px";
    button.style.marginLeft = randomX + "px";

    setTimeout(moveButton, timeout);
}
