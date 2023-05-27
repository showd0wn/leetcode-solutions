type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init;
  nums.forEach((n) => (res = fn(res, n)));
  return res;
}
