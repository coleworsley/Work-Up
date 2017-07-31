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
    const user = {
      first_name: 'yoyoyo',
      last_name: 'it\'s lit',
    }
    const expected = {
      type: 'USER_SUCCESS',
      user,
    }

    expect(actions.userLogInSuccess(user)).toEqual(expected)
  })

  it('should indicate if the user log in failed', () => {
    const expected = {
      type: 'USER_FAIL',
      error: 'message',
    }

    expect(actions.userLogInFail('message')).toEqual(expected)
  })

  it('should add categories', () => {
    const expected = {
      type: 'ADD_CATEGORIES',
      array: [],
    }

    expect(actions.addCategories([])).toEqual(expected)
  })

  it('should show details', () => {
    const expected = {
      type: 'SHOW_DETAIL',
      exercise: {},
    }

    expect(actions.showDetail({})).toEqual(expected)
  })

  it('should return image URLs', () => {
    const expected = {
      type: 'IMAGE_URL_SUCCESS',
      data: [],
    }

    expect(actions.imageUrlSuccess([])).toEqual(expected)
  })

  it('should indicate if the page is loading', () => {
    const expected = {
      type: 'PAGE_IS_LOADING',
      pageLoading: true,
    }

    expect(actions.pageLoading(true)).toEqual(expected)
  })

  it('should return data after loading', () => {
    const expected = {
      type: 'PAGE_FETCH_SUCCESS',
      data: {
        exercises: [],
        categories: [],
      },
    }

    expect(actions.pageDataRetrieved([], [])).toEqual(expected)
  })

  it('should throw an error if something went wrong during page loading', () => {
    const expected = {
      type: 'PAGE_FETCH_FAIL',
      error: 'message',
    }

    expect(actions.pageDataFailed('message')).toEqual(expected)
  })

  it('should randomize exercises', () => {
    const expected = {
      type: 'RANDOMIZE_EXERCISES',
      data: {
        array: [],
        count: 1,
      },
    }

    expect(actions.randomizeExercises([], 1)).toEqual(expected)
  })
})
