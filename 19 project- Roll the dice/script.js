'use strict';

// selecting the elements from html and referencing them in variable
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');
let currEle0 = document.getElementById('current--0');
let currEle1 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
// const img=document.querySelector('')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//referencing player for changing the slide color of current player
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// starting conditions

// Folowing the DRY Principle by making single function and using it wherever necessary
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

let currentScore, activePlayer, scores, playing;

const storingFunction = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currEle0.textContent = 0;
  currEle1.textContent = 0;

  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
storingFunction();

// PROBLEM, STATEMENT ONE ( generate random dice,  display it, displpay new score )

// rolling the functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      // currEle1.textContent = currentScore;
      switchPlayer();

      // classList.toggle -> it toggles between token, like if something is open so close it , if not so open it
      // player0.classList.toggle('player--active')
      // player1.classList.toggle('player--active')
    }
  }
});

// /PROBLEM SATTEMENT SECOND(hold user score, add to current score)
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. /add current scorte to active player score
    scores[activePlayer] += currentScore; //means score[1]= score[1]+ currentScore
    console.log(scores[activePlayer]);

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.  check if player score is >=100
    if (scores[activePlayer] >= 10) {
      playing = false; //disabling the buttons if any one won .
      // finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      console.log(scores[activePlayer]);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceElement.classList.add('hidden');
    } else {
      //  switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', storingFunction());
