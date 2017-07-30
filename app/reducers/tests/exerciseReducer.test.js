import { exerciseReducer } from '../exerciseReducer';
import * as actions from '../../actions';

describe('exerciseReducer reducer', () => {
  it('should return initial state', () => {
    expect(exerciseReducer(undefined, {})).toEqual({})
  })
})
