function keyboardButtonPress(event) {
    const pressedKey = event.key;
    if (pressedKey === 'Escape') {
        gameOver();
    }
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log(pressedKey, currentAlphabet);

    // Only respond to keyboard input if the game is active
    if (currentAlphabet) {
        if (pressedKey === currentAlphabet) {
            removeBgColorById(currentAlphabet);
            continuePlay();

            const currentScore = document.getElementById('current-score');
            const currentScoreText = parseInt(currentScore.innerText);

            const updatedScore = currentScoreText + 1;
            currentScore.innerText = updatedScore;

        } else {
            const currentLife = document.getElementById('current-life');
            const currentLifeText = parseInt(currentLife.innerText);

            const updatedLife = currentLifeText - 1;
            currentLife.innerText = updatedLife;
            if (updatedLife <= 0) {
                gameOver();
            }
        }
    }
}

// Handle touch events for mobile devices
function handleTouch(event) {
    const pressedKey = event.target.innerText; // Get the text from the tapped key
    keyboardButtonPress({ key: pressedKey }); // Call the existing key press function
}

document.addEventListener('keyup', keyboardButtonPress);

// Add event listeners for touch events
const kbdElements = document.querySelectorAll('.kbd');
kbdElements.forEach(kbd => {
    kbd.addEventListener('touchstart', handleTouch);
    kbd.addEventListener('click', handleTouch); // Also handle clicks for non-touch devices
});

function continuePlay() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function gameOver() {
    hideElementById('game-screen');
    showElementById('final-score-screen');
    const currentScore = document.getElementById('current-score');
    const finalScore = document.getElementById('final-score');

    // Get the current score value
    const currentScoreValue = parseInt(currentScore.innerText);
    // Set the final score value
    finalScore.innerText = currentScoreValue;
}

function play() {
    hideElementById('home-screen');
    showElementById('game-screen');
    continuePlay();
}

function playAgain() {
    hideElementById('final-score-screen');
    showElementById('game-screen');
    const initialScore = 0;
    const initialLife = 3;

    const currentScore = document.getElementById('current-score');
    currentScore.innerText = initialScore;
    const currentLife = document.getElementById('current-life');
    currentLife.innerText = initialLife;
}

