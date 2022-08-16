
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  const calcAverage= (a,b,c)=> (a+b+c)/3;
  console.log(calcAverage(4,23 , 71))


//   2. Use the function to calculate the average for both teams
const scoreDolphins= calcAverage(44, 23 , 71)
const scoreKoalas= calcAverage(65, 54 ,49)
console.log( scoreDolphins, scoreKoalas)

// 3.Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
const checkWinner=(avgDolphins, avgKoalas)=>{
  if(avgDolphins  >= 2* avgKoalas){
    console.log(`Dolphins is winner ${avgDolphins} Vs ${avgKoalas}`);
  }else if(avgKoalas >= 2* avgDolphins){
    console.log(`Koalas is winner ${avgKoalas} Vs ${avgDolphins}`);
  }else{
    console.log(' No team won the match')
  }
}
checkWinner(scoreDolphins, scoreKoalas)
