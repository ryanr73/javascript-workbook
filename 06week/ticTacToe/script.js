'use strict';
//whiteboard for tic tac toe for the DOM
//Player 1- X; Player 2- O
//create eventListener to check data-cell
//create valid move; player 1 can only use X, Player 2 only use O, also On not o
//and X not x
//create winState that includes:
//horizontal, vertical, diagonal options
//check for win, check for tie
//reset board

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const player1Turn = X
  document.querySelector('[data-cell='0']').addEventListener('click') = function () {

}
});
function winState() {
  const dataCell = $(['data-cell']);
  //this creates arrays of possbile winning options(horizontal,vertical,diagonal)
  const winOptions = [[0,1,2], [3,4,5],[6,7,8], [0,3,6],
                      [1,4,7],[2,5,8],[0,4,8], [2,4,6]];


}
