'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '06:50',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// restaurant.orderDelivery({
//   time: '22:38',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del sole, 21',

//   starterIndex: 3,
// });

// // Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // destruc objects with different var names
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// // Destruc objects with default values
// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// //  Destructuring nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // Mutating variables when destructuring objects

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // with objects you need to wrap the statement in patenthesis
// ({ a, b } = obj);
// console.log(a, b);

// //  Destruc Arrays
// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);
// // switching destrucuted value
// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // destructuring returned function values immediately
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// // const [i, j] = nested;

// // destructing in side of destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // setting defult values for unknown arrays

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
