// topics = ["哈希表"]

using System.Collections.Generic;

public class Solution
{
    public char RepeatedCharacter(string s)
    {
        HashSet<char> set = new HashSet<char>();

        foreach (char ch in s)
        {
            if (set.Contains(ch))
            {
                return ch;
            }
            else
            {
                set.Add(ch);
            }
        }

        return ' ';
    }
}
