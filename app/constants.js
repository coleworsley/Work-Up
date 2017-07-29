// URLs
export const EXERCISES_URL = 'https://wger.de/api/v2/exercise/?format=json&language=2&license_author=wger.de&limit=5';
export const EXERCISE_IMG_BASE_URL = 'https://wger.de/api/v2/exerciseimage/?format=json&exercise=';
export const MUSCLE_URL = 'https://wger.de/api/v2/muscle/';
export const EQUIPMENT_URL = 'https://wger.de/api/v2/equipment/';
export const EXERCISE_CATEGORY_URL = 'https://wger.de/api/v2/exercisecategory/';




// Functions
const weightedAverage = (array) => {
  return array.map(exercise => {
    if(exercise.history) {
      const probabilityObj = exercise.history.reduce((a, b) => {
        a.popularity += b.popularity
        a.count += b.count
        return a;
      }, {popularity: 0, count: 0})
      return Math.min(probabilityObj.popularity / probabilityObj.count, .1)
    }
    return 1;
  })
}

const findIndex = (array) => {
  const probabilityArray = weightedAverage(array);
  const sum = probabilityArray.reduce((a, b) => a + b)
  const randomNumber = Math.random() * sum;
  let total = 0;

  for (let i = 0; i < probabilityArray.length; i++) {
    total += probabilityArray[i];
    console.log('total ', total, 'current prob', probabilityArray[i], 'random num', randomNumber);
    if (total >= randomNumber) return i;
  }
}

export const randomizeArr = (array, count) => {
  debugger
  const arr = Object.assign([], array);
  const newArr = [];

  for (let i = 0; i < Math.min(array.length, count); i++) {
    const index = findIndex(arr);
    newArr.push(...arr.splice(index, 1));
  }
  return newArr;
}

export const combineArraysAtIndex = (primaryArray, secondaryArray) => {
  const length = primaryArray.length + secondaryArray.length;
  const newArr = [];

  for (let i = 0; i < length; i++) {

  }
}
