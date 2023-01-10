// topics = ["字符串"]

using System.Linq;

public class Solution
{
    public int PrefixCount(string[] words, string pref)
    {
        return words.Where(word => word.StartsWith(pref)).Count();
    }
}
