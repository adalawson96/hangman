const wordList = [
    {
        word: 'scooter',
        hint: 'This is a two-wheeled vehicle',
    },
    {
        word: 'country',
        hint: 'A term often used to describe a nation or a sovereign state',
    },
    {
        word: 'cat',
        hint: 'Mammal that is a companion',
    },
    {
        word: 'excited',
        hint: 'A word is used to describe a feeling of enthusiasm',
    },
    {
        word: 'trip',
        hint: 'A synonym for a journey or adventure',
    }
];

const letterInput = document.querySelector('#letter');
const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text');
const hangmanImage = document.querySelector('.hangman-box img');
const gameModal = document.querySelector('.game-modal');

let currentWord, correctLetters=[], wrongGuessCount = 0;
const maxGuesses = 6;

// Generate hint and matching word
const getRandomWord = () => {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(currentWord.word);
    document.querySelector('.hint-text b').innerText = currentWord.hint;
    wordDisplay.innerHTML = currentWord.word.split('').map(() => `<li class="letter"></li>`).join('');
};

const gameOver = (winner) => {
    setTimeout(() => {
        gameModal.classList.add('show');
    }, 3000)
}

// Event listener for the form submission and log the letter
const initGame = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredLetter = letterInput.value.toLowerCase();
    console.log(enteredLetter);
    // Clear the input field
    letterInput.value = '';
    // checking if the enteredLetter exist in the current word
    if (currentWord.word.includes(enteredLetter)) {
        // showing lal correct letter on the word display
        [...currentWord.word].forEach((letter, index) =>{
            if(letter === enteredLetter){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter ;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        // clicked letter does not exist update wrongGuessCount and img
        wrongGuessCount++;
        hangmanImage.src = `/public/hangman-${wrongGuessCount}.png`
    }
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these conditions meet 
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
});

getRandomWord();
