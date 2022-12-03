// WHAT IS IIRFilterNode( inmmeediately invoked function )

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

const runOnce= function (){
    console.log(' This will run once only ')
}
 runOnce();

 //here if we remove open braces so it will throw error , because we directly define the function rather we need to make it function expression which is possible when we have () at start   i.e, (function() ....)
 (function(){
    console.log('this will run once')
 }) ();

 // one more example using arrow function .. How we invoke the function just when it ended 
 (()=>{console.log(' this is running ')})();