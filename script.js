const words = ['girl','city','plane','bird','computer','icecream', 'facebook',
  'town',
  'beach',
  
];



let time = 10;

const timeInterval = setInterval(updateTime, 1000);

const timeEl = document.getElementById('time');

function updateTime() {
  time=time-1;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
// End
const endgameEl = document.getElementById('end-game-container');

function gameOver() {
  endgameEl.innerHTML = ` 
  <p>score : ${score}</p>
  <button onclick="location.reload()">End</button>`;

  endgameEl.style.display = 'flex';
}
let score = 0;

const scoreEl = document.getElementById('score');
function updateScore() {
  score=score+1;
  scoreEl.innerHTML = score;
}



const word = document.getElementById('word');
let randomWord;
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}


function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();


text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear 
    e.target.value = '';

    
  }
});