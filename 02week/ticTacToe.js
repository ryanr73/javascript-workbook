'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

const printBoard() => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin() => {
  if (num => 0 && num < 3) {
         row.cells.push(this.cells[3*num], this.cells[(3*num)+1], this.cells[(3*num)+2]);
         return row;
     }
}

const verticalWin() => {
  if (num => 3 && num < 6) {
       row.cells.push(this.cells[num-3], this.cells[(num], this.cells[num+3]);
       return row;
   }
}

const diagonalWin() => {
  if (num == 6) {
         row.cells.push(this.cells[0], this.cells[(5], this.cells[8]);
         return row;
     }

     if (num == 7) {
         row.cells.push(this.cells[2], this.cells[(5], this.cells[6]);
         return row;
     }
     return false;
 };

function checkForWin() {
  // Your code here
  }

function ticTacToe(row, column) {
  // Your code here

 }

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
