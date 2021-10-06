// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//  Using the problem solving framework

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2
// Fucntion should now reveive 2 arrays
// Solution: merge the two arrays together.

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const BugNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([1, 2, 3, 4, 5], [23, 56, 26]);
// console.log(amplitudeNew);

// Debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcuis',
//     // fix the bug
//     value: Number(prompt('Degree Celcius')),
//   };

//   // find the bug
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // Identify the bug
// console.log(measureKelvin());

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([1, 2, 3, 4, 5], [23, 56, 26]);
// identify
console.log(amplitudeBug);
