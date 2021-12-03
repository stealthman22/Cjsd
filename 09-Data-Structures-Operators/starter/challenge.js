// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
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
