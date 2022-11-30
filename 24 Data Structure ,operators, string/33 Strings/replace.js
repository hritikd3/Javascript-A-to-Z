// replace method replace the wrong word with given word

const myBook = "How to hate Friends and influence people";
// replace only replace the first occuring string not all
console.log(myBook.replace('hate', 'win'));

// replaceAll()
const test = "I hate you because you hate me";
console.log(test.replaceAll('hate', 'love'))

// another way to repalce all using global '/ /g' after string
console.log(test.replace(/hate/g, 'love'))
