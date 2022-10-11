const game = {
  team1: "Bayern munich",
  team2: "dormaund ",
  players: [
    [
      "Stegen",
      "Alex Balde",
      "Andreas Christensen",
      "milen",
      "shen",
      "masket",
      "peter",
      "wilson",
      "ray",
      "sid",
      "sherlock",
    ],
    [
      "naix",
      "maddy",
      "rahul",
      "raju",
      "binod",
      "mira bai",
      "jhonny",
      "ranjan",
      "kunal",
      "gajodhar",
      "sparsh",
    ],
  ],
  score: '4:0',
  odds:{
    team1:1.33,
    x: 3.24,
    team2: 6.5,
  }
};

// solution
// 1.
const [player1,player2]= game.players
console.log(player1,player2);
// 2.
const [gk, ...fieldPlayer]=player1;
console.log(gk,fieldPlayer)

// 3
const allPlayer= [...player1,...player2]
console.log(allPlayer)


// 4
const player1Final=[...player1, 'thiago','bruno']
console.log(player1Final)


// 5
// here we are doig destructuring whihch is quite tricky to understand , so we are creating a variable here as odds 
const {odds:{team1, x: draw, team2}}= game;  //game.odds
console.log(team1,draw, team2)


// 6// 
const printGoals=function (...players){
console.log(`${players.length} goals were scored`)
}
//these arguments will destructu and go in function parameter it will consider it whole one and print it 
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
printGoals('Davies', 'Muller')

// 7
// it is following short circuting method , usign the && operator it checks the falsy value first and if it find so stops and print it 
team1 < team2 && console.log(`team 1 is more likely to win the game `)
