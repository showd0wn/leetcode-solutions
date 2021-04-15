// topics = ["贪心算法"]

function canJump(nums: number[]): boolean {
  const n = nums.length;
  let target = n - 1;

  // 反向遍历，更新目标位置
  for (let i = n - 1; i >= 0; i -= 1) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }

  return target == 0;
}
