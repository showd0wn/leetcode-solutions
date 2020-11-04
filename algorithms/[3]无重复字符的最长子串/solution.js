/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const len = s.length;
  const set = new Set();
  
  let result = 0;
  let j = -1;
  for (let i = 0; i < len; i += 1) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }

    while (j + 1 < len && !set.has(s[j + 1])) {
      set.add(s[j + 1]);
      j += 1;
    }

    result = Math.max(result, j - i + 1);
  }

  return result;
};
