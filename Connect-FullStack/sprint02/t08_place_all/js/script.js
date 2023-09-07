
function sortEvenOdd(arr) {
  arr.sort(function(a, b) {
    let evenOddSort = a % 2 - b % 2;
    return evenOddSort === 0 ? a - b : evenOddSort;
  });
}
