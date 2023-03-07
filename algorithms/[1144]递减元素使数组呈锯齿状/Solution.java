// topics = ["数组", "贪心算法"]

class Solution {
    /**
     * time O(n), space O(1), n 为 nums 长度
     */
    public int movesToMakeZigzag(int[] nums) {
        // 分别计算两种情况，返回较小的操作数
        return Math.min(help(nums, 0), help(nums, 1));
    }

    public int help(int[] nums, int p) {
        int res = 0;

        // 对于每个位置，都要小于两边的数（只能减少）
        for (int i = p; i < nums.length; i += 2) {
            int a = 0;
            if (i - 1 >= 0) {
                a = Math.max(a, nums[i] - nums[i - 1] + 1);
            }
            if (i + 1 < nums.length) {
                a = Math.max(a, nums[i] - nums[i + 1] + 1);
            }
            res += a;
        }

        return res;
    }
}