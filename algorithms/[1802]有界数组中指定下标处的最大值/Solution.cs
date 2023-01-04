// topics = ["贪心算法", "二分查找", "数学"]

using System;

public class Solution
{
    /// <summary>
    /// time O(log(maxSum)), space O(1)
    /// </summary>
    public int MaxValue(int n, int index, int maxSum)
    {
        int left = 1, right = maxSum;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            long sum = Sum(mid, n, index);

            if (sum == maxSum)
            {
                return mid;
            }
            else if (sum < maxSum)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return right;
    }

    public long Sum(int mid, int n, int index)
    {
        int left = index;
        int right = n - index - 1;
        return mid + Cal(mid, left) + Cal(mid, right);
    }


    public long Cal(int big, int length)
    {
        if (length + 1 < big)
        {
            int small = big - length;
            return (long)(big - 1 + small) * length / 2;
        }
        else
        {
            int ones = length - (big - 1);
            return (long)big * (big - 1) / 2 + ones;
        }
    }
}