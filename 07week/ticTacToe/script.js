'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      turn: 'X',
      message: ''
    };
  }

handleClick=(cell) => {
    const state = {...this.state};
    state[cell] = this.state.turn;
    //tests for win
    let playerWon = '';
    if (this.checkWin(state, playerWon)) {
       state.message =`Player ${state['turn']} Wins!`;
    } else {
     const valArr = Object.values(state);
     //pop removes last two items of array
     valArr.pop();
     valArr.pop();
     //tests for tie
     if(valArr.filter(val => val !== '').length === 9){
       state.message = 'We have a tie! Restart.';
     }
    //creates toggle between X & O
      state['turn'] = this.state.turn === "X" ? "O" : "X";
    }
    this.setState(state: state);
  }

checkWin=(state, playerWon) => {
  //this creates arrays of possbile winning options(horizontal,vertical,diagonal)
  const combos = [
    [0, 1, 2],
    [3 ,4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //tests the winning combinations
    for (let i=0; i <combos.length; i++) {
      if (state[combos[i][0]]
          && state[combos[i][0]] === state[combos[i][1]]
          && state[combos[i][0]] === state[combos[i][2]]
        ) {
          playerWon = state[combos[i][0]];
          return true;
        }
      }
      return false;
}

// creates click on cells from 0-8
render() {
    return (
      <div>
        <div>Player {this.state.turn} Turn</div>
        <div className="row">
          <div data-cell="0"onClick={() => this.handleClick("0")}>{this.state['0']}</div>
          <div data-cell="1"onClick={() => this.handleClick("1")}>{this.state['1']}</div>
          <div data-cell="2"onClick={() => this.handleClick("2")}>{this.state['2']}</div>
        </div>
        <div className="row">
          <div data-cell="3"onClick={() => this.handleClick("3")}>{this.state['3']}</div>
          <div data-cell="4"onClick={() => this.handleClick("4")}>{this.state['4']}</div>
          <div data-cell="5"onClick={() => this.handleClick("5")}>{this.state['5']}</div>
        </div>
        <div className="row">
          <div data-cell="6"onClick={() => this.handleClick("6")}>{this.state['6']}</div>
          <div data-cell="7"onClick={() => this.handleClick("7")}>{this.state['7']}</div>
          <div data-cell="8"onClick={() => this.handleClick("8")}>{this.state['8']}</div>
        </div>
        <div id="announce-winner">{this.state.message}</div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
