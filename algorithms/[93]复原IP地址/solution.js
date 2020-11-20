/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  const n = s.length;
  let res = [];

  const backtrack = function(list = [], l = 0) {
    if (list.length == 4 && l == n) {
      res.push(list.join('.'));
      return;
    }
    if (list.length == 4 && l < n) {
      return;
    }

    for (let i = 1; i <= 3; i += 1) {
      if (l + i > n) return;

      const str = s.slice(l, l + i);
      if (Number(str) > 255) return;
      if (i !== 1 && str.startsWith('0')) return;

      list.push(str);
      backtrack(list, l + i);
      list.pop();
    }
  }

  backtrack();

  return res;
};
