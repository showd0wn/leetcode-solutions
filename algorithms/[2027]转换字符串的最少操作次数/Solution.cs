// topics = ["字符串", "贪心算法"]

public class Solution
{
    public int MinimumMoves(string s)
    {
        int pre = -1;
        int res = 0;

        for (int i = 0; i < s.Length; i++)
        {

            if (s[i] == 'X')
            {
                if (pre == -1 || i - pre > 2)
                {
                    pre = i;
                    res += 1;
                }
            }
        }

        return res;
    }
}