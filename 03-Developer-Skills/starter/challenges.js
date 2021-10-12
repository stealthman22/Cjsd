'use strict';

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(`${arr[i]}oC in ${arr.indexOf(arr[i]) + 1}  days `);
    const items = arr[i];
    const indexes = arr.indexOf(arr[i] + 1);

    console.log(`...${items}`);
  }
};

const data = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data2);
// console.log(printForecast());

// Problem solving approach

//1.  Understand the problem: We want to read every item in the array, and do something with them (Write them in a string)
// Also in the string, we also need to reference the index values of the arrays
// The index cannot be zero based

// 2 Divide and Conquer
// First we need to create a function called printForecast that takes an array in as param
// We need to loop through an array  ( a for loop)
//  We need to find a way to grab the indexes of the array item
//  We have to make the index start counting from 1
// We need to return a single string that contains the all items and indexes
