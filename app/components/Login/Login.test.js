import React from 'react';
import Login from './Login';
import { shallow, mount } from 'enzyme';

describe('Login Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Login/>)

  
    expect(wrapper.length).toEqual(1);
  })
})
