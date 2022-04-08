'use strict';

// execution context
// const name = 'Joel';

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }
// const x = first(x);

/* 
How the call stack executes this code
1. Global context is created, name is declared and its value is stored, first is declared but its value isn't read yet, it's a function, same with second ; it kinda holds them

2.  Attempts to read the value of X.... oops function call.
3. now it goes back to first... and creates an execution context for it, so its code can be run
4. let a is declared and its value is stored in the variable environment of first's execution context.
5. tries to read and store const b too. ooops function call. call stack pauses first
6. moves to second and creates it's own execution context.
7. stores var c, hits return and goes out of this context, and pops it off the stack
8. resumes executing first, and reads and stores the value of b
9. hits return and goes out of first, oooh remember x was paused lol
`10. NOw it is resumed and it's value is read and stored.
11. PROGRAM DONE!`
*/

// EXECUTION CONTEXT
function calcAge(birthYear) {
  const age = 2030 - birthYear;
  // console.log(Name);

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;

      // const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // console.log(output, 'here');
        return a + b;
      }
      // Reassigning outer scope's variable!
      output = 'New Output';
    }

    console.log(output, 'here');
  }
  printAge();
  return age;
  // console.log(add);
}

// const firstName = 'Jonas';
// calcAge(1991);
// printAge()

// name is a special reserved variable name we should not use

// HOISTING AND TDZ

//  with variables
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Joel';
// let job = 'teacher';
// const year = 1993;

// // functions
// // console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// const addDecl = function (a, b) {
//   return a + b;
// };

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // HOISTING PITFALL

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

// // This keyword
// console.log('This is this', this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   // console.log(this);
// };

// calcAge(1993);
// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   // console.log(this);
// };

// // calcAgeArrow(1953);
// const jombo = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };

// jombo.calcAge();

// const matilda = {
//   year: 2017,
// };

// // this will copy calcAge method to matilda
// matilda.calcAge = jombo.calcAge;
// // console.log(matilda.calcAge());
// matilda.calcAge();

// // method borrowing of functions f
// const f = jombo.calcAge;
// f();

// Regular Functions vs Arrow Functions
// var firstName = 'Matilda';

const jombo = {
  firstName: 'Jombo',
  year: 1993,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    // solution 1 pre ES 6
    // const self = this;
    // const isMillineal = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // SOL 2 : ES 6
    const isMillineal = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillineal();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jombo.greet();
jombo.calcAge();

// arguments keyword
// const addDecl = function (a, b) {

//   return a + b;
// };

// const addExpr = function (a, b) {
//   console.log(arguments);
//   let sum = 0;
//   if (arguments.length > 2) {
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     console.log(sum);
//   } else {
//     return a * b;
//   }
// };

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// // addExpr(2, 3);
// // console.log(addExpr(2, 3, 8, 12));
// // console.log(addExpr(2, 3));

// var addArrow = (a, b) => {
//   // console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);

// PRIMITVES VS OBJECTS

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('ME:', me);
// primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica.lastName);
console.log('After Marriage', marriedJessica.lastName);

// truly copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Hene');
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);

// programming paradigms
// procedural, object-oriented and functional
// imperative and declarative
