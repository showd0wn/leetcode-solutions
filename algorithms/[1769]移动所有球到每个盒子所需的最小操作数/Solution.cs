// topics = ["数组"]

public class Solution
{
    /// <summary>
    /// time O(n), space O(1), n 为 boxes 长度
    /// </summary>
    public int[] MinOperations(string boxes)
    {
        int n = boxes.Length;
        int[] res = new int[n];

        // 当前下标及其左边的球数
        int leftNum = boxes[0] == '1' ? 1 : 0;
        // 当前下标右边的球数
        int rightNum = 0;

        for (int i = 1; i < n; i++)
        {
            if (boxes[i] == '1')
            {
                rightNum += 1;
                res[0] += i;
            }
        }

        for (int i = 1; i < n; i++)
        {
            // 由上个位置的操作数推导当前位置的操作数
            res[i] = res[i - 1] + leftNum - rightNum;
            if (boxes[i] == '1')
            {
                leftNum += 1;
                rightNum -= 1;
            }
        }

        return res;
    }
}
