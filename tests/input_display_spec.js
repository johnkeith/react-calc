import React from 'react';
import { shallow, mount } from 'enzyme';
import InputDisplay from '../src/InputDisplay';
import chai from 'chai';
import assert from 'assert';
import sinon from 'sinon';

function InputDisplaySetup() {
  const wrapper = shallow(<InputDisplay results="42" />);

  return {
    wrapper
  }
}

describe('<InputDisplay />', () => {
  const { wrapper } = InputDisplaySetup();

  it('should render component with correct class', () => {
    console.log(wrapper.instance().props); // use to test methods!
    expect(wrapper.find('.results-display')).to.have.length(1)
  });
});