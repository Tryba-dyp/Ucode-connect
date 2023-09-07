exports.checkDivision = (beginRange = 1, endRange = 60) => {
  for (let i = beginRange; i <= endRange; i++) {
    let result = `The number ${i} -`;

    if (i % 2 === 0) {
      result = result.slice(0, -1);
      result = result.concat('is divisible by 2');
    }

    if (i % 3 === 0) {
      if (i % 2 === 0) {
        result = result.concat(', is divisible by 3');
      }
      else {
        result = result.slice(0, -1);
        result = result.concat('is divisible by 3');
      }
    }

    if (i % 10 === 0) {
      result = result.concat(', is divisible by 10');
    }

    console.log(`${result}`);
  }
}
