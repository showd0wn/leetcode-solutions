type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// 循环
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  while (n) {
    let next: MultiDimensionalArray = [];
    for (let ele of arr) {
      if (typeof ele === "number") {
        next.push(ele);
      } else {
        next.push(...ele);
      }
    }
    n -= 1;
    arr = next;
  }
  return arr;
};

// 递归 栈溢出
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n == 0) {
    return arr;
  }
  const next: MultiDimensionalArray = [];
  for (let ele of arr) {
    if (typeof ele === "number") {
      next.push(ele);
    } else {
      next.push(...ele);
    }
  }
  return flat(next, n - 1);
};

// 递归 改进
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n == 0) {
    return arr;
  }
  const res: MultiDimensionalArray = [];
  for (let ele of arr) {
    if (typeof ele === "number") {
      res.push(ele);
    } else {
      res.push(...flat(ele, n - 1));
    }
  }
  return res;
};
