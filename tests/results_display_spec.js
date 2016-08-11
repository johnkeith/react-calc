import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsDisplay from '../src/ResultsDisplay';
import chai from 'chai';
import assert from 'assert';
import sinon from 'sinon';

function resultsDisplaySetup() {
  const wrapper = shallow(<ResultsDisplay results="42" />);

  return {
    wrapper
  }
}

describe('<ResultsDisplay />', () => {
  const { wrapper } = resultsDisplaySetup();

  it('should render component with correct class', () => {
    expect(wrapper.find('.results-display')).to.have.length(1)
  });
});