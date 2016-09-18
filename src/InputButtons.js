import React, { Component } from 'react';

class InputButtons extends Component {
  render() {
    let buttons = [];
    for(let i=1; i<=9; i++) {
      buttons.push(<button key={`${i}-button`} onClick={() => this.props.addToCurrentInput(`${i}`)}>{i}</button>);
      if(i % 3 === 0) {
        buttons.push(<br key={`${i}-break`} />);
      }
    }

    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default InputButtons;