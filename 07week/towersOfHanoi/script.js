'use strict';
//Towers of Hanoi Whiteboard
//first create state with each stack
//create a clickStack function
//create a moveBlock function
class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [100, 75, 50, 25],
      b: [],
      c: [],
      block: null
    }
  }

//slice and pop cut blocks off an allow move to new stack
  clickStack = (event) => {
    const stack = event.target.getAttribute('data-stack');
    const blocks = this.state[stack].slice();
    const block = blocks.pop();
    const obj = {};
    obj[stack] = blocks;
    obj.block = block;
    this.setState(obj);
  }

  render() {
    //created 3 sets of blocks 
    const aBlocks = this.state.a.map((size) => {
      return (<div data-block={size}></div>);
    });

    const bBlocks = this.state.c.map((size) => {
      return (<div data-block={size}></div>);
    });

    const cBlocks = this.state.c.map((size) => {
      return (<div data-block={size}></div>);
    });

    //removed data-block values since they will change
    return (
      <div>
        <div data-stack="a" onClick={this.clickStack}>
          {aBlocks}
        </div>
        <div data-stack="b" onClick={this.clickStack}>
          {bBlocks}
        </div>
        <div data-stack="c" onClick={this.clickStack}>
          {cBlocks}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
