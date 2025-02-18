

function compose(...functions) {
    return function(initialValue) {
      return functions.reduceRight((acc, fn) => fn(acc), initialValue);
    };
  }
  
function add2(x) {
    return x + 2;
  }
  
  function multiplyBy3(x) {
    return x * 3;
  }
  
  function square(x) {
    return x * x;
  }
  
  // Compose the functions
  const composedMath = compose(square, multiplyBy3, add2);
  
  // This is equivalent to: square(multiplyBy3(add2(4)))
  console.log(composedMath(4));  // Output: 324
  