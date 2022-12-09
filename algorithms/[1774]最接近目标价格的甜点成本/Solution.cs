// topics = ["动态规划"]

using System;

public class Solution
{
    /// <summary>
    /// 0-1 背包问题 变种问题
    /// time O(target * m), space O(target), m 为 toppingCosts 长度
    /// </summary>
    public int ClosestCost(int[] baseCosts, int[] toppingCosts, int target)
    {
        int n = baseCosts.Length, m = toppingCosts.Length;
        int res = int.MaxValue;

        // dp[i, j] 表示任一 baseCosts + toppingCosts 前 i 个元素能否组为成本 j
        bool[,] dp = new bool[m + 1, target + 1];

        // dp 初始状态
        foreach (int bc in baseCosts)
        {
            if (bc <= target)
            {
                dp[0, bc] = true;
            }
            else
            {
                // res 记为合法组合下, 大于 target 的最小成本
                res = Math.Min(res, bc);
            }
        }

        for (int i = 1; i <= m; i++)
        {
            for (int c = 0; c <= 2; c++)
            {
                for (int j = target; j > 0; j--)
                {
                    int tc = toppingCosts[i - 1];
                    if (j > c * tc)
                    {
                        dp[i, j] |= dp[i - 1, j - c * tc];
                    }
                    if (dp[i - 1, j])
                    {
                        if (j + c * tc > target)
                        {
                            // res 记为合法组合下, 大于 target 的最小成本
                            res = Math.Min(res, j + c * tc);
                        }
                    }
                }
            }
        }

        // 搜索合法组合下，最小于target, 且最接近 target 的成本
        for (int cost = target; cost >= Math.Max(2 * target - res, 0); cost--)
        {
            if (dp[m, cost])
            {
                return cost;
            }
        }

        return res;
    }
}
