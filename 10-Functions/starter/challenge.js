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
};

answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus question
// all we have to do is to dynamically create an object
// so that this.answers in the function will point tto the this of the created object

// An anonymous object can be created on the fly to set the this keyword of a call method
poll.displayResulst.call({ answers: [5, 2, 3] }, 'string');
poll.displayResulst.call({ answers: [1, 5, 3, 9, 6, 1] });

//  Data 1: [5, 2, 3]
//  Data 2: [1, 5, 3, 9, 6, 1]
