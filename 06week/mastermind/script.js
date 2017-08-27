'use strict';

document.addEventListener('DOMContentLoaded', () => {
// Your code here
let solution = '';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// assigns guess when clicking submit
document.querySelector('button').onclick = function() { let guess = (document.querySelector('input').value);
// runs mastermind
mastermind(guess);
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}
// runs generate solution... which oddly enough, generates a solution
generateSolution();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// all the hint caca
function generateHint(solution, guess) {
  // your code here
  let exactMatch = 0;
  let correctLetter = 0;
  let splSolution = solution.split('');
  let splGuess = guess.split('');
  for (var i = 0; i < splGuess.length; i++){
    if(splGuess[i] === splSolution[i]){
      exactMatch += 1;
    }

    if (splSolution.includes(splGuess[i])) {
      correctLetter += 1;
      let foundIndex = splSolution.indexOf(splGuess[i]);
      splSolution[foundIndex] = null;
    }
  }
  // added a couple of spaces to seperate guess from hint
  return `${exactMatch}-${correctLetter-exactMatch}`;
}

 function mastermind(guess) {
  // next 3 lines add a p, append to div(board) and fills it with guess and hint
  // solution = 'abcd'; // Comment this out to generate a random solution
  let newGuess = document.createElement('p')
  document.getElementById('board').appendChild(newGuess);
  newGuess.textContent = (guess + generateHint(solution, guess));
  if(guess === solution) {
    alert ("You guessed it!");
  } else {
    return generateHint(solution, guess);
  }
  // Clears page when clicking okay on alert.
  if(!alert("You guessed it!")){ location = location}
}

});
