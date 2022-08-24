'use-strict';
const guessValue = document.querySelector('.check');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Input number';
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '✌️ correct number:';
        document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor='#60b347'
document.querySelector('.number').style.width='30rem'
      // When guess is too high
      if(score> highscore){
 highscore= score;
 document.querySelector('.highscore').textContent= highscore;
      }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click',function(){
    
 randomNumber = Math.trunc(Math.random() * 20) + 1;
 score = 20;
 document.querySelector('.guess').value='';
 document.querySelector('.score').textContent=score ;
 document.querySelector('.message').textContent='Start guessing';
 document.querySelector('.number').textContent= '?';
 document.querySelector('body').style.backgroundColor="#222"

})