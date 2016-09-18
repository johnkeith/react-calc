import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from '../src/Calculator';
import chai from 'chai';
import assert from 'assert';
import sinon from 'sinon';

function calculatorSetup() {
  const wrapper = shallow(<Calculator />);

  return {
    wrapper
  }
}

describe('<Calculator />', () => {
  const { wrapper } = calculatorSetup();

  it('should render the main calculator component', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should render sub components for InputDisplay', () => {
    expect(wrapper.find('InputDisplay').length).to.eql(1);
  });

  it('should render sub components for InputButtons', () => {
    expect(wrapper.find('InputButtons').length).to.eql(1);
  });
});