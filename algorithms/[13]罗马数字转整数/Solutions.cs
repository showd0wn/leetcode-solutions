// topics = ["数学"]

using System.Collections.Generic;

public class Solution
{
    public int RomanToInt(string s)
    {
        int n = s.Length;

        Dictionary<char, int> d = new Dictionary<char, int>()
        {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000},
        };

        int res = 0;

        for (int i = 0; i < n; i++)
        {
            char ch = s[i];
            int val = d[ch];
            if (i < n - 1 && val < d[s[i + 1]])
            {
                res -= val;
            }
            else
            {
                res += val;
            }
        }

        return res;
    }
}