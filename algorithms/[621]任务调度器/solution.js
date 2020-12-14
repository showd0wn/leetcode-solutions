/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  const len = tasks.length;
  const map = new Map();

  for (let i = 0; i < len; i += 1) {
    const task = tasks[i];
    if (map.has(task)) {
      map.set(task, map.get(task) + 1);
    } else {
      map.set(task, 1);
    }
  }

  let list = [...map];
  let res = '';

  while (list.length) {
    list.sort((a, b) => b[1] - a[1])
    list = list.filter(v => v[1] !== 0);
    for (let i = 0; i <= n; i += 1) {
      if (list[i]) {
        res += list[i][0];
        list[i][1] -= 1;
      } else {
        res += ' ';
      }
    }
  }

  return res.trim().length;
};
