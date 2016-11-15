import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputButtons from './InputButtons';

class Calculator extends Component {
  constructor() {
    super();
    this.state = this.clearState;
  }

  get operatorFunctionMap() {
    return {
      '+': this.add,
      '-': this.subtract,
      'x': this.multiply,
      '%': this.divide
    }
  }  

  get clearState() {
    return {
      beforeOperatorInput: null,
      operatorInput: null,
      afterOperatorInput: null,
      results: null
    }
  }

  add(x, y) {
    return parseFloat(x) + parseFloat(y);
  }

  subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
  }

  multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
  }

  divide(x, y) {
    return parseFloat(x) / parseFloat(y);
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

  calculateAndSetResults() {
    const operator = this.state.operatorInput;
    const beforeOperatorInput = this.state.beforeOperatorInput;
    const afterOperatorInput = this.state.afterOperatorInput;
    const results = this.operatorFunctionMap[operator](beforeOperatorInput, afterOperatorInput);

    this.setResults(results);
  }

  setResults(results) {
    this.setState({
      results: results
    });
  }

  performAction(actionType) {
    switch(actionType) {
      case 'AC':
        this.clear();
        break;
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <InputDisplay 
          beforeOperatorInput={this.state.beforeOperatorInput}
          afterOperatorInput={this.state.afterOperatorInput} 
          operatorInput={this.state.operatorInput}
          results={this.state.results} />
        <InputButtons
          beforeOperatorInput={this.state.beforeOperatorInput}
          operatorInput={this.state.operatorInput}
          afterOperatorInput={this.state.afterOperatorInput}
          addToInput={this.addToInput.bind(this) }
          setOperator={this.setOperator.bind(this) }
          calculateAndSetResults={this.calculateAndSetResults.bind(this) }
          performAction={this.performAction.bind(this) } />
      </div>
    );
  }
}

export default Calculator;


