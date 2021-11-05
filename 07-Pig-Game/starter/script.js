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

// Winner text

const winnerText = document.createTextNode('(Winner)');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// global current score
let scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
// let playerNow = ;

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
    if (scores[currentPlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      // FInish the game

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      // console.log('Now playing', playerNow);
      document.getElementById(`name--${currentPlayer}`).appendChild(winnerText);
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
  console.log(scores);
});

// Reload the game:
// grab new game button
//  Create onclick event for new game button
// Reset all scores to zero :
// total scores player 1 and 2,
// current scores player one and 2
// hide  dice
// reset default colour
// let roll dice and hold buttons work

btnNew.addEventListener('click', function () {
  // hide dice
  diceEl.classList.add('hidden');
  // reset colour
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
  // reset current scores
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  // reset total scores
  scores = [0, 0];
  console.log(scores);
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  // console.log(scores);
  // Remove winner text if there was a previous winner
  document.getElementById(`name--${currentPlayer}`).removeChild(winnerText);
  // resume the game
  playing = true;
});
