import React, { PropTypes as T } from 'react';

const InputDisplay = ({ beforeOperatorInput, afterOperatorInput, operatorInput }) => (
  <p className="results-display">
    {beforeOperatorInput || afterOperatorInput || "\u00a0"} {operatorInput} {beforeOperatorInput ? afterOperatorInput : "\u00a0"}
  </p>
);

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