// topics = ["哈希表", "字符串"]

using System.Collections.Generic;

public class Solution
{
    public bool CheckIfPangram(string sentence)
    {
        HashSet<char> set = new HashSet<char>();

        foreach (char ch in sentence)
        {
            set.Add(ch);
        }

        return set.Count == 26;
    }
}
