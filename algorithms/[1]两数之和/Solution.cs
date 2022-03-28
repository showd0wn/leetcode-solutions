// topics = ["数组", "哈希表"]

public class Solution
{
    /// <summary>
    /// Hash Table
    /// time O(n), space O(n), n 为 nums 长度
    /// </summary>
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> kvs = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int anotherValue = target - nums[i];
            if (kvs.ContainsKey(anotherValue))
            {
                return new int[] { kvs[anotherValue], i };
            }
            if (!kvs.ContainsKey(nums[i]))
            {
                kvs.Add(nums[i], i);
            }
        }

        return new int[] { -1, -1 };
    }
}
