
function checkBrackets(str) {
  if (typeof str !== 'string' 
    || (str.indexOf(')') === -1 && str.indexOf('(') === -1)) {
      return -1;
  }

  let openCount = 0;
  let missOpen = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openCount++;
    } else if (str[i] === ')') {
      if (openCount === 0) {
        missOpen++;
      } else {
        openCount--;
      }
    }
  }
  return openCount + missOpen;
}
