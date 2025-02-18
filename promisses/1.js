function squareNumber(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

squareNumber(5).then((result) => {
  console.log(result);
});
