'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Prob­lem :
// The Tow­ers of Hanoi is a clas­sic puz­zle with 3 stacks or towers and mul­ti­ple disks of dif­fer­ent sizes.
// The goal of the puz­zle is to move all the disks from the first peg to the third peg accord­ing to the fol­low­ing rules :
// 	• Only one disk can be moved at a time.
// 	• You can only move the top disc in a stack.
// 	• No disk may be placed on top of a smaller disk.
//
// Logic:
//
// Board has only 3 options stacks a, b, or c
// Player selects piece from stack that has a disk
// Check for valid move (legal if size of disk on startStack  is smaller than endStack or endStack is empty
// Check if endStack is empty
// checks key and property, get the value from the endStack at stacks object. Check to see if value is empty.
// Compare value of disk for startStack and endStack disk
// Move piece, if move is illegal prompt player to try again, if legal move piece.
// If move is not legal block move
// Check for win if player has successfully moved all the disks to another stack
// Announce Winner
// Else continue playing checking for legal or illegal moves
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece (startStack, endStack) {
  // moves piece to endStack
  //remove last number in startStack
  //move it to the end of the endStack
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  // confirms if move is legal
  //startStack must have value to be moved.
  //endStack must be empty or greater value than piece being moved
  if (stacks[startStack].length === 0) {
    return false;
  } else if (stacks[endStack].length === 0) {
    return true;
  } else {
    return stacks[startStack][stacks[startStack].length-1] < stacks[endStack][stacks[endStack].length-1];
  }
}

function checkForWin(startStack, endStack) {
  // tests for win after each move
  //stack b or c could win if all 4 pieces moved successfully
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}
function towersOfHanoi(startStack, endStack) {
  // legal move allows disk to be moved to endStack
  const validEntry = (myStack) => {
    const entry = ['a', 'b', 'c',];
    return entry.some(validEntry => myStack === validEntry);
  }
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    if (checkForWin(startStack, endStack)) {
      console.log('You Win!');
    }
  } else {
    console.log('Try again, this is not a legal move');
    return false;
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
