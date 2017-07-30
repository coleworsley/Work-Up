import * as actions from './index';

describe('actions', () => {
  it('should indicate the user is loading', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }


    expect(actions.userLoading(true)).toEqual(expected)
  });

  it('should indicate if the user logged in', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }
  })

  it('should indicate if the user log in failed', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }
  })

  it('should add categories', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }
  })

  it('should show details', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }
  })

  it('should return image URLs', () => {
    const expected = {
      type: 'USER_IS_LOADING',
      userLoading: true,
    }
  })
})
