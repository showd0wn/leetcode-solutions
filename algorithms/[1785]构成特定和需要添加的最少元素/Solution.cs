// topics = ["数组", "贪心算法"]

using System;

public class Solution
{
    public int MinElements(int[] nums, int limit, int goal)
    {
        long sum = 0;
        foreach (int x in nums)
        {
            sum += x;
        }
        long diff = Math.Abs(goal - sum);

        // 优化 return (int) ((diff + limit - 1) / limit);
        if (diff % limit == 0)
        {
            return (int)(diff / limit);
        }
        else
        {
            return (int)(diff / limit + 1);
        }
    }
}
