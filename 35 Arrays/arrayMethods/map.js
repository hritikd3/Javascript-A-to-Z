const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

//usign normal functionn
// const movementsUsd= movements.map(function(mov){
//   return mov* euroToUsd;
// })
const movementsUsd = movements.map((mov) => mov * euroToUsd); //using arrow function

console.log(movementsUsd);


//print the same using  for of loop
const movementUsdFor = [];
for (const mov of movements) {
  movementUsdFor.push(mov * euroToUsd);
}
console.log(movementUsdFor);

//antoher way
const movementDesc=  movements.map((mov,i)=> `Movements ${i=1}: You ${mov >0 ? 'Deposited:' : 'Withdrawal'} ${Math.abs(mov)} `
);
console.log(movementDesc)
 
