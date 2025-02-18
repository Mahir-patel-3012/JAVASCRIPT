const readline = require('readline');

// Recursive flatten function
function flattenArray(arr) {
  return arr.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flattenArray(current) : current);
  }, []);
}

// Setup readline for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a nested array (e.g., [1, [2, [3, 4], 5], 6]): ', (input) => {
  try {
    const parsedArray = JSON.parse(input);
    if (Array.isArray(parsedArray)) {
      const flattened = flattenArray(parsedArray);
      console.log(`Flattened Array: ${JSON.stringify(flattened)}`);
    } else {
      console.log("Please enter a valid array.");
    }
  } catch (error) {
    console.log("Invalid input. Please enter a valid array format.");
  }
  rl.close();
});
