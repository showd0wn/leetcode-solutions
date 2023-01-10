// topics = ["数组", "数学"]

using System.Collections.Generic;

public class Solution
{
    public int ReinitializePermutation(int n)
    {
        HashSet<int> set = new HashSet<int>();
        int res = 1;

        for (int i = 0; i < n; i++)
        {
            if (set.Contains(i))
            {
                continue;
            }

            int next = i;
            int count = 0;
            do
            {
                count += 1;
                if (next % 2 == 0)
                {
                    next = next / 2;
                }
                else
                {
                    next = n / 2 + (next - 1) / 2;
                }
                set.Add(next);
            } while (next != i);

            res = LCM(res, count); // res = Math.Max(res, count) 也是正确的
        }

        return res;
    }

    // 最小公约数
    public int GCD(int x, int y)
    {
        return y == 0 ? x : GCD(y, x % y);
    }

    // 最小公倍数
    public int LCM(int x, int y)
    {
        return x * y / GCD(x, y);
    }
}