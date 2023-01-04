// topics = ["字符串"]

using System;

public class Solution
{
    public bool AreNumbersAscending(string s)
    {
        int last = 0;
        string[] subs = s.Split(' ');

        foreach (var sub in subs)
        {
            if (Int32.TryParse(sub, out int n))
            {
                if (n > last)
                {
                    last = n;
                }
                else
                {
                    return false;
                }
            }
        }

        return true;
    }
}