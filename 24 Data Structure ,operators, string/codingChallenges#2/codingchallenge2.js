const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["john","Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, 
// along with the goal number (Example: "Goal 1: Lewandowski")
for(const [i,player] of game.scored.entries()){
    console.log(`Gaol ${i+1}: ${player}`)
}

//2. Use a loop to calculate the average odd and log it to the console 
const odds=Object.values(game.odds)
let avg=0;
for(const odd of odds ){
    avg +=odd;
    avg =avg/odds.length;
    console.log(avg)
}

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for(const [team,odd] of Object.entries(game.odds)){
    // console.log(` ${team} ${odd}`)
    const teamStr= team == 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`odd for ${teamStr} ${odd}`)
}