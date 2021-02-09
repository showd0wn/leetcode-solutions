// topics = ["数组", "哈希表"]

function containsDuplicate(nums: number[]): boolean {
  return nums.length !== new Set(nums).size;
}
