const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// console.log(Object.entries(scorers[0]));

// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator

// // No 1

// // const players1 = game.players[0];
// // const players2 = game.players[1];

// // USING DESTRUCTIURING FOR NUMBER 1 CORRECTION
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // No 2
// // This is rest
// const [gk, ...fieldPlayers] = players1;

// // console.log(gk, fieldPlayers);

// // No 3
// //  this is spread
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // No 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // No 5
// // const { team1, x: draw, team2 } = game.odds;

// // JONAS'S SYNTAX
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // No 6
// const printGoals = function (...playerNames) {
//   // number of goals scored
//   console.log(playerNames);
//   console.log(`The total number of goals scored, was ${playerNames.length}`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // If you are adding the arguments from an object
// printGoals(...game.scored);

// // No 7

// console.log(team1 < team2 && `Bayern Munich is more likely to win `);
// console.log(team2 < team1 && `Borrusia Dortmund is more likely to win`);

// CHALLENGE 2

// Num 1
// const goalsScored = game.scored;

// for (const [i, el] of goalsScored.entries()) {
//   console.log(' Num 1', `Goal Number ${i + 1}: ${el}`);
// }

// //  No 2

// const oddsValues = Object.values(game.odds);
// let averageOdds = 0;
// for (const el of oddsValues) {
//   averageOdds += el;
// }

// // new operator found lol
// averageOdds /= oddsValues.length;
// console.log(' Num 2', `The average odds is ${averageOdds}`);

// // No 3
// // console.log(' Num 3', `Odd of victory ${game.team1}: ${oddsValues[0]}`);
// // console.log(`Odd of victory ${game.team2}: ${oddsValues[2]}`);
// // console.log(`Odd of  draw: ${oddsValues[1]}`);

// // Jonas better solution

// const oddsObject = Object.entries(game.odds);
// // console.log(oddsObject);
// for (const [team, odds] of oddsObject) {
//   // game[team] is rather clever, it used the actual value (key in this case)  of the team param, to loop the team1 and team2 properties  at the beginning of the object
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odds}`);
// }

// //  No 4
// First attempt

// const ballers = game.players[0];
// const ballers2 = game.players[1];
// const playersScored = game.scored;

// const scorers = {
//   [ballers[10]]: 5,
//   [ballers[9]]: 2,
//   [ballers2[2]]: 1,
// };

// We can use the games.scored array, it contains all the info we need
// const gameScore = game.scored;
// console.log(gameScore);

// const scoreCount = function (arr) {
//   let counts = {};
//   for (let i = 0; i < arr.length; i++)
//     // this pushes the elements from the arr into the object automatically
//     counts[arr[i]] ? (counts[arr[i]] += 1) : (counts[arr[i]] = 1);
//   console.log(counts);
// };

// scoreCount(gameScore);

// Code challenge 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // No 1

// const eventsArray = [...new Set(gameEvents.values())];
// console.log(eventsArray);

// // No 2
// gameEvents.delete(64);
// // console.log(gameEvents);

// // NO 3
// const gameEventsKeys = [...gameEvents.keys()];
// //  in js to use negative index to grab array elements you have to use the at method
// let fullGameTime = gameEventsKeys.at(-1);
// console.log(fullGameTime);
// console.log(`An event happened, on
// average, every ${Math.trunc(fullGameTime / gameEvents.size)} minutes`);

// // No 4
// let el;
// // You should use more specific names for your iterators not generic ones
// for (const [minute, event] of gameEvents) {
//   minute < 45
//     ? (el = `[FIRST HALF] ${minute}: ${event}`)
//     : (el = `[SECOND HALF] ${minute}: ${event}`);
//   console.log(el);
// }

// Challenge 4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// const text = document.body.append(document.createElement('textarea'));
// const btn = document.body.append(document.createElement('button'));

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

const text = document.createElement('textarea');
document.body.appendChild(text);
const btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.style.fontSize = '1rem';
document.body.appendChild(btn);

// const camelCaseTransform = function () {
//   // this was the only way i found to log out the right values.
//   let content = text.value.split('\n');
//   let updatedContent = [];
//   let finalArray = [];
//   let finalContent = '';

//   for (let word of content) {
//     if (word.includes('_')) {
//       word = word.toLowerCase().split('_');
//       updatedContent.push(word);
//     } else {
//       console.log('Input cannot be camelCased!');
//     }
//   }

//   for (let [index, word] of updatedContent.entries()) {
//     word[1] = word[1].charAt(0).toUpperCase() + word[1].slice(1);
//     word = word + '✅️'.repeat(index + 1);
//     // seems the join was redundant here
//     // word = word.join();
//     finalArray.push(word.replace(',', ''));
//   }

//   finalContent = finalArray.join('\n');
//   console.log(finalContent);
// };

// Jonas way better solution
const camelCaseTransform = function () {
  // Get value of textarea
  const text = document.querySelector('textarea').value;
  // Separate words based on newline character
  // This returns an array containing all the words
  const rows = text.split('\n');
  console.log(rows);
  // loop over the words
  for (const [i, row] of rows.entries()) {
    // This splits the words apart and destructuring houses them in their own variables
    const [first, second] = row.toLowerCase().trim().split('_');

    // transform to uppercase
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
  }
};
// btn.addEventListener('click', camelCaseTransform);

// solving process
// when the button is clicked, contents of the text area should be taken and transformed into camel case
// let's break it down and do this on just one string, with no format check
// target the content of the text area, and grab it, and then replace the _ with the first word of the second part of the string capitalized and the rest follow
// grab the content of text area

// remove the underscore
// change the first letter after the underscore to caps

// const formatFlights = flights.split('+');
// console.log(formatFlights);

const getCode = str => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = ` ${type.startsWith('_Delayed') ? '💔️' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(37);
  console.log(output);
}
