/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const len = s.length;

  let list = [];
  let res = 0;
  for (let i = 0; i < len; i += 1) {
    const char = s[i];
    if (list.includes(char)) {
      res = Math.max(res, list.length);
      while (1) {
        if (list.shift() === char) break;
      }
    }

    list.push(char);
  }

  return Math.max(res, list.length);
};
