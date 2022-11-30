// The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring.

const myBook = "How to win Friends and influence people";

console.log(myBook.lastIndexOf("o"));  //35
console.log(myBook.lastIndexOf("i"));  
// if we try to find the leement whihch is not in given string then it returns -1
console.log(myBook.lastIndexOf("y"));  // -1


const para = "How to win Friends and influence people";
const searchTerm= " influence";

console.log(` the index of first ${searchTerm} from the end is ${ para.lastIndexOf("influence")}`)