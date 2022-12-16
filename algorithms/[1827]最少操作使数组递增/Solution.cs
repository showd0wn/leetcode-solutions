// topics = ["贪心算法", "数组"]

public class Solution
{
    public int MinOperations(int[] nums)
    {
        if (nums.Length == 1)
        {
            return 0;
        }

        int res = 0;
        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] <= nums[i - 1])
            {
                res += nums[i - 1] - nums[i] + 1;
                nums[i] = nums[i - 1] + 1;
            }
        }

        return res;
    }
}