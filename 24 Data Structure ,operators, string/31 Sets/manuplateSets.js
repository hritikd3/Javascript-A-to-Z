
const arr1 = new Set([1, 2, 3, "hritik",'singh']);

// this is another array
const arr2= ['rahul','rohan','wilson'];

// here we will destruct the arr1 and manupulate the values  and will return new array with = arr2 values in it 
const newArray = [...new Set(arr2)]
console.log(newArray)