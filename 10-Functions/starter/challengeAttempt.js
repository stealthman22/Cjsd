'use strict';
const answerPoll = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register the answer
    // Check if answer is a number, and if it is below the lenght of the array
    // short circuited with &&

    typeof answer === 'number' &&
      answer < this.answers.length &&
      //answer here acts as a position in the options array
      this.answers[answer]++;

    this.displayResulst();
    this.displayResulst('string');
  },
  //  this is what the question asked for
  displayResulst(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll resulst are ${this.answers.join(', ')}`);
    }
  },

  //
  //
  //
  // My attempt, not the best solution but oh well...
  // registerNewAnswer() {
  //   // Return value must be a number
  //   const favouriteLanguage = Number(
  //     prompt(
  //       `What is your favourite programming language?\n 0:JavaScript\n 1: Python\n 2: Rust\n 3: C++ \n (Write option number)`
  //     )
  //   );
  //   // Check what is returned against some rules
  //   // is it NaN?

  //   if (
  //     isNaN(favouriteLanguage) ||
  //     favouriteLanguage < 0 ||
  //     favouriteLanguage > 3
  //   ) {
  //     alert('Please follow the  instructions on how to answer this poll');
  //   } else {
  //     for (let i = 0; i < this.answers.length; i++) {
  //       if (favouriteLanguage === i) {
  //         this.answers[i] += 1;
  //       }
  //     }
  //   }
  //   return this.displayResults(this.answers);
  // },
  // displayResults(type) {
  //   if (Array.isArray(type)) {
  //     console.log(type);
  //   } else if (typeof type === 'string') {
  //     console.log(`Poll results are ${type}`);
  //   }
  // },
};

answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();
// bind the handler reference to the this keyword of the poll object
// answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// No 5 Bonus

// const Data1 = [5, 2, 3];
// const Data2 = [1, 5, 3, 9, 6, 1];
// const Data3 = String(Data2);

// const newResults = poll.displayResults;
// console.log(newResults(Data1));
// console.log(newResults(Data2));
// console.log(newResults(Data3));
// const pollRandom = poll.displayResuts.bind(poll);
// console.log(pollRandom(Data1));
// console.log(pollRandom(Data2));
// console.log(pollRandom(Data3));

// const mine = function () {
//   const favNum = Number(
//     prompt(
//       `What is your favourite programming language?\n 0:JavaScript\n 1: Python\n 2: Rust\n 3: C++ \n (Write option number)`
//     )
//   );
//   if (isNaN(favNum)) {
//     alert('Follow instructions');
//   } else {
//     console.log(favNum);
//   }
// };

// mine();

// ||
//       favouriteLanguage < 0 ||
//       favouriteLanguage > 3
//   else {
//   this.answers[0]++;
// }

// if (typeof favNum === 'number') {
//   console.log(favNum);
// } else {
//   alert(`Thats wrong dude!`);
// }

// if (favouriteLanguage === 0) {
//   this.answers[0] += 1;
// }
// if (favouriteLanguage === 1) {
//   this.answers[1] += 1;
// }
// if (favouriteLanguage === 2) {
//   this.answers[2] += 1;
// }
// if (favouriteLanguage === 3) {
//   this.answers[3] += 1;
// }

// My super chained ternary operator :)
// first =
// favouriteLanguage === 0
//   ? (this.answers[0] += 1)
//   : favouriteLanguage === 1
//   ? (this.answers[1] += 1)
//   : favouriteLanguage === 2
//   ? (this.answers[2] += 1)
//   : (this.answers[3] += 1);

// let myArr = Array(5).fill(2);

// myArr = String(myArr);
// console.log(typeof myArr);
// console.log(myArr);
