'use strict';

// Grab  elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// global current score
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
const playerNow = document.querySelector(`.player--${currentPlayer}`);

// game state varaible
let playing = true;

// switching players
function switchPlayer() {
  // Switch to next player
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice number rolled
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // Dynamically switch between current players
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Implementing player hold logic
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to current player's total score

    scores[currentPlayer] += currentScore;

    // scores[1]= scores[1] + currentScore
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    //  Check if score is >= 100
    if (scores[currentPlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      // FInish the game

      playerNow.classList.add('player--winner');

      playerNow.classList.remove('player--active');
      console.log('Now playing', playerNow);
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
