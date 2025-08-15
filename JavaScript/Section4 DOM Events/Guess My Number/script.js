'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let guess;
let highscore = 0;
const directDOM = function (className, message) {
  document.querySelector(className).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    directDOM('.message', '⛔ No Number!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    directDOM('.message', '🎉 Correct Number!');

    // Style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //document.querySelector('.number').textContent = secretNumber;
    directDOM('.number', secretNumber);

    if (score > highscore) {
      highscore = score;
      //document.querySelector('.highscore').textContent = highscore;
      directDOM('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '🔼 Guess is too high!' : '🔽 Guess is too low!';
      directDOM(
        '.message',
        guess > secretNumber ? '🔼 Guess is too high!' : '🔽 Guess is too low!'
      );

      score--;
      //document.querySelector('.score').textContent = score;
      directDOM('.score', score);
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
