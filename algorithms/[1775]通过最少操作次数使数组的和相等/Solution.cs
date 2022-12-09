// topics = ["贪心算法", "哈希表"]

using System;
using System.Linq;
using System.Collections.Generic;

public class Solution
{
    /// <summary>
    /// time O(n + m), space O(1), n 和 m 分别为 nums1 和 nums2 长度
    /// </summary>
    public int MinOperations(int[] nums1, int[] nums2)
    {
        int sum1 = nums1.Sum();
        int sum2 = nums2.Sum();

        if (sum1 == sum2)
        {
            return 0;
        }
        else if (sum1 < sum2)
        {
            return MinOperations(nums2, nums1);
        }

        Dictionary<int, int> d1 = toDict(nums1);
        Dictionary<int, int> d2 = toDict(nums2);
        int difference = sum1 - sum2;
        int res = 0;

        for (int i = 6; i > 1; i--)
        {
            while (d1.ContainsKey(i) && d1[i] > 0)
            {
                res += 1;
                d1[i] -= 1;
                difference -= i - 1;
                if (difference <= 0)
                {
                    return res;
                }
            }
            while (d2.ContainsKey(7 - i) && d2[7 - i] > 0)
            {
                res += 1;
                d2[7 - i] -= 1;
                difference -= i - 1;
                if (difference <= 0)
                {
                    return res;
                }
            }
        }

        return -1;
    }

    public Dictionary<int, int> toDict(int[] nums)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        foreach (int num in nums)
        {
            if (dict.ContainsKey(num))
            {
                dict[num] += 1;
            }
            else
            {
                dict.Add(num, 1);
            }
        }

        return dict;
    }
}
