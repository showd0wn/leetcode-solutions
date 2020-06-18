/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const result = []
    nums1.forEach(num => {
        const index = nums2.indexOf(num)
        if (~index) {
            result.push(...nums2.splice(index, 1))
        }
    })
    return result
}
