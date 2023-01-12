// topics = ["双指针"]

public class Solution
{
    /// <summary>
    /// time O(n), space O(1), n 为 s 长度
    /// </summary>
    public int MinimumLength(string s)
    {
        int n = s.Length;
        int i = 0, j = n - 1;

        while (i < j && s[i] == s[j])
        {
            char c = s[i];
            while (i <= j && s[i] == c)
            {
                i++;
            }
            while (i <= j && s[j] == c)
            {
                j--;
            }
        }

        return j - i + 1;
    }
}
