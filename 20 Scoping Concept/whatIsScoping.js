// Lexical scoping - scoping is controlled by placement of function and blocks in code.

// scope space or environment in which certain variable is decalared .
// Three tyoes of scoping 
// 1) global scope 2) Function scope 3) Block scope 


// scope chain-> means that one variable has scope (it may be function, global or block scope) is used by another scope .

// /Example
const myName= 'hritik' //global scope 

 function first(){ //parent function
    const age=21;

    if(age>= 21){    //child sibling
        const decade=3; //let and const are block scoped 
        var millenial= true; //var is function scoped
    }

    function second(){   //child function of first()
        const job= ' Developer';
//here we want variable from first() function and global so it can lookup in scope chain 
console.log(`${myName} is a ${age} years old & he is a ${job}`)
}
second();
    
 }

first()
