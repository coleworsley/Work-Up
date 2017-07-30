import { detailReducer } from '../detailReducer';
import * as actions from '../../actions';

describe('detailReducer reducer', () => {
  it('should return initial state', () => {
    expect(detailReducer(undefined, {})).toEqual({})
  })
})
