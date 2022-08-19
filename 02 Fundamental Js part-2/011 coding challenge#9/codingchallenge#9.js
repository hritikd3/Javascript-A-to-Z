// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// 1) understanding the problem
// - array get transformed to String, seperated by ...
// - what is x-days : answer: index+1;

// 2) dividing the problem:-
//  - Transform array to string
// - Transform each element to string with ºC
// - String needs to contain day ( index+1)
// - add ... at start of element

const arr1 = [17, 21, 23];

function printForcast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str +=`${arr[i]}ºC in ${i + 1} day...`;
  }
  console.log("..." + str);
}
printForcast(arr1);
