// topics = ["数组"]

// Boyer-Moore 投票算法
function majorityElement(nums: number[]): number {
  let major = nums[0];
  let cnt = 0;

  for (const num of nums) {
    if (cnt == 0) {
      major = num;
      cnt = 1;
    } else if (major == num) {
      cnt += 1;
    } else {
      cnt -= 1;
    }
  }

  return major;
}
