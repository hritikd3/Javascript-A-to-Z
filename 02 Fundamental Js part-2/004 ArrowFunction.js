

// Arrow function 

const checkAge = birthYear => 2022- birthYear;
const age= checkAge(2001)
console.log(age )

//arrow function
const isRetired=(birthYear, firstName)=>{
const age= 2022-birthYear;
const retirementAge= 60-age;
return `${firstName} retires in ${retirementAge} years`
}
console.log(isRetired(2001,'hritik'))