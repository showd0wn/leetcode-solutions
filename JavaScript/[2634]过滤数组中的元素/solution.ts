function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const res: number[] = [];
  arr.forEach((ele, index) => {
    if (fn(ele, index)) {
      res.push(ele);
    }
  });
  return res;
}
