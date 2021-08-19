//  Challenge 1

// using test data 1
let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 95;



// using test data 2
markHeight = 1.88;
markWeight = 92;

johnHeight = 1.76;
johnWeight= 85;

let markBmi = Math.round(markWeight / markHeight **2);
let johnBmi = Math.round(johnWeight / (johnHeight * johnHeight));
// console.log(markBmi, johnBmi);

// let markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi); 

// console.log(markBmi, johnBmi, markHigherBmi);


//  Challenge 2
if (markBmi > johnBmi === true) {
 console.log(`Mark's BMI(${markBmi}) is higher than John's(${johnBmi})`)
} else {
 console.log(`John's BMI(${johnBmi}) is higher than Mark's(${markBmi})`)
}