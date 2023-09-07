
function* generator() {
  let previousRes = 1;

  while (true) {
    let num = prompt(`Previous result: ${previousRes}. Enter a new number:`);
    
    if (isNaN(num)) {
      console.error('Invalid number!');
    } else {
      previousRes += Number(num);
      if (previousRes > 10000) {
        previousRes = 1;
      }
      yield previousRes;
    }
  }
}
