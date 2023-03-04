// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const fruits= ['zanar','papaya', 'apple', "grapes", 'orange '];
fruits.sort()
console.log(fruits) // sorted on the basis of string 



//lets sort number  
const numSort= [12,22,400,7,9,-23,-09,67632]
console.log(numSort.sort())  // noty sorted in order

console.log(numSort.sort((a,b)=> a-b))  //working fine with comparator functjon 