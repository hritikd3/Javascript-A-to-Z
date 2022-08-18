"use-strict";
// Example: we work in company building smart home thermometer .ourn  most recent task is this "given an array of temperatures of one day , calculat the temperature amplitude keep in mind that sometimes there might be sensor error "

// solution:-
// 1) understanding the problem
//    - what is temp amplitude ? answer: it means the diff between highest temp and lowest temp
//   -how to compute max and min temperature?
//- what is sensor error

// 2) dividing the problem in sub-problems
// - how to ignore error ?
// - calculate min temp
// - calculate max temp
// subtract min and max amplitude and return it

const temperatures = [1, 9, 13, 20, 7, "error", -2, -7, -3, -10];
const temperature2 = [5, 2, 14, 34, "error", -6, -3];
function calcTempAmplitude(tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    const currTemp = tempArray[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max, min);
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures.concat(temperature2));
console.log(amplitude);

// Problem -2 : now the boss says that we do not need to store 1 array but we need ot pass 2 arrays

// 1) understanding the problem
//   - should we need to implement functionalioty twice? No: just merge two arrays

// 2) divding into sub-parts
//   -  merge two arrays ( can i use cancat method ? Yes)


// const amplitude = calcTempAmplitude(temperatures.concat(temperature2));