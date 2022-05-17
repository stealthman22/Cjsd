'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;

// if (hasDriversLicence) console.log("I am a boss");

// interface is a reserved word for a future release of js
// const interface = 'Audio';
// const private = 'Boss';

function logger() {
  console.log('My name is Joel');
}

// calling running or invocking a function
logger();

function fruitProcessor(apples, bananas) {
  console.log(apples, bananas);
  const juice = `Juice with ${apples} apples and ${bananas} bananas.`;
  return juice;
}

const appleJuice = fruitProcessor(10, 7);
console.log(appleJuice);

const bigJuice = fruitProcessor(2, 1);
console.log(bigJuice);
const age1 = calcAge1(1993);
// Function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

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

function cutFruitPieces(fruit) {
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

// Reviewing functions

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

const friends = ['Micheal', 'Steven', 'Peter'];

const years1 = new Array(1990, 2000, 2021);

console.log(friends[0]);
console.log(friends.length);
// get last element in the array
console.log(friends[friends.length - 1]);

//  mutating the array
friends[2] = 'Jogun';
console.log(friends);

//  different types

// const joel = ['Joel', 2021 - 1993];
// console.log(joel);

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[3])];
// console.log(ages);

// // push method
// const newLength = friends.push('Jay');
// console.log(friends, newLength);

// // unshift method
// friends.unshift;
// console.log(friends);

// // pop
// const popped = friends.pop();
// console.log(popped, friends);

// // shift
// const shifted = friends.shift();
// console.log(shifted, friends);

// // indexOF
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('jagunnnu'));

// // includes
// console.log(friends.includes('jagunnnu'));
// console.log(friends.includes('Steven'));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called steven anaa');
// }

// OBJECTS
const joel = {
  firstName: 'Joel',
  lastName: 'Alara',
  age: 2021 - 1993,
  job: 'Web developer',
  friends: ['Jesus', 'Gabby', 'Salim', 'Wakeup', 'Corni'],
};

// Dot vs bracket for objects
console.log(joel.lastName);
console.log(joel['age']);

const nameKey = 'Name';
// concatenating key names
// this won't work with the dot notation. Throws error unexpected string
console.log(joel['first' + nameKey]);

const interestedIN = prompt(
  'What do you want to know about Joel? Choose between firstName, lastName, age, job, and friends'
);

// importance of bracket notation
if (joel[interestedIN]) {
  console.log(joel[interestedIN]);
} else {
  console.log(
    'Wrong request! Choose between firstnName, lastName, age, job, and friends'
  );
}

joel.location = 'Accra';
joel['twitter'] = 'alara-joel';
console.log(joel);

// // challenge
// // Joel has 5 friends and his best friend is called Jesus.

// console.log(
// 	`${joel.firstName} has ${joel.friends
// 		.length} friend(s), and his best friend is called ${joel.friends[0]}`
// );

// // OBJECTS METHODS
// const joel = {
// 	firstName         : "Joel",
// 	lastName          : "Alara",
// 	// age       : 2021 - 1993,
// 	birthYear         : 1993,
// 	job               : "Web developer",
// 	friends           : [
// 		"Jesus",
// 		"Gabby",
// 		"Salim",
// 		"Wakeup",
// 		"Corni",
// ],
// hasDriversLicense : true,
// calcAge   : function (birthYear) {
// 	return 2021 - birthYear;
// },

// // 	// using this
// 	calcAge : function () {
// 		// console.log(this);
// 		//  storing a new prop with this
// 		this.age = 2021 - this.birthYear;
// 		return this.age;
// 	},

// 	// using this and getters
// 	// get calcAge () {
// 	// 	// console.log(this);
// 	// 	//  storing a new prop with this
// 	// 	this.age = 2021 - this.birthYear;
// 	// 	return this.age;
// 	// },

// 	getSummary        : function () {
// 		return `${this.firstName} is a ${this.calcAge()} year old ${this
// 			.job}, who ${
// 			this.hasDriversLicense ? `has a drivers license ` :
// 			`does not have a driver's license`}`;
// 	},
// };

// console.log(joel);

// console.log(joel.calcAge());

// console.log(joel.age);

// console.log(joel.age);

// console.log(joel.getSummary());

// LOOPS

// The for loop

// console.log("Lifting weights repetition 1  🏋‍♀️️");s

//  for loop runs until condition is false
// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition  ${rep}  🏋‍♀️️`);
// }

// LOOPING ARRAYS, BREAKING AND CONTINUING
const friends = [
  'Micheal',
  'Steven',
  45,
  'Peter',

  'wollie',
  ['apple', 'lollipop', 'strawberry'],
  'LAST MAN STANDING ',
];

const types = [];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i], typeof friends[i]);
  // add dynamically created values to another array 1
  // types[i] = typeof friends[i];

  // add dynamically created values to another array using push
  types.push(typeof friends[i]);
}

console.log(types);

// const years = [1991, 1992, 1993, 1994, 2008, 1876];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2021 - years[i]);
// }

// console.log(ages);

//  continue and break statements
// Continue
console.log('---ONLY STRINGS---');
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] !== 'string') continue;
  console.log(friends[i], typeof friends[i]);
}

// Break
console.log('-----Break with Number-----');
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] === 'number') break;
  console.log(friends[i], typeof friends[i]);
}

// LOOPING  BACKWARDS AND NESTED LOOPS
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(i, friends[i]);
}

// // nested loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifing weight repetition ${rep} `);
  }
}

// THE WHILE LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition  ${rep}  🏋‍♀️️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`From while loop: Lifting weights repetition ${rep} 🏋‍♀️️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end cos you rolled 6');
}
