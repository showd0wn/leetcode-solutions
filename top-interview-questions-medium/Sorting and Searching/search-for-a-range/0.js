/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length
  if (!len || nums[0] > target || nums[len - 1] < target) return [-1, -1]

  let lb = -1
  let rb = -1

  let start
  let end

  start = 0
  end = len - 1
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }
  if (nums[start] === target) {
    lb = start
  } else if (nums[end] === target) {
    lb = end
  }

  start = 0
  end = len - 1
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) {
      end = mid
    } else {
      start = mid
    }
  }
  if (nums[end] === target) {
    rb = end
  } else if (nums[start] === target) {
    rb = start
  }

  return [lb ,rb]
}
