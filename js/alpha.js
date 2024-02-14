
function continuePlay(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('game-screen'); 
    continuePlay();
}
