// topics = ["字符串"]

using System;
using System.Text;

public class Solution
{
    public int GetLucky(string s, int k)
    {
        StringBuilder sb = new StringBuilder();

        foreach (char ch in s)
        {
            sb.Append(ch - 'a' + 1);
        }

        string res = sb.ToString();

        for (int i = 0; i < k; i++)
        {
            res = AddDigits(res);
        }

        return Int32.Parse(res);
    }

    public string AddDigits(string s)
    {
        int sum = 0;

        foreach (char ch in s)
        {
            sum += ch - '0';
        }

        return sum.ToString();
    }
}
