// // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// FORMAT 
// slice(indexStart);
// slice(indexStart, indexEnd);
const myBook = "How to win Friends and influence people";

console.log(myBook.slice(6))
console.log("hello how are you ".slice(2))

console.log(myBook.slice(6, 17))  //win Friend
console.log(myBook.slice(1, -1))  //ow to win Friends and influence peopl

console.log(myBook.slice(-6))  // return from last

// school class prediction 
const checkClassSection = function(section){
    const s= section.slice(-1);
    if(s== 'B' ||  s=='C'){
        console.log(' you are not a lucky section 🥺')
    }else{
        console.log(' damn! see who is in lucky section A 👉🏽')
    }
}

checkClassSection('12A')
checkClassSection('11B')
checkClassSection('10C')
checkClassSection('12C')