// topics = ["数组", "二分查找"]

using System;

public class Solution
{
    /// <summary>
    /// 前缀和 + 二分查找
    /// time O(nlogn) space O(n), n 为 nums 长度
    /// </summary>
    public int MinOperations(int[] nums, int x)
    {
        int n = nums.Length;
        // 前缀和
        int[] preSum = new int[n + 1];
        // 后缀和
        int[] postSum = new int[n + 1];

        for (int i = 0; i <= n; i++)
        {
            if (i == 0)
            {
                preSum[0] = 0;
                postSum[0] = 0;
            }
            else
            {
                preSum[i] = preSum[i - 1] + nums[i - 1];
                postSum[i] = postSum[i - 1] + nums[n - i];
            }
        }

        int res = n + 1;
        for (int i = 0; i <= n; i++)
        {
            // 二分查找
            int j = bisect(postSum, n - i, x - preSum[i]);
            if (j != -1)
            {
                res = Math.Min(res, i + j);
            }
        }

        return res > n ? -1 : res;
    }

    public int bisect(int[] nums, int idx, int value)
    {
        int left = 0, right = idx;
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            if (nums[mid] == value)
            {
                return mid;
            }
            else if (nums[mid] < value)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return -1;
    }
}