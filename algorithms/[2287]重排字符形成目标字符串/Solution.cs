// topics = ["哈希表"]

using System.Collections.Generic;

public class Solution
{
    /// <summary>
    /// time O(n + m), space O(C), n 和 m 分别为 s 和 target 长度, C = 26
    /// </summary>
    public int RearrangeCharacters(string s, string target)
    {
        int[] arr = new int[26];
        foreach (char ch in s)
        {
            arr[ch - 'a'] += 1;
        }

        int res = 0;

        while (true)
        {
            foreach (char ch in target)
            {
                arr[ch - 'a'] -= 1;
                if (arr[ch - 'a'] < 0)
                {
                    return res;
                }
            }
            res += 1;
        }
    }
}