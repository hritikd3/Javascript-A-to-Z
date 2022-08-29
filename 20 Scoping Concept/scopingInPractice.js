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
    const output = ` ${firstName}  your age is ${age} and born in ${birthYear}  `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = ` oh you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {  // function also act as block scoped 
        return a + b;
      }
      console.log(add(3, 4));
}
//   console.log(add(3, 4));  reference error 
    // console.log(str); //reference error
  }
  printAge();
  return age;
}
const firstName = "hritik";
calcAge(1991);
