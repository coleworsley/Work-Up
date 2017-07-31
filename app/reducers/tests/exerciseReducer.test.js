import { exercises } from '../exerciseReducer';
import * as actions from '../../actions';

describe('exerciseReducer reducer', () => {
  const initialState = {
    all: [],
    current: [],
  }

  it('should return initial state', () => {


    expect(exercises(undefined, {})).toEqual(initialState)
  })
})
