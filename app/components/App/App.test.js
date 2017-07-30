import React from 'react'
import App from './App';
import { shallow, mount } from 'enzyme';

describe('APP Component', () => {
  it('should render', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.length).toEqual(1)
  })
})
