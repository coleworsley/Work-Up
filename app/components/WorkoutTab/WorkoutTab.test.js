import React from 'react';
import WorkoutTab from './WorkoutTab';
import { shallow, mount } from 'enzyme';

const props = {
  categories: {},
  detail: {},
  exercises: {
    all: [],
    current: [],
  },
  fetchCategories: jest.fn(),
  fetchAPIExercises: jest.fn(),
  fetchUserExercises: jest.fn(),
  fetchWorkouts: jest.fn(),
  randomizeExercises: jest.fn(),
  saveWorkout: jest.fn(),
  user: {},
  workouts: [],
}

describe('WorkoutTab Component', () => {
  it('should render', () => {
    const wrapper = shallow(<WorkoutTab {...props} />);

    expect(wrapper.length).toEqual(1)
  })
})
