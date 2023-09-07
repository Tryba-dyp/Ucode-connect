function concat(string1, string2) {
  enterFunc.count = 0;

  function enterFunc() {
    enterFunc.count++;
    let string2 = prompt('Enter string2:');
    
    if (string2 === "") {
      return string1;
    }

    return string1.concat(' ' + string2);
  };

  if (string2) {
    return string1.concat(' ', string2);
  } 

  return enterFunc;
}
