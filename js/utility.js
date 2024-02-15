function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
} 

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]')
}
function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}

function play(){
    hideElementById('home-screen');
    showElementById('game-screen'); 
    continuePlay();
}

function gameOver(elementId){
    hideElementById('game-screen');
    showElementById('final-score-screen');
    const currentScore = document.getElementById('current-score');
    const finalScore = document.getElementById('final-score');

    // Get the current score value
    const currentScoreValue = parseInt(currentScore.innerText);

    // Set the final score value
    finalScore.innerText = currentScoreValue;
    
}
function playAgain(){
    hideElementById('final-score-screen');
    showElementById('game-screen'); 
    const initialScore = 0;
    const initialLife = 3;

    const currentScore = document.getElementById('current-score');
    currentScore.innerText = initialScore;
    const currentLife = document.getElementById('current-life');
    currentLife.innerText = initialLife;
    
}