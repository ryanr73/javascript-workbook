//Whiteboard for checkers
//board is already created, so it needs pieces. First create checkers using
//symbols to populate board
//place checkers on board
//white checkers array coordinates by column/row
//[0,1], [0,3], [0,5], [0,7],
//[1,0], [1,2], [1,4], [1,6],
//[2,1], [2,3], [2,5], [2,7]
//black checkers array coordinates by colum/row
//[5,0], [5,2], [5,4], [5,6],
//[6,1], [6,3], [6,5], [6,7],
//[7,0], [7,2], [7,4], [7,6]
//Once pieces are placed on board, create method to select a checker to move
//will need a start point and end point
//create legal and illegal moves
//Also create metod for killing a checker once jumped (use splice method) and
//create empty space when checker is removed
//check for win once white or black are removed
//clear board, restart game

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // create checker pieces, white & black
  //use string.fromCharCode because it uses unicode to create symbols of circles
  //for checkers pieces
  if(color === 'white') {
    this.symbol = String.fromCharCode(0x0263A);
  }
  else if (color === 'black') {
    this.symbol = String.fromCharCode(0x0263B);
  }
}

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  // Your code here
//create an array for checkers
//create checkers on board
this.checkers = [];
//creates white checkers on board, adds to checkers array
  this.createCheckers = function() {
    for (let i = 0; i <= 2; i++) {
        for (let j = 1; j <= 7; j+=2) {
          if ((i === 1) && (j % 2 !== 0)) (j = j - 1);
          let whiteChecker = new Checker('white');
          this.grid[i][j] = whiteChecker;
          this.checkers.push(whiteChecker);
  }
}
//creates black checkers on board, adds to checkers array
for (var i = 5; i <= 7; i++) {
     for (var j = 1; j <= 7; j+=2) {
       if ((i === 5 || i === 7) && (j % 2 !== 0)) (j = j - 1);
       let blackChecker = new Checker('black');
       this.grid[i][j] = blackChecker;
       this.checkers.push(blackChecker);
     }
   };
 }
 this.selectChecker = function(position) {
     console.log(this.grid);
   }
 }

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();

  };
}


function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
