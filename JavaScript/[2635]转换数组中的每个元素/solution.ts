function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const res: number[] = [];
  arr.forEach((ele, idx) => {
    res.push(fn.call(null, ele, idx));
  });
  return res;
}
