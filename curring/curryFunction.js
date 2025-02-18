/*function curry(func) {
  return function curried(...args) {
    // If enough arguments are provided, call the original function
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // Otherwise, return a function that takes the next argument
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example function with 3 arguments
function sum(a, b, c) {
  return a + b + c;
}

// Currying the sum function
const curriedSum = curry(sum);

// Now you can call it like this:
console.log(curriedSum(1)(2)(3));  // Output: 6
console.log(curriedSum(1, 2)(3));  // Output: 6
console.log(curriedSum(1)(2, 3));  // Output: 6
*/

const readline = require('readline');

// Curry function implementation
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example function to curry (sum of 3 numbers)
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

// Readline setup for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Collect user inputs one by one
function getUserInput(prompts, callback) {
  let inputs = [];
  
  function ask(index) {
    if (index < prompts.length) {
      rl.question(prompts[index], (input) => {
        if (!isNaN(input) && input.trim() !== '') {
          inputs.push(parseInt(input));
          ask(index + 1);
        } else {
          console.log("Please enter a valid number.");
          ask(index); // Repeat the current prompt
        }
      });
    } else {
      callback(inputs);
      rl.close();
    }
  }

  ask(0);
}

// Start collecting inputs
getUserInput(['Enter the first number: ', 'Enter the second number: ', 'Enter the third number: '], (inputs) => {
  const result = curriedSum(inputs[0])(inputs[1])(inputs[2]);
  console.log(`Result of ${inputs[0]} + ${inputs[1]} + ${inputs[2]} = ${result}`);
});
