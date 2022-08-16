// Their are certain operation(methods ) we can apply on our array.
// - push 
// - pop 
// -unshift
// -shift
// -indexOf
// -includes


// push method (it adds an item to end of an array)
const firstName= ['hritik', 'vishakha', 'nimish']
console.log(firstName  ) 
 firstName.push('janarish') 
console.log(firstName) 


// pop method (it removes an item from end of array)
const number = [98,45,65,23];
number.pop()  //23 popped
console.log(number.pop()) //show popped element  //65 popped
console.log(number)

// unshift method ( it adds an item to the beginning of an array)
number.unshift(77)
firstName.unshift('john')
console.log(number)
console.log(firstName)

//shift method (remove element from beginning)
const fruits= ['apple','mango','banana']
fruits.shift();
console.log(fruits)

//indexOf (return the index position of element)
const monuments=['tajmahal', 'statue Of Liberty']
console.log(monuments.indexOf('tajmahal'))
console.log(monuments.indexOf('golu ka ghar'))  //as its not in array so it will return -1 for null element


// includes method (it checks something is present in the array or not and returns the boolean i.e, True or False)

if(firstName.includes('hritik')){
    console.log("yes you have a friend named Hritik ")
}


