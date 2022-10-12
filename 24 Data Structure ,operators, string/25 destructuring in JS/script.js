//  destructuring is the feature which is introduced in  ES6 version of JS
// it is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const arr=[2,3,4];  //declared the array here
const a=arr[0];    //value at index 0
const b=arr[1];    //value at index 1
const c=arr[2];     //value at index 2

const [x,y,z]= arr;  //destructring value from arr 
console.log(x,y,z);   //x=2 , y=3 , z=4
console.log(arr);  //x,y,z : 2,3,4


