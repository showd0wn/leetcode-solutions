// topics = ["哈希表"]

using System.Collections.Generic;

public class Solution
{
    public IList<int> TwoOutOfThree(int[] nums1, int[] nums2, int[] nums3)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        HashSet<int> set = new HashSet<int>();

        foreach (int num in nums1)
        {
            if (!dict.ContainsKey(num))
            {
                dict.Add(num, 1);
            }
        }

        foreach (int num in nums2)
        {
            if (!dict.ContainsKey(num))
            {
                dict.Add(num, 2);
            }
            else if (dict[num] == 1)
            {
                set.Add(num);
            }
        }

        foreach (int num in nums3)
        {
            if (dict.ContainsKey(num) && (dict[num] == 1 || dict[num] == 2))
            {
                set.Add(num);
            }
        }

        return new List<int>(set);
    }
}