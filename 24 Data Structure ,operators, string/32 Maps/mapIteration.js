const quiz= new Map([
['question', 'what is the most popular programming language'],
[1,'C++' ],
[2, 'Python'],
[3, 'Javscript'],
['correct',3],
[true , 'correct😍'],
[false, 'try again 🥺 ']

]);
// console.log(quiz)

//iteration on map
console.log(quiz.get('question'))
for( const [key,value] of quiz){
    if(typeof key== 'number') console.log(`Is answer is ${key} : ${value}`);

}
// const answer= Number(prompt(" Enter the right options"))
const answer= 3;
console.log(answer)

console.log(quiz.get(quiz.get('correct')=== answer))

//convert map to array
console.log([...quiz])