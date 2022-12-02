// this is great example to understand how function return a function 

//greet is function which takes greeting as argument
const greet = function (greeting){
    return function(name){ // this function act as closure here
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey= greet('Hey')
greeterHey('Hritik');
greeterHey('Emily')

//boss level JS same above output 
greet('isnt')('interesting ')


// same with arrow function 
const arrowGreet=(greeting)=>(name)=>console.log(`${greeting} ${ name}`)

arrowGreet(' Hello')('Madhav');
// arrowGreet(' Hello','shivam');
