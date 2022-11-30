// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "I was waiting for you and you were not their.";

const words = str.split(" ");
console.log(words[3]);

const chars = str.split("");
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["I was waiting for you and you were not their."]


const names= 'hritik dangi'
console.log(names.split('  '))  //[ 'hritik dangi' ]
console.log(names.split(' '))  //[ 'hritik', 'dangi' ]
console.log(names.split(''))   //[  'h', 'r', 'i', 't',  'i', 'k', ' ', 'd',  'a', 'n', 'g', 'i']


const capitalizeName= function (names){
    const changeName= names.split(' ')
const nameUpper= [];

for(const n of changeName){
 nameUpper.push(n.replace(n[0],n[0].toUpperCase()))
 //or alternate
// nameUpper.push(n[0].toUpperCase() + n.splice(1))
};
console.log(nameUpper.join(' '))
}
capitalizeName(' early to bed and early to rise')