// destructuring and spread operator looks similar but the difference is spread operator takes all the array and it does not create new variable and as a consequence we can only use it at places where we woukld write values seperated by comma's

const arr=[8,9,3]
const newArr=[1,2,...arr]
console.log(newArr)
//spread operator :- whenever we want to use the elements of an array individually we use the spread operator 


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
}
const newMenu= [...restaurant.categories,"ferero"]
console.log(newMenu)
