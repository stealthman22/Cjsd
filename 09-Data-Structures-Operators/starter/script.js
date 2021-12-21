'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // es6 advanced object literals No 3 Computing property
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  //  Computing property names
  // [`day-${2 + 3}`]
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // es6 advanced object literals No 1, adding propoerties
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //  // es6 advanced object literals No 2 New way of writing methods
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '06:50', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Heare is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// method calls
restaurant.orderDelivery({
  time: '22:38',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',

  starterIndex: 3,
});

// Destructuring Objects

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

// The Spread Operator

// // Without spread
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // With spread
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Amala'];
// console.log(newMenu);

// // Creating shallow copy of array
// const mainMenuCOpy = [...restaurant.mainMenu];

// // Join 2 arrays

// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log('join array', menu2);

// const str = 'Joel';
// const letters = [...str, '', 'S'];
// console.log(letters);

// // inputing data ourselves in spread
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt(' Ingredient 2?'),
//   prompt(' Ingredient 3?'),
// ];
// console.log(ingredients);
// // Pasiing fucntion values witth spread
// restaurant.orderPasta(...ingredients);

// // ES 2018 spread on objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Eyram' };
// console.log(newRestaurant);

// // Create shallow object copy with spread, rather than using object assign
// const restaurantCOpy = { ...restaurant };
// restaurantCOpy.name = 'Chicken Inn';
// console.log(restaurantCOpy.name);
// console.log(restaurant.name);

// // //  The rest pattern
// // // WITH DESTRUCTURING
// // // Spread because ... is on right
// // const arr = [1, , ...[3, 4]];

// //  Rest pattern  because ... is on left
// const [a, b, ...others] = [1, 2, 3, 4, 5];[`day-${2 + 3}`]
// console.log(a, b, others);

// // Spread and rest at the same time
// const [pizza, , Fisotta, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(otherFoods);

// // Rest with Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // WITH  FUNC
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3, 4, 5);
// add(1, 2);
// add(1, 12, 3, 4, 4, 5, 5, 66);

// const x = [3, 4, 6];
// // calling a function while using the spread operator to build params
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion,', 'olives');
// restaurant.orderPizza('mushrooms');

// SHORT CIRCUITING

// console.log('----OR----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----AND----');
// console.log(0 && 'Joel');
// console.log(9 && 'Joel');
// console.log('Hello' && 23 && null && 'Jonas');

// // Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// // Nullish Coalescing Operator
// // used to solve the 0 value problem of OR
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log('nullish', guestCorrect);

// THE FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //item is always the current element in each iteration
// for (const item of menu) console.log(item);

