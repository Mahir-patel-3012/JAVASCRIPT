//TODO: Write a function that capitalizes the first letter of each word in a sentence 
function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world! this is a test.")); 
