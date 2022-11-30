// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "I was waiting for you and you were not their.";

const words = str.split(" ");
console.log(words[3]);

const chars = str.split("");
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["I was waiting for you and you were not their."]
