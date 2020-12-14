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
  //     const right = T.slice(i + 1);
  //     const index = right.findIndex(item => item > T[i]);
  //     res.push(index === -1 ? 0 : index + 1);
  //   }
  // }
  // return [...res, 0];


  const len = T.length;
  const res = new Array(len).fill(0);

  // 从右向左遍历，利用后面计算过的位置，减少遍历次数
  for (let i = len - 1; i >= 0; i -= 1) {
    let j = i + 1;
    while (j < len) {
      if (T[i] < T[j]) {
        res[i] = j - i;
        break;
      } else if (res[j] === 0) {
        break;
      } else {
        j += res[j];
      }
    }
  }
  return res;
};

const dailyTemperatures2 = function(T) {
  const len = T.length;
  const res = new Array(len).fill(0);

  // 单调栈
  const stack = [];

  for (let i = 0; i < len; i += 1) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const val = stack.pop();
      res[val] = i - val;
    }
    stack.push(i);
  }
  return res;
};
