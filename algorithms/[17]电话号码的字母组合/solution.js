/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const len = digits.length;
  if (!len) return [];

  const res = [];
  const tmp = [];
  const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  // 回溯
  const backtrack = function(f = 0) {
    if (f === len) {
      res.push(tmp.join(''));
      return;
    }
    const d = digits[f];
    for (let letter of phoneMap[d]) {
      tmp.push(letter);
      backtrack(f + 1);
      tmp.pop(letter);
    }
  }

  backtrack();

  return res;
};
