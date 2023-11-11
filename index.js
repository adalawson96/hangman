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

let currentWord = {};

// Generate hint and matching word
const getRandomWord = () => {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(currentWord.word);
    document.querySelector('.hint-text b').innerText = currentWord.hint;
    wordDisplay.innerHTML = currentWord.word.split('').map(() => `<li class="letter"></li>`).join('');
};

// Event listener for the form submission and log the letter
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredLetter = letterInput.value.toLowerCase();
    console.log(enteredLetter);
    // Clear the input field
    letterInput.value = '';
    
    if (currentWord.word.includes(enteredLetter)) {
        console.log('true');
    } else {
        console.log('false');
    }
});

getRandomWord();
