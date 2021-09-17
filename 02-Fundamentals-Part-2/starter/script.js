"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;

// if (hasDriversLicence) console.log("I am a boss");

// interface is a reserved word for a future release of js
// const interface = 'Audio';
// const private = 'Boss';

function logger () {
	console.log("My name is Joel");
}

// calling running or invocking a function
logger();

// function fruitProcessor (apples, bananas) {
// console.log(apples, bananas);
// 	const juice = `Juice with ${apples} apples and ${bananas} bananas.`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(10, 7);
// console.log(appleJuice);

// const bigJuice = fruitProcessor(2, 1);
// console.log(bigJuice);
// const age1 = calcAge1(1993);
//  Function declaration
// function calcAge1 (birthYear) {
// 	return 2021 - birthYear;
// }

// Function expression
// const calcAge2 = function (birthYear) {
// 	return 2021 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// ARROW FUNTION
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1968);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2021 - birthYear;
// 	const retirement = 65 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jombo"));

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces (fruit) {
	return fruit * 4;
}

// function fruitProcessor (apples, bananas) {
// 	// console.log(apples, bananas);
// 	const applePieces = cutFruitPieces(apples);
// 	const bananaPieces = cutFruitPieces(bananas);
// 	const juice = `Juice with ${applePieces} pieces of apple and ${bananaPieces} pieces of  banana.`;
// 	return juice;
// }

// const bigJuice = fruitProcessor(2, 3);
// console.log(bigJuice);

// const appleJuice = fruitProcessor(10, 7);
// console.log(appleJuice);

// const bigJuice = fruitProcessor(2, 1);
// console.log(bigJuice);
// const age1 = calcAge1(1993);
// //  Function declaration
// function calcAge1 (birthYear) {
// 	return 2021 - birthYear;
// }

// Reviewing funttions

// const calcAge = function (birthYear) {
// 	return 2021 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	}
// 	else {
// 		console.log(`${firstName} is already retired`);
// 		return -1;
// 	}

// 	// return
// };

// console.log(yearsUntilRetirement(1991, "Jungo"));
// console.log(yearsUntilRetirement(1930, "Bambi"));

// ARRAYS

const friends = [
	"Micheal",
	"Steven",
	"Peter",
];

const years1 = new Array(1990, 2000, 2021);

console.log(friends[0]);
console.log(friends.length);
// get last element in the arra
console.log(friends[friends.length - 1]);

//  mutating the array
friends[2] = "Jogun";
console.log(friends);

//  different types

const joel = [
	"Joel",
	2021 - 1993,
];
console.log(joel);

const calcAge = function (birthYear) {
	return 2021 - birthYear;
};

const years = [
	1990,
	1967,
	2002,
	2010,
	2018,
];

console.log(calcAge(years));

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[3]),
];
console.log(ages);
