// topics = ["字符串"]

using System.Text.RegularExpressions;

public class Solution
{
    public int MyAtoi(string s)
    {
        s = s.TrimStart();
        s = Regex.Match(s, @"^[+-]?\d+").ToString();

        int number;
        bool success = int.TryParse(s, out number);

        if (success)
        {
            return number;
        }

        if (string.IsNullOrWhiteSpace(s))
        {
            return 0;
        }

        if (s[0] == '-')
        {
            return int.MinValue;
        }

        return int.MaxValue;
    }
}
