import { userReducer } from '../userReducer';
import * as actions from '../../actions';

describe('userReducer reducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })
})
