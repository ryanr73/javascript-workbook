'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(userGuess) {
  //create two options: 1) right color, right place, 2)right color, wrong place
  //alert user for hint option 1 or 2, must set up format of [1-2]
  let exactMatch = 0;
  let correctLetter = 0;
  let solutionArr = solution.split('');
  let userGuessArr = userGuess.split('');
  for (let i=0; i<userGuess.length; i++) {
    if (userGuess[i] === solution[i]) {
      exactMatch++;
      solutionArr[i] = '';
      userGuessArr[i]= '';
    }
  }
  for(let i=0; i<userGuessArr.length; i++) {
    if(userGuessArr[i]) {
      for (let j=0; j<solutionArr.length; j++) {
        if (userGuessArr[i] === solutionArr[j]) {
          correctLetter++;
          solutionArr[j] = '';
        }
      }
    }
  }
  return `${exactMatch}-${correctLetter}`;
}

  //valid contains a-h and only four letters
  //valid tests player entry
function valid(userGuess) {
  if (userGuess.length !== solution.length) {
    return false;
  }
  return userGuess.split('').every(myLet => letters.some(validLetter => myLet === validLetter));
  // console.log(solution);
  // console.log(guess);
  return true;
}

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  // if test entry contains a-h and only four letters
  //    test for win
  //    if no win, generateHint
  //else test entry is bad, alert user to try again

  if (valid(guess)) {
    board[board.length] = `${guess} : ${generateHint(guess)}`;
    if (guess === solution) {
      console.log('You Win!')
    } else {
      console.log(`Hint (exact match-correct letter): ${generateHint(guess)}`);
    }
  } else {
    console.log('Wrong options, use only letters A-H and only 4 letters');
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
