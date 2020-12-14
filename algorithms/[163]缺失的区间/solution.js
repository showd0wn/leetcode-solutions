/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function (nums, lower, upper) {
  const arr = [lower - 1, ...nums, upper + 1];
  const res = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    const cur = arr[i];
    const next = arr[i + 1];

    if (next === cur + 2) {
      res.push(`${cur + 1}`);
    } else if (next > cur + 2) {
      res.push(`${cur + 1}->${next - 1}`);
    }
  }

  return res;
};
