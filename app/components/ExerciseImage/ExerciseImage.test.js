import React from 'react'
import ExerciseImage from './ExerciseImage';
import { shallow, mount } from 'enzyme';


const resolveAfter3Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
}


describe('ExerciseImage Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ExerciseImage imageUrls={['url1', 'url2']}/>)

    expect(wrapper.length).toEqual(1);
  })

  it('should render loading text when nothing is passed in', () => {
    const wrapper = shallow(<ExerciseImage />)

    expect(wrapper.find('.detail-placeholder').text()).toBe('Loading')
  })

  it('should render error text if there are no images', () => {
    const wrapper = shallow(<ExerciseImage imageUrls={[]}/>)

    expect(wrapper.find('.detail-placeholder').text()).toBe('No images found')
  })

  it('should cycle through images every 2 seconds', async () => {
    const wrapper = mount(<ExerciseImage imageUrls={['url1', 'url2']}/>)

    expect(wrapper.find('img').prop('src')).toEqual('url1')
    await resolveAfter3Seconds()
    wrapper.update()
    expect(wrapper.find('img').prop('src')).toEqual('url2')
  })
})
