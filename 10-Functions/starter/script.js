'use strict';

// const bookings = [];
// // Default Parameters
// // You can use anything as default, even expressions
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers > 5 ? 150 * numPassengers : 200 * numPassengers
// ) {
//   // old way to do default parameters ES 5
//   // numPassengers = numPassengers || 1;
//   // price = price || 200;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 5);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 5);

// // How passing arguments really work
// const flight = 'LH234';

// const joel = {
//   name: 'Alara Joel',
//   passport: 234455677,
// };

// // building flight checking in function
// const checkIn = function (flightNum, passenger) {
//   // flight is a primitive type, and only contains tacopy off the property, not the original
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 234455677) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// // checkIn(flight, joel);
// console.log(flight);
// console.log(joel);

// // same as doing
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(joel);
// checkIn(flight, joel);

//  Higher order functions
const oneWord = function (str) {
  // this regex grabs all spaces in argument passed to it
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//  all event handlers are essentially higher order functions
// js uses callbacks all the time

// const high5 = function () {
//   console.log(':wave:');
// };

// document.body.addEventListener('click', high5);

// // for each can accepts a higher order function too
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//  trying to write my own HOF
// const canDrive = function (person) {
//   if (person.age > 18 && person.age < 80) {
//     console.log('You are of drivable age and qualify for a license test');
//   } else if (person.age < 18) {
//     console.log(
//       'Sorry please you do not qualify for a license, you are too young'
//     );
//   } else {
//     ('Sorry please you do not qualify for a license, you are above retirement age, but can apply for a driver instead');
//   }
// };

// const checkCitizen = function (ctz) {
//   const normalize = ctz.toLowerCase();
//   if (normalize !== 'usa') {
//     console.log(
//       'Please you are not a citizen, pick the resident permit form first!'
//     );
//   }
// };

// const john = {
//   age: 25,
//   country: 'USA',
// };
// canDrive(john, checkCitizen);

// Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//  rewrite that weird function as an arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);
// confusing
const greeterHey = greet('Hey');
greeterHey('steven');

greet('Hello')('Jonas');

// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight  ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(222, 'Joel Alara');
lufthansa.book(266, 'Oyin Bhadmus');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does not work
// book(23, 'Sarah Willyboy');

// call the book function, with its this keyword pointing to eurowings
book.call(eurowings, 234, 'SarahWIlly');
console.log(eurowings.bookings);

book.call(lufthansa, 289, 'Jon Snow');
console.log(lufthansa.bookings);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 345, 'Stealthman 22');
console.log(swiss.bookings);

// apply method does the same thing, except it receives an array
const flightData = [587, 'George Armani'];
book.apply(swiss, flightData);

// call doing it the apply way, using a spread operator
book.call(lufthansa, ...flightData);

// The  bind method (returns a new function)
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(234, 'Steven Crossman');
bookLX(188, 'Ama Serwaa');

// bind method with set params (Partial application)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Alara TObi');

// bind method  with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

const buyButton = document.querySelector('.buy');
buyButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// DAY 88 (10th January 2022)
// Call And Apply method
// • We can explicitly tell a function what it's this keyword should be like, i.e where should the this of a function point to, using the call function method.
// • the first argument of the call method, sets where the value of this should come from
// • this is a variable that is used in instance methods to refer to the object on which they are working.
// • The apply method does virtually the same thing as the Call method, only that it does not receive a list of arguments after this keyword, instead, it receives an array
// • The apply method is not used anymore, because we can use the call method, and the spread operator to read the data from the array
// book.call(obj, ...arr)

// The Bind Method
// • Does the same as call and apply, but bind does not immediately call the function, instead it returns a new function where this keyword is bound to whatever value we pass to bind.
// • We can even preset methods to the bind method, and they will be defined for all function calls (this can be likened to a coding pattern called the partial application pattern)
// • Partial application means that a part of the arguments for the original function is already applied.

// Bind with event handlers
// • In an event handler function, the this keyword points to the element on which the hadnler is attached to
