// URLs


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
