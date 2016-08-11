import React, { Component } from 'react';

class InputButtons extends Component {
  render() {
    return (
      <button onClick={() => this.props.addToCurrentInput('4')}>Add '4' to currentInput</button>
    );
  }
}

export default InputButtons;