// topics = ["贪心算法"]

function jump(nums: number[]): number {
  let maxIdx = 0;
  let end = 0;
  let steps = 0;

  for (let i = 0, n = nums.length; i < n - 1; i += 1) {
    maxIdx = Math.max(maxIdx, i + nums[i]);
    // 跳跃到最远位置，跳跃次数 + 1
    if (i == end) {
      end = maxIdx;
      steps += 1;
    }
  }
  return steps;
}
