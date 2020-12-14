/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function(wall) {
  const n = wall.length;
  const sum = wall[0].reduce((a, b) => a + b);
  const arr = [...wall];
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      arr[i][j] += arr[i][j - 1] || 0;
    }
  }

  const res = arr.flat().filter(v => v !== sum);
  const map = new Map();
  for (let i = 0; i < res.length; i += 1) {
    if (map.has(res[i])) {
      map.set(res[i], map.get(res[i]) + 1);
    } else {
      map.set(res[i], 1)
    }
  }

  return n - Math.max(0, ...map.values());
};
