// topics = ["字符串", "哈希表"]

using System.Text;
using System.Collections.Generic;

public class Solution
{
    public int NumDifferentIntegers(string word)
    {
        StringBuilder sb = new StringBuilder();
        HashSet<string> set = new HashSet<string>();
        int res = 0;

        foreach (char ch in word)
        {
            if (char.IsDigit(ch))
            {
                sb.Append(ch);
            }
            else if (sb.Length > 0)
            {
                set.Add(sb.ToString().TrimStart('0'));
                sb.Clear();
            }
        }

        if (sb.Length > 0)
        {
            set.Add(sb.ToString().TrimStart('0'));
        }

        return set.Count;
    }
}
