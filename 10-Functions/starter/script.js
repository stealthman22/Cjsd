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
