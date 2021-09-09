// let js = 'amazing';
// // if(js === 'amazing') alert('js is fun');
// console.log( 40+8+23-10);
// console.log('Joel');

// let firstName = 'Bobby';
// console.log(firstName);

// let PI = 3.1415

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob)

/* let iLoveJs = true
console.log(iLoveJs);
console.log(typeof(iLoveJs));
console.log(typeof(true));
console.log(typeof(21));
console.log(typeof('Runaway'));


iLoveJs = 'Lalalalala';
console.log(typeof(iLoveJs))

let work;
work = 'Flight attendant'
console.log(work);
console.log(typeof(work))

console.log(typeof(null))
*/

// variable declaration
// mutating the age varaible
// let age = 30;
// age = 31;

// const birthYear = 1993;
// // birthYear = 1991;

// // const job;

// var job =  'coder';
// job = 'doctor';

const now = 2021;
// const ageJoel = now -1993
// const ageTobi = now - 2001
// console.log(ageJoel, ageTobi)

// console.log(ageJoel * 2, ageTobi / 2, 4 ** 3);

// String  concatenation

// const firstName ='Alara';
// const lastName = 'Joel';
// console.log(firstName  + ' ' + lastName);

let x = 10 * 3;
// x = x + 10. .. 40
x += 10;

x *= 4; //x = x * 4

// increment
x++; // x= x+1;
x--; // x = x - 1

// console.log(x);

// console.log(ageJoel < ageTobi);
// console.log(ageTobi >= 18);

//  comparison operators
// console.log(ageJoel < ageTobi);

// console.log(ageTobi >= 18);

// const isFullAge = ageTobi >= 18;

// Precedence
// console.log(now - 1993 > now - 2001);

// let a, b;
// a = b = 25-10-5;
// console.log(a,b);

// const averageAge = (ageJoel + ageTobi) / 2;

// console.log(ageJoel, ageTobi, averageAge)

// Template Literals
const firstName = "Alara";
const job = "web developer";
const birthYear = 1993;

// Type coercion
// const joel = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + '!';

// console.log(joel);

// const joelNew = `I'm ${firstName} a ${now - birthYear} years old ${job}`
// console.log(joelNew);

// console.log('String with /n /
// multiple \n\
// lines')

// With template literals
// console.log(`String
// multiple
// lines`)

// driver's license
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
// console.log('Sarah is legal for driving license 😊️')
// }

// const age = 15;

// if ( age >= 18) {
// console.log('Sarah is legal for driving license 😊️')
// } else {
//  const yearsLeft = 18 - age
//  console.log(`Sarah is still too young, wait another ${yearsLeft} years 😓️`)
// }

// const yearOfBirth = 1993;

// let century;
// if(yearOfBirth <= 2000) {
//   century = 20;
// } else {
//   century = 21
// }
// console.log(century)

// Types coercion/ conversion

//  coerced
// const inputYear = '1991'
// console.log(inputYear + 18);

// converted to avoid coercion
const inputYear = "1991";
// console.log(Number(inputYear )+ 18 , inputYear);

// // Nan weirdo
// console.log(Number('joel'));
// console.log(typeof NaN);

// console.log(String(590), 590);

// // coercion
// console.log('I am ' + 23 + " years old ");

// console.log('23' + '10' -  3);

// console.log('23' * 4)

// // logical coercion
// console.log('23' / 2)

// //  lets play
// let n = '1' + 1;
// n = n -1;
// console.log(n)

// Truthy and falsy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('joel'));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// imlicit coercion involving  booleans
// const money = 100;

// if (money) {
//  console.log("Don't spend it all")
// } else {
//  console.log('You should get a job or start a business')
// }

//  another js weirdo
// let height=0
// if(height ) {
//  console.log('Yes height is defined')
// } else {
//  console.log('Height is not defined')
// }

// to factor it in
// let height=0
// if(height || height === 0) {
//  console.log('Yes height is defined')
// } else {
//  console.log('Height is not defined')
// }

//  Equality operator
// const age = '18';

// if(age === 18) console.log('You just became an adult (strict)' );

// if(age == 18) console.log('You just became an adult (loose)' );

// // getting a value from any webpage using prompt

// const fav = Number(prompt("what's your favourite number"));
// console.log(fav, typeof(fav))

// if (fav === 23) {
// console.log('Thats amazing!')
// }

//  esle if
// if (fav === 23) {
//  console.log('Thats amazing!')
//  } else if (fav === 7) {
//   console.log("That's a cool number too")
//  } else {
//   console.log('Not a nice number 😓️')
//  }

//  // Different operator
//  if (fav !== 23 ) {
//   console.log('why not a good number dude')
//  } else {
//   console.log('Cool dude')
//  }

// Boolean Logic

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// and
// console.log(hasDriversLicense && hasGoodVision);

// or
// console.log(hasDriversLicense || hasGoodVision);

// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//  console.log('Ama is safe to drive')
// } else {
//  console.log('Someone else should drive her')
// }

const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired)

// if(hasDriversLicense && hasGoodVision && !isTired) {
//  console.log('Ama is safe to drive')
// } else {
//  console.log('Someone else should drive her')
// }

// THE SWITCH STATEMENT
const day = "friday";

// switch (day) {
// 	case "monday":
// 		console.log("Plan for the week");
// 		console.log("Check on mum");
// 		break;
// 	case "tuesday":
// 		console.log("Conduct ideation sessions");
// 	case "wednesday":
// 	case "thursday":
// 		console.log("Work on Projects");
// 		break;
// 	case "friday":
// 		console.log("Play basketball");
// 		break;
// 	case "saturday":
// 	case "sunday":
// 		console.log("Enjoy the weekend");
// 		break;
// 	default:
// 		console.log("Not a valid day!");
// }

// if (day === "monday") {
// 	console.log("Plan for the week");
// 	console.log("Check on mum");
// }
// else if (day === "tuesday") {
// 	console.log("Conduct ideation sessions");
// }
// else if (day === "wednesday" || day === "thursday ") {
// 	console.log("Work on Projects");
// }
// else if (day === "friday") {
// 	console.log("Play basketball");
// }
// else if (day === "saturday" || day === "sunday") {
// 	console.log("Enjoy the weekend");
// }
// else {
// 	console.log("Not a valid day!");
// }

// THE TERNARY OPERATOR

const age = 12;

// age >= 18 ? console.log("I am legal to drink wine 🍷️") :
// console.log("I think I will just stick with water till I am older");

// great use-case for ternary
// const drink =

// 		age >= 18 ? "wine 🍷️" :
// 		"water 🌊️";
// console.log(drink);

console.log(
	`I like to drink ${
		age >= 18 ? "wine 🍷️" :
		"water 🌊️"}`
);

// for if the value has to be stored outside the statement.
let drink2;

if (age >= 18) {
	drink2 = "wine";
}
else {
	drink2 = "water";
}
console.log(drink2);
