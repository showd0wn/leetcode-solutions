// topics = ["数组", "双指针"]

using System;
using System.Collections.Generic;

public class Solution
{
    public IList<IList<int>> ThreeSum(int[] nums)
    {
        IList<IList<int>> res = new List<IList<int>>();

        int n = nums.Length;
        if (n < 3)
        {
            return res;
        }

        Array.Sort(nums);
        for (int i = 0; i < n; i++)
        {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int L = i + 1;
            int R = n - 1;

            while (L < R)
            {
                int sum = nums[i] + nums[L] + nums[R];
                if (sum < 0)
                {
                    L++;
                }
                else if (sum > 0)
                {
                    R--;
                }
                else
                {
                    res.Add(new List<int>() { nums[i], nums[L], nums[R] });
                    while (L < R && nums[L] == nums[L + 1]) L++;
                    while (L < R && nums[R] == nums[R - 1]) R--;
                    L++;
                    R--;
                }
            }

        }

        return res;
    }
}
