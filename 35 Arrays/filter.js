const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const filterDeposits = movements.filter((mov) => mov > 0);
console.log(filterDeposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);


//same usign loop
const newarr = [];
for (const mov of movements) {
  if (mov > 0) newarr.push(mov);
}
console.log(newarr);
