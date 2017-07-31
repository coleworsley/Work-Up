import { categories } from '../categories';
import * as actions from '../../actions';

describe('categories reducer', () => {
  it('should return initial state', () => {
    expect(categories(undefined, {})).toEqual({})
  })

  it('should return an object with muscles, equipment, and categories', () => {
    const state = {}
    const body  = [
      {results: ['muscle1', 'muscle2']},
      {results: ['equipment1', 'equipment2']},
      {results: 'category'},
    ]
    const actionResult = actions.addCategories(body)
    const expected = {
      muscle: ['muscle1', 'muscle2'],
      equipment: ['equipment1', 'equipment2'],
      exerciseCategory: 'category',
    }

    expect(categories(state, actionResult)).toEqual(expected)

  })
})
