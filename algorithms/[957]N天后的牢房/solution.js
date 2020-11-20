/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = function(cells, N) {
  const len = cells.length;
  const res = [cells];
  let count = 0;
  let loopIndex = -1;

  while (count < N) {
    const last = res[res.length - 1];
    const temp = last.map((_, i) => {
      if (i === 0 || i === len - 1) {
        return 0;
      }
      const l = last[i - 1];
      const r = last[i + 1];
      return (l === 0 && r === 0) || (l === 1 && r === 1) ? 1 : 0;
    });
    loopIndex = res.findIndex(v => v.join('') === temp.join(''));
    if (loopIndex !== -1) break;
    res[++count] = temp;
  }

  if (count === N) {
    return res[res.length - 1];
  }
  return res[loopIndex + (N - loopIndex) % (count  - loopIndex + 1)];
};
