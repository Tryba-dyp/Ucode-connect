
function clearDuplicates(arr) {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
}

function addWords(obj, wrds) {
  if (typeof wrds !== 'string') {
    return;
  }

  if (obj.words) {
    let wordsStr = String(Object.values(obj)) + ' ' + wrds;
    const wordsArr = wordsStr.trim().split(/\s+/);
    const uniqueWordsArr = clearDuplicates(wordsArr);
    obj.words = uniqueWordsArr.join(' ');
  } else {
    obj.words = wrds.trim().replaceAll(/\s+/g, ' ');
  }
}

function removeWords(obj, wrds) {
  if (typeof wrds !== 'string' || !obj.words) {
    return;
  }

  const wordsArr = clearDuplicates(String(Object.values(obj)).trim().split(/\s+/));
  const deleteArr = clearDuplicates(wrds.trim().split(/\s+/));

  for (let i = 0; i < deleteArr.length; i++) {
    let index = wordsArr.indexOf(deleteArr[i]);
    if (index !== -1) {
      wordsArr.splice(index, 1);
    }
  }
  obj.words = wordsArr.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
  removeWords(obj, oldWrds);
  addWords(obj, newWrds);
}
