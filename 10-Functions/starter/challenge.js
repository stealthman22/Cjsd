'use strict';
const answerPoll = document.querySelector('.poll');

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
      alert('Please follow the  instructions on how to answer this poll');
    } else {
      for (let i = 0; i < this.answers.length; i++) {
        if (favouriteLanguage === i) {
          this.answers[i] += 1;
        }
      }
    }
    this.displayResuts(this.answers);
    console.log(poll.answers);
  },
  displayResuts(type) {
    if (typeof type === 'array') {
      console.log(typeof type);
    } else if (typeof type === 'string') {
      // console.log(`Poll results are ${this.answers[0]}`);
    }
  },
};

// bind the handler reference to the this keyword of the poll object
answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

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
