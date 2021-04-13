// topics = ["数组"]

function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const sa = String(a);
    const sb = String(b);
    if (sa + sb > sb + sa) {
      return -1;
    }
    if (sa + sb < sb + sa) {
      return 1;
    }
    return 0;
  });

  let str = nums.join('');

  // 排除类似 '00' 这种情况
  while (str.startsWith('0') && str.length > 1) {
    str = str.slice(1);
  }

  return str;
}
