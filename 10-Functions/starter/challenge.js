'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Return value must be a number
    const favouriteLanguage = Number(
      prompt(
        `What is your favourite programming language?\n 0:JavaScript\n 1: Python\n 2: Rust\n 3: C++ \n (Write option number)`
      )
    );
    // Check what is returned against some rules
    // is it NaN?
    if (
      isNaN(favouriteLanguage) ||
      favouriteLanguage < 0 ||
      favouriteLanguage > 3
    ) {
      alert('Follow instructions');
    } else {
      console.log(favouriteLanguage);
    }
  },
};

poll.registerNewAnswer();

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
