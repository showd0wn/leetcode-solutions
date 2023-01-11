// topics = ["数组", "双指针"]

using System;

public class Solution
{
    /// <summary>
    /// 双指针
    /// time O(n) space O(1), n 为 height 长度
    /// </summary>
    public int MaxArea(int[] height)
    {
        int left = 0;
        int right = height.Length - 1;

        int res = 0;
        while (left < right)
        {
            int leftHeight = height[left];
            int rightHeight = height[right];

            res = Math.Max(res, (right - left) * Math.Min(leftHeight, rightHeight));

            if (leftHeight < rightHeight)
            {
                left += 1;
            }
            else
            {
                right -= 1;
            }
        }

        return res;
    }
}
