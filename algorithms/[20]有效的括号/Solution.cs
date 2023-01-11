// topics = ['字符串", "栈"]

using System.Collections.Generic;

public class Solution
{
    public bool IsValid(string str)
    {
        Stack<char> s = new Stack<char>();
        Dictionary<char, char> d = new Dictionary<char, char>()
        {
            { ')', '(' },
            { ']', '[' },
            { '}', '{' },
        };

        foreach (char ch in str)
        {
            if (d.ContainsKey(ch))
            {
                if (s.Count == 0 || s.Peek() != d[ch])
                {
                    return false;
                }
                s.Pop();
            }
            else
            {
                s.Push(ch);
            }
        }

        return s.Count == 0;
    }
}
