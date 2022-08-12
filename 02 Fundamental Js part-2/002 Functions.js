// Functions are the piece of code, Functions helps us to avoid DRY principle by implementing reusable code .

function firstTime(){
console.log(`I am Hritik Singh`)
}
// function calling / invoking
firstTime();


function fruitProcessor(mango, apples){   //parameters
const juice= `Hritik want a juice with ${mango} mango's and ${apples} apples`
return juice
}
// we areb callling the function and passing the Arguments.
console.log(fruitProcessor(4,2))