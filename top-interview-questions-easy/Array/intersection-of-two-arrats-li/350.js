/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var intersect = []
  nums1.forEach((value) => {
    var index = nums2.findIndex(v => v === value)
    if (index === -1) return
    intersect.push(...nums2.splice(index, 1))
  })
  return intersect
}
