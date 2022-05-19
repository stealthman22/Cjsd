'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Number BOys';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// EVENT LISTENERS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guess = Number(document.querySelector('.guess').value);

let highScore = 0;
let score = 20;

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

function displayNumber(num) {
  document.querySelector('.number').textContent = num;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if no number is entered
  if (!guess) {
    displayMessage('No Number ⁉️');
    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 😹');
    displayNumber(secretNumber);

    // manipulating css
    document.querySelector('body').style.backgroundColor = '#60b387';
    document.querySelector('.number').style.width = '30rem';

    // highScore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } // wrong number guess
  else if (guess !== secretNumber) {
    // nested conditionals
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 😢');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // change secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // make score 20 again
  document.querySelector('.score').textContent = score;
  // change body color back to default
  document.querySelector('body').style.backgroundColor = '#222';
  // reset number padding if there was a win
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  // clear input field
  document.querySelector('.guess').value = '';
  // reset message
  displayMessage('Start guessing...');
  console.log('again');
});

let listElements = document.querySelectorAll('.mylist');

console.log(listElements);
let lastListElement = listElements[listElements.length - 1];
console.log(lastListElement);
