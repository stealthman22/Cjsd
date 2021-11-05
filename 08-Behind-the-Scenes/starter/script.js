'use strict';

// execution context
const name = 'Joel';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}
const x = first(x);

/* 
How the call stack executes thsi codd 
1. Global context is created, name is declared and its value is stored, first is declared but its value isn't read yet, it's a function, same with second ; it kinda holds them

2.  Attempts to read the value of X.... oops function call.
3. now it goes back to first... and creates an execution context for it, so its code can be run
4. let a is declared and its calue is stored in the variable environment of first's execution context.
5. tries to read and store const b too. ooops function call. call stack pauses first
6. moves to second and creates it's own execution context.
7. sores var c, hits return and goes out of this context, and pops it off the stack
8. resumes executing first, and reads and stores the value of b
9. hits return and goes out of first, oooh remember x was paused lol
`10. NOw it is resumed and it's value is read and stored.
11. PROGRAM DONE!`
*/
