function addElement(arr, newElement) {
  return [...arr, newElement]; // Creates a new array with the added element
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const newArray = addElement(originalArray, 6);

console.log(originalArray); // [1, 2, 3, 4, 5] (Unchanged)
console.log(newArray);      // [1, 2, 3, 4, 5, 6] (New array with added element)
