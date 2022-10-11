// topics = ["字符串", "动态规划"]

Solution s = new Solution();
System.Console.WriteLine(s.LongestPalindrome("cbbsdsbasxd"));
System.Console.WriteLine(s.LongestPalindrome2("cbbsdsbasxd"));

public class Solution
{
    // time O(n^2), space O(n^2), n 为 s 的长度
    public string LongestPalindrome(string s)
    {
        int n = s.Length;
        bool[,] dp = new bool[n, n];

        int start = 0;
        int end = 0;

        for (int i = n; i >= 0; i--)
        {
            for (int j = i; j < n; j++)
            {
                if (j == i)
                {
                    dp[i, j] = true;
                }
                else if (j == i + 1)
                {
                    dp[i, j] = s[i] == s[j];
                }
                else
                {
                    dp[i, j] = dp[i + 1, j - 1] && (s[i] == s[j]);
                }

                if (dp[i, j] && j - i > end - start)
                {
                    (start, end) = (i, j);
                }
            }
        }

        return s[start..(end + 1)];
    }

    // time O(n^2), space O(1), n 为 s 的长度
    public string LongestPalindrome2(string s)
    {
        int n = s.Length;
        string res = "";

        int start = 0;
        int end = 0;

        for (int i = 0; i < n; i++)
        {
            var (left1, right1) = this.expandAroundCenter(s, i, i);
            var (left2, right2) = this.expandAroundCenter(s, i, i + 1);

            if (right1 - left1 > end - start)
            {
                (start, end) = (left1, right1);
            }

            if (right2 - left2 > end - start)
            {
                (start, end) = (left2, right2);
            }
        }

        return s[start..(end + 1)];
    }

    (int, int) expandAroundCenter(string str, int left, int right)
    {
        while (left >= 0 && right < str.Length && str[left] == str[right])
        {
            left--;
            right++;
        }
        return (left + 1, right - 1);
    }
}