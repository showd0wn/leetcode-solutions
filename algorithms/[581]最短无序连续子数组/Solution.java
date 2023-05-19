// topics = ["数组", "双指针"]

class Solution {
    /**
     * 近似题 1574.删除最短的子数组使剩余数组有序
     *
     * 双指针
     * time O(n), space O(1), n 为数组长度
     */
    public int findUnsortedSubarray(int[] nums) {
        int n = nums.length;

        // 从左往右遍历, 判断是否为当前最大值 --> 寻找右边界
        int max = Integer.MIN_VALUE, right = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] < max) {
                right = i;
            } else {
                max = nums[i];
            }
        }

        // 从右往左遍历, 判断是否为当前最小值 --> 寻找左边界
        int min = Integer.MAX_VALUE, left = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (nums[i] > min) {
                left = i;
            } else {
                min = nums[i];
            }
        }

        if (left >= right) {
            return 0;
        }

        return right - left + 1;
    }
}