'use strict'

// function calcAge(birthYear) {
//     const age= 2022- birthYear;
//     console.log(age)
//  console.log(firstName)
// }
// const firstName= " Hritik"
// calcAge(2001)

function calcAge(birthYear){
    const age=2022-birthYear;

    function printAge() {
      const output = ` ${firstName}  your age is ${age} and born in ${birthYear}  `;
      console.log(output);

      if (year >= 1981 && year <= 1996) {
        let millenial = true;
      }
      console.log(millenial); //reference error
    }
    printAge()
    return age ;
}
const firstName= "hritik"
calcAge(1991)