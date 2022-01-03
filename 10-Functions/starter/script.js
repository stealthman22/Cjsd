'use strict';

const bookings = [];
// Default Parameters
// You can use anything as default, even expressions
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers > 5 ? 150 * numPassengers : 200 * numPassengers
) {
  // old way to do default parameters ES 5
  // numPassengers = numPassengers || 1;
  // price = price || 200;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);

// How passing arguments really work
const flight = 'LH234';

const joel = {
  name: 'Alara Joel',
  passport: 234455677,
};

// building flight checking in function
const checkIn = function (flightNum, passenger) {
  // flight is a primitive type, and only contains tacopy off the property, not the original
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234455677) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, joel);
console.log(flight);
console.log(joel);

// same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(joel);
checkIn(flight, joel);