//  Getting current index is quite tricky
//  entries expands everything into new arrays
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}:${item[1]}`);
// }

// newer syntax using destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// //  it is a typeof object
// // console.log(typeof menu.entries());

// console.log(...menu.entries());

// // ENHANCED OBJECT LITERALS
// // 3 new ways to write object literas

// // LOGICAL ASSIGNMENT OPERATOR
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Chicken Inn',
//   owner: 'Jason Lambo',
// };

// // or short circuit can help set default value
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // using logical OR assignment
// // this can still run into the 0-falsy error
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // using nullish asssignment operator to correct the 0-falsy error

// // And assignment operator
// // without assignment
// rest2.owner = rest2.owner && '<Anonymous>';
// // rest1.owner = rest1.owner && '<Anonymous>';
// // with assignment
// rest1.owner &&= '<Anonymous>';
// console.log(rest1, rest2);
// // OPTIONAL CHAINING
// // without optional chaining returns an error
// // console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);

// // Multiple optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// // Real world example of Optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // having an error with 0 value
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // optional chaining with methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderKokonte?.(0, 1) ?? 'Method does not exist');

// // optional chaining with arrays
// const users = [{ name: 'Jonas', email: 'hellojoe.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// // without optional chaining
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('User array empty');
// }

// LOOPING OVER OBJECTS

// Looping over property names only (keys)

// const properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// // Using the object loop trick to find how many properties are in the object
// let openStr = `We are open for  ${properties.length} days:`;
// for (const day of properties) {
//   // openStr + day = openStr
//   openStr += `${day},`;
// }

// console.log(openStr);

// // Looping over property values only
// const values = Object.values(openingHours);
// //  returns all the values contained in an array
// console.log(values);

// // Looping over entires object (entries)
// // Unlike arrays entries cannot be called on the object itself

// const entries = Object.entries(openingHours);
// console.log(entries);

// // Destructuring right in the for of loop parameter
// //  we can change property name as we desire
// for (const [day, { open: up, close: down }] of entries) {
//   console.log(`On ${day} we open at ${up} and close at ${down}`);
// }

// SETS

// // The new constructor is used to create sets
// const orderedSet = new Set(['pasta', 'pizza', 'pasta', 'pitta', 'sharwama']);
// console.log(orderedSet);

// // elements were supposed to expand automatically since strings are iterables but didnt
// console.log(new Set(['Jonas']));

// // finding the size of sets
// console.log(orderedSet.size);

// // check if an element is in a set
// console.log(orderedSet.has('[pizza'));

// // adding new element to ad set

// orderedSet.add('Sugar bread');

// // delete element
// orderedSet.delete('pizza');
// // console.log(orderedSet);

// // clearing a set
// // orderedSet.clear();
// // console.log(orderedSet);

// // looping over sets
// for (const order of orderedSet) {
//   console.log(order);
// }

// // use cases
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const staffUnique = new Set(staff);

// const newStaff = [...staffUnique];
// // or
// // const newStaff = [...new Set(staff)];
// console.log(newStaff);
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('alarajoel').size);

// MAPS
// const rest = new Map();
// // this updates and returns the maps
// rest.set('name', 'Classic Man');
// rest.set(1, 'firenze');
// rest.set(2, 'Lisbon');

// // multiple set calls
// rest
//   .set('categories', ['naija', 'ghanaian', 'italiano'])
//   .set('open', 15)
//   .set('close', ' 25')
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));

// const time = 21;
// // Retrieving based on the value of another key
// //  this conditional retrieval will map to one of our boolean keys
// //  This pattern is quite unreadable tho
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //  Checking for keys in a map
// console.log(rest.has('categories'));

// // Deleting pairs in a map via the key
// console.log(rest.delete(2));

// //  Arrays as keys (Typeof objects )
// // Ensure to house in a variable before referencing in the Map
// const arr = [1, 3];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// //  We can use DOM elements as Map keys (they are objects anyway)
// rest.set(document.querySelector('h1'), 'Heading');

// // rest.set({ age: 6 }, 'Jeol');
// // console.log(rest.get({ age: 6 }));
// // checking the size fo a map
// console.log(rest.size);
// console.log(rest);

// ITERATING OVER MAPS
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 😁️'],
//   [false, 'Try again 😡️'],
// ]);
// console.log(question);

// console.log(question.get('question'));
// //  looping over maps is best done with destructuring
// for (const [key, value] of question) {
//   typeof key === 'number' && console.log(`Answer: ${key} ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// const answer = 3;
// // if (answer === 3) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }
// // OR
// // deciding what to get from the map based on conditional
// console.log(question.get(question.get('correct') === answer));

// // console.log(answer);

// // Convert object to map
// // console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // Convert Map to aray
// const newArrayFromMap = [...question];
// console.log(newArrayFromMap);
// console.log(question.entries());
// console.log(question.keys());
// console.log(...question.values());

// WORKING WITH STRINGS
const airline = 'Ghana Airlines Company';
const plane = 'A320';

// getting the character of a string at a certain position
console.log(plane[0]);
console.log('B737'[0]);

// we can read the length of strings
console.log(airline.length);

// String methods

// indexOf
console.log(airline.indexOf('r'));
// check last occurence of a character
console.log(airline.lastIndexOf('i'));

// word search
console.log(airline.indexOf('Ghana'));

// Extracting parts of a strings using the slice method
console.log(airline.slice(5));
console.log(airline.slice(5, 9));

//  extracting without knowing the index
// indexOf('') returns the first occurence of white space in the string
console.log(airline.slice(0, airline.indexOf(' ')));
// lastIndexOf('') starts extracting from the last white space occurence
console.log(airline.slice(airline.lastIndexOf(' ')));

// extracting from behind
console.log(airline.slice(-2));

console.log(airline.slice(0, -1));

