import React, { Component } from 'react';

class InputButtons extends Component {
  render() {
    const buttons = {
      firstRow: [
        { type: 'action-button', value: 'AC', onClick: 'performAction' },
        { type: 'action-button', value: '+/-', onClick: 'performAction' },
        { type: 'action-button', value: '%', onClick: 'performAction' },
        { type: 'operator-button', value: '÷', onClick: 'setOperator' }
      ],
      secondRow: [
        { type: 'number-button', value: '7', onClick: 'addToInput' },
        { type: 'number-button', value: '8', onClick: 'addToInput' },
        { type: 'number-button', value: '9', onClick: 'addToInput' },
        { type: 'operator-button', value: 'x', onClick: 'setOperator' },
      ],
      thirdRow: [
        { type: 'number-button', value: '4', onClick: 'addToInput' },
        { type: 'number-button', value: '5', onClick: 'addToInput' },
        { type: 'number-button', value: '6', onClick: 'addToInput' },
        { type: 'operator-button', value: '-', onClick: 'setOperator' },
      ],
      fourthRow: [
        { type: 'number-button', value: '3', onClick: 'addToInput' },
        { type: 'number-button', value: '2', onClick: 'addToInput' },
        { type: 'number-button', value: '1', onClick: 'addToInput' },
        { type: 'operator-button', value: '+', onClick: 'setOperator' },
      ],
      fifthRow: [
        { type: 'number-button', value: '0', onClick: 'addToInput' },
        { type: 'number-button', value: '.', onClick: 'addToInput' },
        { type: 'calculate-button', value: '=', onClick: 'calculateAndSetResults' },
      ]
    }  

    let buttonsRendered = [];

    for(const key in buttons) {
      if(buttons[key]) {
        buttons[key].forEach((row, index) => {
          const shouldDisableOperatorButton = row.type === 'operator-button' && !this.props.beforeOperatorInput ? true : false;
          const shouldDisableCalculateButton = row.type === 'calculate-button' && (!this.props.beforeOperatorInput || !this.props.operatorInput || !this.props.afterOperatorInput ? true : false);
          const shouldDisablePercentageButton = row.value === '%' && !this.props.beforeOperatorInput;
          const shouldDisableSignToggleButton = row.value === '+/-' && !this.props.beforeOperatorInput;
          const shouldDisableClearButton = row.value === 'AC' && !this.props.beforeOperatorInput;

          const shouldDisable = shouldDisableOperatorButton ||
            shouldDisableCalculateButton ||
            shouldDisablePercentageButton ||
            shouldDisableSignToggleButton ||
            shouldDisableClearButton;

          const buttonClassName = `${row.type} ${key === 'firstRow' ? 'top-buttons' : ''}`;

          buttonsRendered.push(
            <button key={`${index}-${row.type}-${row.value}`}
              className={buttonClassName}
              onClick={() => this.props[row.onClick](row.value) }
              disabled={ shouldDisable } >
              {row.value}
            </button>
          );

          if(index !== 0 && index % 3 === 0) {
            buttonsRendered.push(<br key={`${index}-${key}-break`} />)
          }
        });
      }
    }

    return (
      <div className="buttons-container">
        {buttonsRendered}
      </div>
    );
  }
}

export default InputButtons;