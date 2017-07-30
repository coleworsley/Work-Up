import React from 'react';
import Nav from './Nav';
import { shallow, mount } from 'enzyme';

const props = {
  user: {
    first_name: 'yoyoyo',
    last_name: 'suh brah',
  }
}

describe('Nav Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Nav {...props}/>)

    expect(wrapper.length).toEqual(1);
  })
})
