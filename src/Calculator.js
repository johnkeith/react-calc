import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputButtons from './InputButtons';

class Calculator extends Component {  
  get clearState() {
    return {
      beforeOperatorInput: null,
      operatorInput: null,
      afterOperatorInput: null
    }
  }

  constructor() {
    super();
    this.state = this.clearState;
  }

  addToInput(digit) {
    if(this.state.operatorInput) {
      this.addToAfterOperatorInput(digit);
    } else {
      this.addToBeforeOperatorInput(digit);
    }
  }

  addToBeforeOperatorInput(digit) {
    let newValue = this.buildNewInputForPosition(digit, 'beforeOperatorInput'); 

    this.setState({
      beforeOperatorInput: newValue
    });
  }

  addToAfterOperatorInput(digit) {
    let newValue = this.buildNewInputForPosition(digit, 'afterOperatorInput'); 

    this.setState({
      afterOperatorInput: newValue
    });
  }

  buildNewInputForPosition(digit, inputPosition) {
    if(this.state[inputPosition] === null) {
      return digit;
    }

    return this.state[inputPosition] + digit;
  }

  setOperator(operator) {
    this.setState({
      operatorInput: operator
    });
  }

  clear() {
    this.setState(this.clearState);
  }

  calculate() {
    eval()
  }

  render() {
    return (
      <div>
        <InputDisplay 
          beforeOperatorInput={this.state.beforeOperatorInput}
          afterOperatorInput={this.state.afterOperatorInput} 
          operatorInput={this.state.operatorInput}/>
        <InputButtons
          beforeOperatorInput={this.state.beforeOperatorInput}
          addToInput={this.addToInput.bind(this)}
          setOperator={this.setOperator.bind(this)} />
      </div>
    );
  }
}

export default Calculator;


