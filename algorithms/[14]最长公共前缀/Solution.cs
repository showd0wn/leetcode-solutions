// topics = ["字符串"]

using System.Text;

public class Solution
{
    public string LongestCommonPrefix(string[] strs)
    {
        if (strs.Length == 0)
        {
            return "";
        }

        StringBuilder sb = new StringBuilder();

        string first = strs[0];

        for (int i = 0; i < first.Length; i++)
        {
            char ch = first[i];
            foreach (string str in strs[1..])
            {
                if (i == str.Length || str[i] != ch)
                {
                    return sb.ToString();
                }
            }
            sb.Append(ch);
        }

        return sb.ToString();
    }
}
