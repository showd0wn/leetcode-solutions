// topics = ["字符串", "哈希表", "滑动窗口"]

using System;
using System.Collections.Generic;

public class Solution
{
    /// <summary>
    /// time O(n), space O(|Σ|)
    /// n 为字符串的长度
    /// Σ 表示字符串可以出现的字符集, |Σ| 表示字符集大小
    /// </summary>
    public int LengthOfLongestSubstring(string s)
    {
        int n = s.Length;
        HashSet<char> occ = new HashSet<char>();
        int i = 0;
        int j = 0;
        int res = 0;

        while (j < n)
        {
            while (occ.Contains(s[j]))
            {
                occ.Remove(s[i]);
                i += 1;
            }

            occ.Add(s[j]);
            j += 1;
            res = Math.Max(res, j - i);
        }

        return res;
    }
}
