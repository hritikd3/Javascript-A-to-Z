'use strict';

// selecting the elements from html and referencing them in variable
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currEle0 = document.getElementById('current--0');
const currEle1 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//referencing player for changing the slide color of current player
const player0= document.querySelector('.player--0')
const player1= document.querySelector('.player--1')
// starting conditions

score0.textContent = 0;
score1.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// PROBLEM, STATEMENT ONE ( generate random dice,  display it, displpay new score )

// rolling the functionality
btnRoll.addEventListener('click', function () {
  // 1) generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   2) display the dice roll
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  console.log(dice);

  //   3)  check for dice if it one switch user
  if (dice !== 1) {
    // add to currrentscore
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =currentScore
      ;
  } else {
    // switch to next player
    // currEle1.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore=0;


    // classList.toggle -> it toggles between token, like if something is open so close it , if not so open it 
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
  }
});


// /PROBLEM SATTEMENT SECOND(hold user score, add to current score)
btnHold.document.addEventListener('click', function (){
  // /add current scorte to active player score 
 scores[activePlayer] += currentScore;  //means score[1]= score[1]+ currentScore

 document.querySelector('#score--0')
//   check if player score is >=100  ,finish the game

//  switch to next player
})