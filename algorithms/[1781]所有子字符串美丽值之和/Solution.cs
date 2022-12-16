// topics = ["数组", "字符串"]

public class Solution
{
    public int BeautySum(string s)
    {
        int n = s.Length;
        int res = 0;

        for (int i = 0; i < n; i++)
        {
            int[] cnt = new int[26];
            int maxFreq = 0;
            for (int j = i; j < n; j++)
            {
                int idx = s[j] - 'a';
                cnt[idx]++;
                maxFreq = Math.Max(maxFreq, cnt[idx]);
                int minFreq = s.Length;
                for (int k = 0; k < 26; k++)
                {
                    if (cnt[k] > 0)
                    {
                        minFreq = Math.Min(minFreq, cnt[k]);
                    }
                }
                res += maxFreq - minFreq;
            }
        }

        return res;
    }
}
