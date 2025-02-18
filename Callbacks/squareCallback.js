const readline = require('readline');

// Function that squares a number after 1 second using a callback
function squareAfterDelay(number, callback) {
  setTimeout(() => {
    const squared = number * number;
    callback(squared);
  }, 1000);
}

// Readline setup for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number to square: ', (input) => {
  const number = parseInt(input);
  
  if (!isNaN(number)) {
    console.log("Calculating...");
    squareAfterDelay(number, (result) => {
      console.log(`The square is: ${result}`);
      rl.close();
    });
  } else {
    console.log("Please enter a valid number.");
    rl.close();
  }
});

