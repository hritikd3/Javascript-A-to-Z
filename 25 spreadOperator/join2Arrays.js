// we can even merge two arrays using sprea operator 

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
// lets combine starterMenu and mainMenu

const newArr= [...restaurant.starterMenu,...restaurant.mainMenu]
console.table(newArr)

// /Iterables :- iterables  are arrays, maps ,sets ,strings, but not objects
const str="hritik"
const letters=[...str, " " , 'printed']
console.log(...str)
console.log(letters)