//  String manipulation in action
const checkMiddleSeat = function (seat) {
  //  B and E are the middle seats
  const lastLetter = seat.slice(-1);

  if (lastLetter === 'E' || lastLetter === 'B') {
    console.log(`Ouuch you picked a sandwich seat 😀️ sorry`);
  } else {
    console.log(`Oh you picked a superb seat 🙄️`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('12A');
checkMiddleSeat('17D');

// How js really calls strings behind the scene
console.log(new String('joel'));
console.log(typeof new String('joel'));
console.log(typeof new String('joel').slice(2));

// Changing a strings case
console.log(airline.toUpperCase());
console.log('PROFESSOR LOVES TOKYO LIKE A DAUGHTER'.toLowerCase());

//  Fix caps in name

let passenger = 'bOlGOta';
//  To fix, first convert all to lower case
const passengerLowerCase = passenger.toLocaleLowerCase();
// Grab first letter and change to uppercase
const firstLetterPassenger =
  passenger[0].toUpperCase() + passengerLowerCase.slice(1);
passenger = firstLetterPassenger;
console.log(passenger);

// How about we make this a nice nifty function
const convertToLowerCase = function (str) {
  const strLower = str.toLocaleLowerCase();
  const strCorrect = str[0].toUpperCase() + strLower.slice(1);
  str = strCorrect;

  console.log(str);
};

convertToLowerCase('bERliN');

// Comparing passenger email
const email = 'hello@jojo.com';
const loginEmail = '    HeLlO@jojo.com \n';

// correct the login email
const loginCorrect = loginEmail.toLowerCase();
const trimmedEmail = loginCorrect.trim();
console.log(trimmedEmail);

//  in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// And lets make this a function again
const compareEmails = function (email1, email2) {
  const refactoredEmail = email2.toLowerCase().trim();
  email2 = refactoredEmail;
  if (email1 === email2) {
    console.log(`Allow login, email normalized and is same as  ${email1}`);
  } else {
    console.log(`Emails do not match, reject login ${email2}`);
  }
};

const email1 = 'alarajoel@gmail.com';
const email2 = 'AlaRajoel@gMAIL.com ';
compareEmails(email1, email2);

// replacing
const priceGB = '288,97€';
// what you want replaced comes first and what you would be replacing with is next
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

//  replacing full words
const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
// replace all  is still very new and may have compatibility issues
// const newAnnouncement = announcement.replaceAll('door', 'gate');

// using regular expressions
// g means all global or all occurences
const newAnnouncement = announcement.replace(/door/g, 'gate');
console.log(newAnnouncement);

// check if a string includes a substring; returns boolean
const airplane = 'Airbus A320neo';
console.log(plane.includes('A320'));

//  check what a string starts with; returns boolean
console.log(plane.startsWith('Air'));

// endswith also exists
if (airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
  console.log('Thsi plane is part of the new Airbus family');
}

// check if a passenger luggage is allowed to be checked in
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('I have some socks and a camera');
checkBaggage('I have some snacks and a gun for protection');

// console.log('a+very+good+boy'.split('+').toString().replaceAll(',', ' '));

// split
console.log('Alara Joel'.split(' '));
const [firstName, lastName] = 'Alara Joel'.split(' ');

// console.log(firstName, lastName);
//  join returns a string from the array
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// capitalize name function

const capitalizeName = function (name) {
  // first split the name, which returns an array
  const names = name.split(' ');
  const namesUpper = [];
  // loop over the array
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //  second method
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  name = namesUpper.join(' ');
  // console.log(name);
};

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas uncoo');

// padding a string
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(23, '+').padEnd(30, '+'));

// using padding to hide secret numbers e.g credit card

const maskCreditCard = function (number) {
  // take out last four numbers, and then use padStart to recreate it with some symbol
  const str = number + '';
  const last = str.slice(-4);
  // ensure the original length of the string is returned
  const mask = last.padStart(str.length, '*');
  return mask;
};
// console.log(maskCreditCard(4524444436698745512236587455n));
// console.log(maskCreditCard('44788569'));
// console.log(maskCreditCard(7474747474));

// The repeat method
// const message2 = 'Bad Weather... All Departures Delayed....  ';
// console.log(message2.repeat(5));

const planesInLine = function (n) {
  const messageAlert = `There are ${n} planes in line ${'✈️ '.repeat(n)}`;
  return messageAlert;
};

// console.log(planesInLine(8));
// console.log(planesInLine(5));
