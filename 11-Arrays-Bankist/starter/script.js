'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// learning arrays is so important to be good at jsssss

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// The slice method can take a part of the array (does not mutate original array)
console.log(arr.slice(2));
console.log(arr.slice(2, -1));

//  slice can create a shallow copy of an array, similar to the spread operator
console.log(arr.slice());
console.log(...arr);

// SPLICE
// splice mutates original array by deleting specified index
// it returns the removed item in a new array.
// console.log(arr.splice(2));

// a good use case offf of splice is to delete last added element to an array
// console.log(arr.splice(-1));

// second param in slice is called Delete count
// it specifies how many items from the starting index should be deleted
// console.log(arr.splice(0, 3));
console.log(arr);

// REVERSE
//  Returns an array in it's reversed order
// It mutates the original array
const arr2 = ['j', 'i', 'g', 'f'];
arr2.reverse;
console.log(arr2);

// CONCAT
// Conatenates two arrays  (does not mutate original array)
const letters = arr.concat(arr2);
// same as this
console.log([...arr, ...arr2]);

// JOIN
// joins all items in an array as a stirng with  a seperator you specified
console.log(letters.join('-'));

// Looping over arrays
const loopedArray = arr2.forEach(item => {
  item + 1;
  // now i'm back
});

// console.log(typeof loopedArray);
