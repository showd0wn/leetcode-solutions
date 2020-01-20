/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let len = m + n
    m--
    n--
    while (len--) {
        nums1[len] = (n < 0 || nums1[m] > nums2[n])
            ? nums1[m--]
            : nums2[n--]
    }
}
