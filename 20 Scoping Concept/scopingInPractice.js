"use strict";

// function calcAge(birthYear) {
//     const age= 2022- birthYear;
//     console.log(age)
//  console.log(firstName)
// }
// const firstName= " Hritik"
// calcAge(2001)

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = ` ${firstName}  your age is ${age} and born in ${birthYear}  `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = ` oh you are a millenial, ${firstName}`;
      console.log(str);
//  reassigning outter scope's variable
      output = "new output "
      function add(a, b) {
        // function also act as block scoped
        return a + b;
      }
      console.log(add(3, 4));
    }
    console.log(output)
    //   console.log(add(3, 4));  reference error
    // console.log(str); //reference error
  }
  printAge();
  return age;
}
const firstName = "hritik";
calcAge(1991);

// even we can have same name of function and even same name of variable it wont create error just bec they are not in same scope 
function printAge() {
  let a = 45;
  console.log(a);
  const firstName=" Another name " // no problem boss
  console.log(firstName)
}
printAge();
