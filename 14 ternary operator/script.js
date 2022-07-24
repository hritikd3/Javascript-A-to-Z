// ternary operator have 3 condition: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

const age = 21;
// condition ? id part : else part
age >= 18
  ? console.log("Now you can vote🙌")
  : console.log("Thand rakh munna😁");


  ////////////////////////////////////
let drink;
if (age >= 18) {
  drink = "wine🍷";
} else {
  drink = "water💧";
}
console.log(drink);


console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);


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
