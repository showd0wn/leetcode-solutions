// topics = ["数学"]

public class Solution
{
    public bool CheckPowersOfThree(int n)
    {
        while (n > 2)
        {
            if (n % 3 == 0)
            {
                n = n / 3;
            }
            else if ((n - 1) % 3 == 0)
            {
                n = (n - 1) / 3;
            }
            else
            {
                return false;
            }
        }

        return n == 1;
    }

    /// <summary>
    /// 可以将 n 转换成 3 进制。如果 n 的 3 进制表示中每一位均不为 2，那么答案为 True，否则为 False。
    /// </summary>
    public bool CheckPowersOfThree(int n)
    {
        while (n != 0)
        {
            if (n % 3 == 2)
            {
                return false;
            }
            n /= 3;
        }
        return true;
    }
}
