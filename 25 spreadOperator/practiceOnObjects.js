const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",

  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const newRestaurent = { foundedIn: 1996, ...restaurant, owner: "Hritik Singh" };
console.log(newRestaurent);

const restaurentCopy={...restaurant}
restaurentCopy.name= "hritiks Kitchen"
console.log(restaurentCopy.name)
// console.log(restaurent.name)