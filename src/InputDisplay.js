import React, { PropTypes as T } from 'react';

const InputDisplay = ({ beforeOperatorInput, afterOperatorInput, operatorInput, results }) => {
  const spacer = "\u00a0";

  return (
    <div className="input-display">
      <span>
        {beforeOperatorInput || spacer}
      </span>
      <span>
        {` ${operatorInput || spacer} `}
      </span>
      <span> 
        {` ${afterOperatorInput || spacer} `} 
      </span>
      <span>
        { results ? " = " : spacer }
      </span>
      <span>
        {` ${results || spacer}`}
      </span>
    </div>
  );
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