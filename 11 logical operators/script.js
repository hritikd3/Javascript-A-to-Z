// 3 types of logical opeartor - AND(&&) , OR(||) , NOT(!)

// 1) AND OPERATOR perform mathematical operation

// 0  0  -> 0
// 0  1  -> 0
// 1  0  -> 0
// 1  1  -> 1

const userInput = true;
const otherInput = true;
const trialInput = false;
console.log(userInput && otherInput); //true
console.log(trialInput && otherInput); //false

// 2) OR oprator
// OR operator work as addition of 2 value
// 0  0  -> 0
// 0  1  -> 1
// 1  0  -> 1
// 1  1  -> 1

console.log(userInput || otherInput); //true

// 3) NOT OPERATOR
//  True -> False
console.log(!otherInput); // false

// Random example of ternary opeartor
let country = "Portugal";
let continent = "Europe";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
