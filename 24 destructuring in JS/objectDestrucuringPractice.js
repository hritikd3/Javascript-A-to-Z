// hardcoded data
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// we can destruct using {}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log("................");
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

console.log("................");

//setting default values
const { menu =[], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); 


// \mutating values
let a=2;
let b=3;
const obj={a:44, b: 56 ,c: 78};
//here we mutate the a,b previous value with new value 
({a,b}= obj);  //very very important thing is parenthesis here, without it throw errors.
console.log(a,b)