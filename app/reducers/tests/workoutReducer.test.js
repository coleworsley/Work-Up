import { workoutReducer } from '../workoutReducer';
import * as actions from '../../actions';

describe('workoutReducer reducer', () => {
  it('should return initial state', () => {
    expect(workoutReducer(undefined, {})).toEqual({})
  })
})
