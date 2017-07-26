// URLs
export const EXERCISES_URL = 'https://wger.de/api/v2/exercise/?format=json&language=2&license_author=wger.de&limit=10'
export const EXERCISE_IMG_BASE_URL = 'https://wger.de/api/v2/exerciseimage/?format=json&exercise='

// Functions
export const randomizeArr = (array, count) => {
  const arr = Object.assign([], array);
  const newArr = [];

  for (let i = 0; i < Math.min(arr.length, count); i++) {
    const randomNumber = Math.floor((Math.random() * arr.length));
    newArr.push(...arr.splice(randomNumber, 1));
  }
  return newArr;
}

export const combineArraysAtIndex = (primaryArray, secondaryArray) => {
  const length = primaryArray.length + secondaryArray.length;
  const newArr = [];

  for (let i = 0; i < length; i++) {

  }
}
