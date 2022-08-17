
let i=0;
while(i <=10){  // while loop follow the condition , as long as condition is true it executes the statement 
    console.log(` Printing the counting : ${i}`)
    i++;
}

let dice= Math.trunc(Math.random() *6 )+1 ;

console.log(dice)
while(dice !==6){
    console.log(`you rolled a ${dice}`)
     dice= Math.trunc(Math.random() *6) +1 ;
        if( dice ===6){
            console.log(` you are about to end the loop`)
        }
}