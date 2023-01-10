// topics = ["数学"]

public class Solution
{
    public int CountEven(int num)
    {
        int res = 0;
        // 只遍历个位不同的数
        for (int i = num - num % 10; i <= num; i++)
        {
            if (AddDigits(i) % 2 == 0)
            {
                res += 1;
            }
        }
        res += (num / 10) * 5 - 1;
        return res;
    }

    public int AddDigits(int num)
    {
        int ans = 0;
        while (num > 0)
        {
            ans += num % 10;
            num /= 10;
        }
        return ans;
    }
}