'use strict'
// if we check behind the secen inside the callstack how this works,  so three parameter created ( Identifier , Address , Value)
/* Identifier   | Address | Value
   firstName   | 0001    |  hritik
   lastName   | 0001     | hritik ( pointing to same address)
  firstName  | 0002    |  singh
*/

// primtive types
let firstName = "hritik";
let lastName = firstName;
firstName = "singh";
console.log(firstName, lastName);

// reference type
const jessica={
    firstName: "jessica",
    lastName: 'sharma',
    age: 21
};

const friendJessica= jessica;
friendJessica.lastName= 'singh';
console.log("before friendship:", jessica);
console.log("after friendship" , friendJessica)



// Copying objects :  deep copy
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
