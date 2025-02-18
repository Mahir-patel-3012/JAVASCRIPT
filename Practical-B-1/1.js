/*1.1 Variable declaration and string manipulation 

let userName = "John Doe"; 

TODO: Extract the first name and last name into separate variables 
*/

let userName = "John Doe";

// Split the name into an array and destructure it
let [firstName, lastName] = userName.split(" ");

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
