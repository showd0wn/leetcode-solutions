// topics = ["数组", "双指针"]

function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length;

  while (i < j) {
    if (nums[i] == val) {
      nums[i] = nums[j - 1];
      j -= 1;
    } else {
      i += 1;
    }
  }

  return i;
}
