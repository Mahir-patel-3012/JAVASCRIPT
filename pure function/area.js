function calculateCircleArea(radius) {
  if (radius <= 0) {
    return "Radius must be greater than zero";
  }
  return Math.PI * radius * radius;
}

console.log(calculateCircleArea(5)); 
console.log(calculateCircleArea(-3)); 
