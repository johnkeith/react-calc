import React, { PropTypes as T } from 'react';

const ResultsDisplay = ({ results }) => (
  <p className="results-display">{results}</p>
);

// class ResultsDisplay extends Component {
//   render() {
//     return (
//       <p className="results-display">{this.props.results}</p>
//     );
//   }
// }

ResultsDisplay.propTypes = {
  results: T.number
}

export default ResultsDisplay;