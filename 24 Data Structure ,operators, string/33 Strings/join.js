// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string

const [firstName, lastName]= 'Hritik Dangi'.split(' ');
const newName= ['Mr.', firstName, lastName.toUpperCase()]. join('  ');

console.log(newName);
