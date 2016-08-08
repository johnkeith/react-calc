import React, { Component } from 'react';
// import CalculatorResults from './CalculatorResults';
// import InputButtons from './CalculatorButtons'
// import './App.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: null
    }
  }

  render() {
    return (
      <div>
        <CalculatorResults />
        <CalculatorInputButtons />
      </div>
    );
  }
}

export default Calculator;

class CalculatorResults extends Component {
  render() {
    return (
      <p>Calculator results go here!</p>
    );
  }
}

class CalculatorInputButtons extends Component {
  render() {
    return (
      <p>Calculator input buttons go here!</p>
    );
  }
}


