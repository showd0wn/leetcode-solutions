/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
  const len = s.length;
  const map = new Map();
  for (let i = 0; i < len; i += 1) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  const arr = [...map.entries()];

  let res = '';
  while (res.length < len) {
    arr.sort((a, b) => b[1] - a[1]);
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i][1] > 0) {
        res += arr[i][0];
        arr[i][1] -= 1;
        count += 1;
        if (count === k) break;
      }
    }
    if (count < k && arr[0][1])  return '';
  }

  return res;
};
