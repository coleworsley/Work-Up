import React from 'react';
import { DetailView } from './DetailView';
import { shallow, mount } from 'enzyme';

const props = {
  name: 'workout name',
  description: 'workout description',
  equipment: ['equipment'],
  category: 'something',
  muscles: ['a muscle'],
  imageUrls: ['imageUrls'],
}


describe('DetailView Component', () => {
  it('should render', () => {
    const wrapper = shallow(<DetailView detail={props}/>)

    expect(wrapper.length).toEqual(1);
  })

  it('should display a placeholder if there has been nothing selected', () => {
    const wrapper = shallow(<DetailView detail={{}}/>)

    expect(wrapper.find('.detail-placeholder').length).toEqual(1);
  })

  it('should display exercise details', () => {

  })

  it('should render an Exercise Image', () => {
    
  })
})
