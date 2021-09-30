// Challenge 1

// No 1
// const calcAverage = (a, b, c) => Math.round((a + b + c) / 3);

// let dolphins = calcAverage(44, 23, 71);

// let koalas = calcAverage(65, 54, 49);

// // No 2
// const avg = console.log(
// 	`Team Dolphins' average score is ${dolphins} 🌊️, and team Koalas' is ${koalas} 🐨️. `
// );

// // No 3 and 4
// function checkWinner (avgDolphins, avgKoalas) {
// 	console.log(avgDolphins, typeof avgDolphins);

// 	if (avgDolphins > avgKoalas * 2) {
// 		console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} 🌊️`);
// 	}
// 	else if (avgKoalas > avgDolphins * 2) {
// 		console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins} 🐨️`);
// 	}
// 	else {
// 		return;
// 	}
// }

// // test data 2
// dolphins = calcAverage(85, 54, 41);
// koalas = calcAverage(23, 34, 27);

// checkWinner(dolphins, koalas);

// No 2
// const avg = console.log(
// 	`Team Dolphins' average score is ${dolphins} 🌊️, and team Koalas' is ${koalas} 🐨️. `
// );

// No 3 and 4
// First solution, worked but not the best practice... well maybe
// function checkWinner (avgDolphins, avgKoalas) {
// 	// const dolphins = calcAverage(44, 23, 71);

// 	// const koalas = calcAverage(65, 54, 400);
// 	avgDolphins = dolphins;
// 	avgKoalas = koalas;

// 	console.log(avgDolphins, typeof avgDolphins);

// 	if (avgDolphins > avgKoalas * 2) {
// 		console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} 🌊️`);
// 	}
// 	else if (avgKoalas > avgDolphins * 2) {
// 		console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins} 🐨️`);
// 	}
// 	else {
// 		return;
// 	}
// }

// checkWinner();

// Challenge 2

// function calcTip (bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		return bill * 0.15;
// 	}
// 	else {
// 		return bill * 0.2;
// 	}
// }

// const calcTip = (bill) =>

// 		bill >= 50 && bill <= 300 ? bill * 0.15 :
// 		bill * 0.2;

// const bills = [
// 	125,
// 	555,
// 	44,
// ];

// const tips = [
// 	calcTip(bills[0]),
// 	calcTip(bills[1]),
// 	calcTip(bills[2]),
// ];

// const total = [
// 	bills[0] + tips[0],
// 	bills[1] + tips[1],
// 	bills[2] + tips[2],
// ];
// console.log(bills, tips, total);

// Challenge 3

// const mark = {
// 	fullName : "Mark Miller",
// 	mass     : 78,
// 	height   : 1.69,

// 	calcBmi  : function () {
// 		this.bmi = Math.round(this.mass / this.height ** 2);
// 		return this.bmi;
// 	},
// };

// const john = {
// 	fullName : "John Smith",
// 	mass     : 92,
// 	height   : 1.95,

// 	calcBmi  : function () {
// Ghost property
// 		this.bmi = Math.round(this.mass / this.height ** 2);
// 		return this.bmi;
// 	},
// };

// mark.calcBmi();
// john.calcBmi();

// const bmiCompare = console.log(`
// ${
// 	john.bmi >
// 	mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})` :
// 	`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`}
// `);

// Challenge 4
const bills = [
	22,
	295,
	176,
	440,
	37,
	105,
	10,
	1100,
	86,
	52,
];

const tips = [];
const totals = [];

const calcTip = (bill) =>

		bill >= 50 && bill <= 300 ? bill * 0.15 :
		bill * 0.2;

for (let i = 0; i < bills.length; i++) {
	// populating the tips array
	tips.push(calcTip(bills[i]));
	// populating the totals array
	totals.push(tips[i] + bills[i]);
}
console.log("The bills", bills, "The tips", tips, "The totals", totals);
// console.log(`The bills ${bills},
// The tips ${tips},
// The totals ${totals}`);

// Bonus

function calcAverage (arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const totalValue = sum + arr[i];
		sum = totalValue;
	}
	console.log(`The total sum is ${sum}`);
	const average = sum / arr.length;
	console.log(`The average is ${average}`);
	return;
}

calcAverage(totals);
//  now this was dope lol
// just realized  a parameter can actually hold an array, without doing any crazy setups.

// Jonas way
// for (let i = 0; i < bills.length; i++) {
// 	// populating the tips array
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);
// 	// populating the totals array
// 	totals.push(tips + bills[i]);
// }

// function calcAverage (arr) {
// 	let sum = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum / arr.length;
// }
