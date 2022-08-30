//  this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object.

const hritik = {
  year: 2001,
  calcAge: function () {
    console.log(this) //here this refers to the object
    console.log(2022 - this.year); //same here
  },
};
// hritik.calcAge()

const shivani = {
  year: 2003,
};
shivani.calcAge = hritik.calcAge; //this keyword always points to the object it is calling th method 
shivani.calcAge();  //we are callling the method to shivani 

//argument keyword
const addExp= function(a,b){
    console.log(arguments)
    return a+b;
}
addExp(2,4)
addExp(2,4,8)

var addArr=(a,b)=>{  // error
    console.log(arguments)
    return a+b;}
addArr(4,4)
