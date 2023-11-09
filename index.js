const wordList = [
    {
        word:'scooter',
        hint:'This is a two-wheeled vehicle',
    },
    {
        word:'country',
        hint:'A term often used to describe a nation or a sovereign state',
    },
    {
        word:'cat',
        hint:'mammal that is a companion',
    },
    {
        word:'excited',
        hint:'A word is used to describe a feeling of enthusiasm',
    },
    {
        word:'trip',
        hint:'A synonym for a journey or adventure',
    }
];

const wordDisplay = document.querySelector('.word-display');

const getRandomWord = () =>{
    const { word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    document.querySelector('.hint-text b').innerText = hint;
    wordDisplay.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('');
};




getRandomWord();