using System;

public class Solution
{
    /// <summary>
    /// Math
    /// time O(log|x|), space O(1), log|x| 即 x 十进制的位数
    /// </summary>
    public int Reverse(int x)
    {
        int rev = 0;

        while (x != 0)
        {
            if (rev < int.MinValue / 10 || rev > int.MaxValue / 10)
            {
                return 0;
            }
            rev = rev * 10 + x % 10;
            x /= 10;
        }

        return rev;
    }
}