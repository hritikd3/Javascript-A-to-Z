// Hoisting -> Hoisting is the technique which makes variable/ function accesible/usable in tyhe code before they are actually declared

// In actualy JS doesnot move or add code to hoist declaration . These declaration are put into the memory during the compile phase of interpreter making them availble before the excution

// ------------- Variables---------
// console.log(me);
// console.log(job);
// console.log(year);
var me = "hritik";
let job = "developer";
const year = 2001;

// ---------functions-------
console.log(addDeclaration(4, 6));
// console.log(addArrow(2, 3));
// console.log(addExpression(9, 1));

function addDeclaration(a, b) {
  //function decalraton performs hoisting
  return a + b;
}

const addExpression = function (a, b) {
  //throw a reference error bcz function is stored in variable and we are trying to hoist it
  return a + b;
};

var addArrow = (a, b) => a + b; // with var it willl be hoisted but set to undefined

// ======pitfall of hoisting when we use var=====
// Example


if( !numProducts) deleteCartProducts() //here it is not equal to 8 still it consoled "all products.. " just bca of var 
var  numProducts= 8;
function deleteCartProducts() {
  console.log(" All products deleted");
}


// example of window objects
var e=45;
let f=3;
const g=21;
// console.log(e=== window.e)  // when we check in window so e will be defined under window object , becz it became the the property of window when decalre with var but let and const wont visble in window 