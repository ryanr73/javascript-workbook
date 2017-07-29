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

function generateHint() {
  //create two options: 1) right color, right place, 2)right color, wrong place
  //alert user for hint option 1 or 2
  console.log('generate hint');

}

  //valid contains a-h and only four letters
  //valid tests player entry
function valid(guess) {
 if (guess.length !== solution.length) {
   return false;
 }
 return guess.split('').every(myLet => letters.some(validLetter => myLet === validLetter));
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
    if (guess === solution) {
      console.log('You Win!')
    } else {
      generateHint;
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
