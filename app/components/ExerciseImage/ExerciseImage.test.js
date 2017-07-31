import React from 'react'
import ExerciseImage from './ExerciseImage';
import { shallow, mount } from 'enzyme';

describe('ExerciseImage Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ExerciseImage imageUrls={['url1', 'url2']}/>)

    expect(wrapper.length).toEqual(1);
  })

  it('should cycle through images every 2 seconds',() => {

  })
})
