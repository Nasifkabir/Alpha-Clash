function keyboardButtonPress(event){
    const pressedKey = event.key;
    if(pressedKey === 'Escape'){
        gameOver();
    }
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log(pressedKey , currentAlphabet);

    if(pressedKey === currentAlphabet){
        removeBgColorById(currentAlphabet);
        continuePlay();

        const currentScore = document.getElementById('current-score');
        const currentScoreText = parseInt(currentScore.innerText);

        const updatedScore = currentScoreText + 1;
        currentScore.innerText = updatedScore;

    }
    else{
        const currentLife = document.getElementById('current-life');
        const currentLifeText = parseInt(currentLife.innerText);

        const updatedLife = currentLifeText - 1;
        currentLife.innerText = updatedLife;
        if(updatedLife <= 0){
            gameOver();
            const updatedFinalScore = document.getElementById('final-score');
            updatedFinalScore = updatedScore;
            console.log(updatedFinalScore);
        }
    }

}

document.addEventListener('keyup', keyboardButtonPress);

function continuePlay(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);


}



