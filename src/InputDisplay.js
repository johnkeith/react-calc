import React, { PropTypes as T } from 'react';

const InputDisplay = ({ beforeOperatorInput, afterOperatorInput, operatorInput }) => {
  const spacer = "\u00a0";

  let display = [];

  if(beforeOperatorInput) {
    display.push(<span key="before-input">{beforeOperatorInput}</span>);
  }

  if(operatorInput) {
    display.push(<span key="operator-input"> {operatorInput} </span>);
  }

  if(afterOperatorInput) {
    display.push(<span key="after-input"> {afterOperatorInput} </span>);
  }

  if( display.length === 0) {
    display.push(<span key="spacer">{ spacer }</span>);
  }

  return (<div className="input-display">{ display }</div>);
};

// class InputDisplay extends Component {
//   render() {
//     return (
//       <p className="results-display">{this.props.results}</p>
//     );
//   }
// }

InputDisplay.propTypes = {
  beforeOperatorInput: T.string,
  afterOperatorInput: T.string,
  operatorInput: T.string
}

export default InputDisplay;