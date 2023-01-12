// topics = ["双指针"]

using System;

public class Solution
{
    /// <summary>
    /// time O(n * max(gi)), space O(1), n 为 nums 长度, gi 是数组 groups[i] 长度
    /// </summary>
    public bool CanChoose(int[][] groups, int[] nums)
    {
        // i, j 分别为 groups 和 nums 遍历指针
        int i = 0, j = 0;

        while (i < groups.Length && j < nums.Length)
        {
            if (Check(groups[i], nums, j))
            {
                j += groups[i].Length;
                i++;
            }
            else
            {
                j++;
            }
        }

        return i == groups.Length;
    }

    public bool Check(int[] group, int[] nums, int j)
    {
        if (j + group.Length > nums.Length)
        {
            return false;
        }

        for (int i = 0; i < group.Length; i++)
        {
            if (group[i] != nums[i + j])
            {
                return false;
            }
        }

        return true;
    }
}
