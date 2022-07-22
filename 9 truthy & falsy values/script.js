// their are 5 falsy values
//    0 , '' , undefined  , null , NaN

// truthy value are  = {}  , 'string'

console.log(Boolean(0))      //false
console.log(Boolean(null))        //false
console.log(Boolean(undefined))     //false
console.log(Boolean({}))          //true   emtpty object is always truthy 
console.log(Boolean(''))           // false
console.log(Boolean('hritik'))     //true



// ------- LETS UNDERSTAMND IT WITH A EXAMPLE

    const money=0;  //0 is for falsy value 
    if(money)
    console.log("Don't spend the money")
    else
    console.log(" you should get a job !! ") // it runs the else block thatswhy

