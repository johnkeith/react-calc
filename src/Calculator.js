import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputButtons from './InputButtons';

class Calculator extends Component {  
  get clearState() {
    return {
      previousInput: null,
      actionInput: null,
      currentInput: null
    }
  }

  constructor() {
    super();
    this.state = this.clearState;
  }

  addToCurrentInput(digit) {
    let newCurrentInput;

    if(this.state.currentInput === null) {
      newCurrentInput = digit;
    } else {
      newCurrentInput = this.state.currentInput + digit;
    }

    this.setState({
      currentInput: newCurrentInput
    });
  }

  clear() {
    this.setState(this.clearState);
  }

  render() {
    return (
      <div>
        <InputDisplay currentInput={this.state.currentInput}/>
        <InputButtons addToCurrentInput={this.addToCurrentInput.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;


