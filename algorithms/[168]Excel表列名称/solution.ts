// topics = ["数学"]

/**
 * Math
 * time O(log26columnNumber), space O(log26columnNumber)
 */
function convertToTitle(columnNumber: number): string {
  const n = 26;
  let res = '';

  while (columnNumber) {
    let d = columnNumber % n;
    if (d == 0) {
      d = n;
      columnNumber -= n;
    }
    res = String.fromCharCode(d + 64) + res;
    columnNumber = Math.floor(columnNumber / n);
  }

  return res;
}
