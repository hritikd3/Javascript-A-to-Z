
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  const calcAverage= (a,b,c)=> (a+b+c)/3;
  console.log(calcAverage(4,23 , 71))


//   2. Use the function to calculate the average for both teams
const scoreDolhin= calcAverage(44, 123 , 571)
const scoreKoalas= calcAverage(65, 54 ,49)
console.log( scoreDolhin, scoreKoalas)

// 3.Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
const checkWinner=(avgDolhins, avgKoalas)=>{
  if(avgDolhins  >= 2* avgKoalas){
    console.log(`Dolhins is winner ${avgDolhins} Vs ${avgKoalas}`);
  }else if(avgKoalas >= 2* avgDolhins){
    console.log(`Koalas is winner ${avgKoalas} Vs ${avgDolhins}`);
  }

}
console.log(checkWinner(89,56))