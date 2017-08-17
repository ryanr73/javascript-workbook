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

//create an array for checkers
//creates checkers on board
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
    for (let i = 5; i <= 7; i++) {
      for (let j = 1; j <= 7; j+=2) {
        if ((i === 5 || i === 7) && (j % 2 !== 0)) (j = j - 1);
        let blackChecker = new Checker('black');
        this.grid[i][j] = blackChecker;
        this.checkers.push(blackChecker);
      }
    };
  }
  this.selectChecker = function(position) {
    console.log(this.grid);
  };
}
// killing a checker: 1)
this.killChecker = function(position) {
  let row = position[0];
  let col = position[1];
  this.checkers.splice(this.selectChecker(row, col), 1);
  this.grid[row][col] = null;
}

function Game() {
  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

  this.moveChecker = function(start, end) {
    let rowStart = start[0];
    let colStart = start[1];
    let rowEnd = end[0];
    let colEnd = end[1];
    let validSpace = (rowEnd % 2) - (colEnd % 2);

// if there is a checker at start to move:
    if (this.board.grid[rowStart][colStart]) {
      console.log('\nThat is a valid checker to move.');
      // if the end space already has a checker there, or is not valid space to move to:
      if ((this.board.grid[rowEnd][colEnd]) || (!validSpace)) {
        console.log('That is NOT a valid space to move to.  Try again.\n');
        alertTerminal2();
        return false;
      } else {

             // if start is true and end is false, move checker there and nullify start position:
             // * But don't remove piece from checkers array *
        this.board.grid[rowEnd][colEnd] = this.board.selectChecker(rowStart, colStart);
        this.board.grid[rowStart][colStart] = null;

      }
    } else {

           // if there is NO checker at start position:
      console.log('\nThat is not a valid checker to move.  Try again.\n');
      alertTerminal2();
      return false;
    }

         // if rowStart - rowEnd === 2, romove checker:
    if (Math.abs(rowStart - rowEnd) === 2) {
      let posArray = [];

      posArray.push( ( parseInt(rowStart) + parseInt(rowEnd) ) / 2  );
      posArray.push( ( parseInt(colStart) + parseInt(colEnd) ) / 2  );
      this.board.killChecker(rowJump + colJump);
      this.board.killChecker(posArray);

          //  console.log(this.board.grid);
          //  console.log('this.board.checkers: \n' + this.board.checkers);

           // check for win: 1)see if any white pieces
      if (this.board.grid.some( x => x.symbol != String.fromCharCode(0x0263A))) {
        console.log('Black wins!');
        game.board.viewGrid();
        alertTerminal2();
        alertTerminal2();
        process.exit();

           // check for win: 2)see if any black pieces
      } else if (this.board.grid.some( x => x.symbol != String.fromCharCode(0x0263B))) {
             console.log('White wins!');
             game.board.viewGrid();
             alertTerminal2();
             alertTerminal2();
             process.exit();
           }
    }
  }
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
// function alertTerminal() {
//   beep();
// }
//
// function alertTerminal2() {
//   beep(2);
// }

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
