//  Challenge 1

// using test data 1
let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 95;

// using test data 2
markHeight = 1.88;
markWeight = 92;

johnHeight = 1.76;
johnWeight = 85;

let markBmi = Math.round(markWeight / markHeight ** 2);
let johnBmi = Math.round(johnWeight / (johnHeight * johnHeight));
// console.log(markBmi, johnBmi);

// let markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi);

// console.log(markBmi, johnBmi, markHigherBmi);

//  Challenge 2
// if (markBmi > johnBmi === true) {
//  console.log(`Mark's BMI(${markBmi}) is higher than John's(${johnBmi})`)
// } else {
//  console.log(`John's BMI(${johnBmi}) is higher than Mark's(${markBmi})`)
// }

// Challenge 3

// No 1 and 2

// const averageScoreDolphins = Math.round((96 + 108 + 89) / 3);
// const averageScoreKoalas = Math.round((88 + 91 +105) / 3);

// console.log(`Dolphins averaged  ${averageScoreDolphins},
// Koalas averaged  ${averageScoreKoalas}`);

// if (averageScoreDolphins > averageScoreKoalas) {
//  console.log('Team Dolphins Win')
// } else if (averageScoreDolphins < averageScoreKoalas) {
//  console.log('Team Koalas Win')
// } else if (averageScoreDolphins === averageScoreKoalas) {
//  console.log('Both teams earned a draw, share the trophy guys!')
how;
// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100) {
//  console.log('Team Dolphins Win 🏆️')
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas > 100 ) {
//  console.log('Team Koalas Win 🏆️')
// } else if (averageScoreDolphins === averageScoreKoalas ) {
//  console.log('Both teams earned a draw, share the trophy guys! 🏆️')
// } else if (averageScoreDolphins > 100 ||
//   averageScoreKoalas > 100) {
// console.log('Minimum score requirement not passed')
//   }
// else {
// console.log("That doesn't seem right")
// }

//  No 4
// const averageScoreDolphins = Math.round((97 + 112 + 6) / 3);
// const averageScoreKoalas = Math.round((109 + 95 +6) / 3);

// console.log(`Dolphins averaged  ${averageScoreDolphins},
// Koalas averaged  ${averageScoreKoalas}`);

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//  console.log('Team Dolphins Win 🏆️')
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100 ) {
//  console.log('Team Koalas Win 🏆️')
// } else if (averageScoreDolphins === averageScoreKoalas && (averageScoreDolphins >= 100 || averageScoreKoalas >= 100) ) {
//  console.log('Both teams earned a draw, share the trophy guys 🏆️!')
// } else if (averageScoreDolphins < 100 &&
//   averageScoreKoalas < 100) {
// console.log('Minimum score requirement not passed')
//   }
// else {
// console.log("That doesn't seem right")
// }

// Challenge 4

//
// const

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const totalValue = tip + bill;

console.log(
  `The bill is ${bill}, the tip is ${tip}, and the total value due is ${totalValue}`
);
