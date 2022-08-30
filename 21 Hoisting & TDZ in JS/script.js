// Hoisting -> Hoisting is the technique which makes variable/ function accesible/usable in tyhe code before they are actually declared

// In actualy JS doesnot move or add code to hoist declaration . These declaration are put into the memory during the compile phase of interpreter making them availble before the excution 

// ------------- Variables---------
console.log(me);
// console.log(job);
// console.log(year);
var me = 'hritik';
let job = 'developer';
const year = 2001;


// ---------functions-------
console.log(addDeclaration(4,6))
function addDeclaration(a,b) {
    return a+b;
    
}