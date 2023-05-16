'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 20;

// document.querySelector('.guesss').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    console.log('You Are the Winner');
    document.querySelector('.message').textContent = '💫Winning Number!';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#5f10cc';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('You Lost');
      document.querySelector('.message').textContent = 'You lost teh game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  
  if (score == score) {
    document.querySelector('.score').textContent = score;
  }
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
