import React from 'react'
import ExerciseCard from './ExerciseCard.js';
import { shallow, mount } from 'enzyme';

const props = {
  id: 1,
  name: 'pull-ups',
  description: 'a workout',
  fetchImageUrls: jest.fn(),
  toggleDetail: true,
  active: true,
  popularity: 1,
  statistics: {
    sets: 1,
    reps: 1,
    unit: 1,
    measure: 'lbs',
    type: 'Weight',
  }
}



describe('ExerciseCard Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ExerciseCard {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  it('should display the name of the exercise', () => {
    const wrapper = shallow(<ExerciseCard {...props} />);

  });

  it('should display sets, reps and weight when detail is shown', () => {
    const wrapper = shallow(<ExerciseCard {...props} />);

  });

  it('should hide stats when detail is hidden', () => {
    const wrapper = shallow(<ExerciseCard {...props} />);

  });
})
