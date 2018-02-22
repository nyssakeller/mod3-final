import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {

  it('snapshot test', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

});