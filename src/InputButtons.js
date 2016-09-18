import React, { Component } from 'react';

class InputButtons extends Component {
  render() {
    const buttons = {
      firstRow: [
        { type: 'action-button', value: 'AC', onClick: 'performAction' },
        { type: 'action-button', value: '+/-', onClick: 'performAction' },
        { type: 'action-button', value: '%', onClick: 'performAction' },
        { type: 'action-button', value: '÷', onClick: 'setOperator' }
      ],
      secondRow: [
        { type: 'number-button', value: '7', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '8', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '9', onClick: 'addToCurrentInput' },
        { type: 'action-button', value: '*', onClick: 'setOperator' },
      ],
      thirdRow: [
        { type: 'number-button', value: '4', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '5', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '6', onClick: 'addToCurrentInput' },
        { type: 'action-button', value: '-', onClick: 'setOperator' },
      ],
      fourthRow: [
        { type: 'number-button', value: '3', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '2', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '1', onClick: 'addToCurrentInput' },
        { type: 'action-button', value: '+', onClick: 'setOperator' },
      ],
      fifthRow: [
        { type: 'number-button', value: '0', onClick: 'addToCurrentInput' },
        { type: 'number-button', value: '.', onClick: 'addToCurrentInput' },
        { type: 'action-button', value: '=', onClick: 'calculate' },
      ]
    }  

    let buttonsRendered = [];

    for(const key in buttons) {
      console.log(key);
      buttons[key].forEach((row, index) => {
        buttonsRendered.push(
          <button key={`${index}-${row.type}-${row.value}`}
            className={row.type}
            onClick={() => this.props[row.onClick](row.value) }>
            {row.value}
          </button>
        );

        if(index !== 0 && index % 3 === 0) {
          buttonsRendered.push(<br />)
        }
      });
    }

    return (
      <div>
        {buttonsRendered}
      </div>
    );
  }
}

export default InputButtons;