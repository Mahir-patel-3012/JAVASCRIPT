function squareNumber(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

async function squareAsync(num) {
  const result = await squareNumber(num);
  console.log(result);
}

squareAsync(5); 
