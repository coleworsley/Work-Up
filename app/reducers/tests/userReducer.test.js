import { userReducer } from '../userReducer';
import * as actions from '../../actions';

describe('userReducer reducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })

  it('should return a success case', () => {
    const state = {}
    const body  = {
      email: 'awef@awef.com',
      id: 1000,
    }
    const actionResult = actions.userLogInSuccess(body)
    const expected = {
      email: 'awef@awef.com',
      id: 1000
    }

    expect(userReducer(state, actionResult)).toEqual(expected)
  })

  it('should return a failed case if something goes wrong', () => {
    const state = {}
    const body  = {
      message: 'something'
    }
    const actionResult = actions.userLogInFail(body)
    const expected = {message: 'something'};
    expect(userReducer(state, actionResult)).toEqual(expected)
  })

})
