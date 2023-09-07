
String.prototype.removeDuplicates = function() {
  const wordsArr = this.trim().split(/\s+/);
  const uniqueWordsArr = wordsArr.filter((value, index) => {
    return wordsArr.indexOf(value) === index;
  });
  return uniqueWordsArr.join(' ');
}
