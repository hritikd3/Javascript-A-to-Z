// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const arr= ['a','b','c','d','e'];

console.log(arr.slice(2))
console.log(arr.slice(2,4))
console.log(arr.slice(-2))
console.log(arr.slice()) // this return the shallow copy 

console.log([...arr])  //we can also use spread operator to return shallow copy 