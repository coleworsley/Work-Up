import { categories } from '../categories';
import * as actions from '../../actions';

describe('categories reducer', () => {
  it('should return initial state', () => {
    expect(categories(undefined, {})).toEqual({})
  })
})
