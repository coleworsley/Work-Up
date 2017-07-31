import { detailReducer } from '../detailReducer';
import * as actions from '../../actions';

describe('detailReducer reducer', () => {
  it('should return initial state', () => {
    expect(detailReducer(undefined, {})).toEqual({})
  })

  it('should return detail on SHOW_DETAIL', () => {
    const state = {};
    const body  =  { reps: 1, sets: 1 }
    const actionResult = actions.showDetail(body);
    const expected = { reps: 1, sets: 1 }


    expect(detailReducer(state, actionResult)).toEqual(expected);
  })
})
