/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const res = [1];
  let [a, b, c] = [0, 0, 0];

  for (let i = 1; i < n; i += 1) {
    const v1 = res[a] * 2;
    const v2 = res[b] * 3;
    const v3 = res[c] * 5;

    if (v1 <= v2 && v1 <= v3) {
      a += 1;
    } 
    
    if (v2 <= v1 && v2 <= v3) {
      b += 1;
    } 
    
    if (v3 <= v1 && v3 <= v2) {
      c += 1;
    }

    res.push(Math.min(v1, v2, v3));
  }

  return res[n - 1];
};
