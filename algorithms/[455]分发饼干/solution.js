/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let [i, j] = [0, 0];
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i += 1;
    }
    j += 1;
  }

  return i;
};
