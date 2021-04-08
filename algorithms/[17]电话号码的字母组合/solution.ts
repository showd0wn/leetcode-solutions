// topics = ["回溯算法"]

function letterCombinations(digits: string): string[] {
  const n = digits.length;
  if (!n) return [];

  const res: string[] = [];
  const path: string[] = [];
  const phoneMap: { [prop: string]: string } = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const backtrack = function (f = 0) {
    if (path.length == n) {
      res.push(path.join(''));
      return;
    }
    const d = digits[f];
    for (let letter of phoneMap[d]) {
      path.push(letter);
      backtrack(f + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
