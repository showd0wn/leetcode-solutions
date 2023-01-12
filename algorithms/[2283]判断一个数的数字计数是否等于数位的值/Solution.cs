// topics = ["哈希表"]

using System.Collections.Generic;

public class Solution
{
    /// <summary>
    /// time O(n), space O(n), n 为 num 长度
    /// </summary>
    public bool DigitCount(string num)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        foreach (char ch in num)
        {
            int key = ch - '0';
            if (dict.ContainsKey(key))
            {
                dict[key] += 1;
            }
            else
            {
                dict[key] = 1;
            }
        }

        for (int i = 0; i < num.Length; i++)
        {
            if (!dict.ContainsKey(i))
            {
                dict[i] = 0;
            }
            if (dict[i] != num[i] - '0')
            {
                return false;
            }
        }

        return true;
    }
}