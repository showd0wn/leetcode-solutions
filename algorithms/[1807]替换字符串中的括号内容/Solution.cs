// topics = ["哈希表"]

using System.Collections.Generic;
using System.Text.RegularExpressions;

public class Solution
{
    /// <summary>
    /// time O(n + k), space O(n + k), n 为 s 长度, k 为 knowledge 中字符串长度之和
    /// </summary>
    public string Evaluate(string s, IList<IList<string>> knowledge)
    {
        Dictionary<string, string> dict = new Dictionary<string, string>();

        foreach (var item in knowledge)
        {
            dict.Add($"({item[0]})", item[1]);
        }

        Regex rx = new Regex(@"\(\w+\)");

        return rx.Replace(s, match => dict.ContainsKey(match.ToString()) ? dict[match.ToString()] : "?");
    }
}