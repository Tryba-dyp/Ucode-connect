
function checkDivision(beginRange=1, endRange=100) {
  if (beginRange === '' || endRange === '') {
    beginRange = 1;
    endRange = 100;
  }

  for (let i = beginRange; i <= endRange; i++) {
    let description = "-";

    if (i % 2 === 0) {
      description = 'is even';
    }

    if (i % 3 === 0) {
      if (i % 2 ===0) {
        description = description.concat(', a multiple of 3');
      }
      else {
        description = ('is a multiple of 3');
      }
    }

    if (i % 10 === 0) {
      description = description.concat(', a multiple of 10');
    }

    console.log(`${i} ${description}\n`);
  }
}

checkDivision(
  prompt('Enter the beginning of the range:', 1), 
  prompt('Enter the end of the range:', 100)
);
