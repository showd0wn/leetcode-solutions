/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function(T) {
  // 超时
  // const len = T.length;
  // const res = [];
  // for (let i = 0; i < len - 1; i += 1) {
  //   if (T[i] < T[i + 1]) {
  //     res.push(1);
  //   } else {
  //     const left = T.slice(i + 1)
  //     const index = left.findIndex(item => item > T[i]);
  //     res.push(index === -1 ? 0 : index + 1);
  //   }
  // }
  // return [...res, 0];


  const len = T.length;
  const res = new Array(len).fill(0);

  for (let i = len - 1; i >= 0; i -= 1) {
    let j = i + 1;
    while (j < len) {
      if (T[i] < T[j]) {
        res[i] = j - i;
        break;
      } else if (res[j] === 0) {
        break;
      } else {
        j += res[j]
      }
    }
  }
  return res;
};
