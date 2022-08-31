// copying Object

const jessica={
    firstName: 'jessica',
    lastName: 'sharma',
    age: 21,
};

const jessicaCopy= Object.assign({}, jessica)
jessicaCopy.lastName= "singh"
console.log('before:' , jessica)
console.log('after:' , jessicaCopy)