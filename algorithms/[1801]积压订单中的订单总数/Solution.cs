// topics = ["数组", "堆"]

using System;
using System.Collections.Generic;

public class Solution
{
    /// <summary>
    /// time O(nlogn), space O(n), n 为 orders 长度
    /// </summary>
    public int GetNumberOfBacklogOrders(int[][] orders)
    {
        // 采购积压订单
        SortedSet<int[]> s1 = new SortedSet<int[]>(new Comparasion());
        // 销售积压订单
        SortedSet<int[]> s2 = new SortedSet<int[]>(new Comparasion());
        // 积压订单总数
        long total = 0;

        foreach (int[] order in orders)
        {
            int price = order[0];
            int amount = order[1];
            int type = order[2];

            if (type == 0)
            {
                while (amount > 0)
                {
                    if (s2.Count == 0 || s2.Min[0] > price)
                    {
                        s1.Add(new int[] { price, amount });
                        total += amount;
                        break;
                    }

                    int count = Math.Min(amount, s2.Min[1]);
                    total -= count;
                    amount -= count;
                    s2.Min[1] -= count;

                    if (s2.Min[1] == 0)
                    {
                        s2.Remove(s2.Min);
                    }
                }
            }
            else
            {
                while (amount > 0)
                {
                    if (s1.Count == 0 || s1.Max[0] < price)
                    {
                        s2.Add(new int[] { price, amount });
                        total += amount;
                        break;
                    }

                    int count = Math.Min(amount, s1.Max[1]);
                    total -= count;
                    amount -= count;
                    s1.Max[1] -= count;

                    if (s1.Max[1] == 0)
                    {
                        s1.Remove(s1.Max);
                    }
                }
            }
        }

        return (int)(total % (Math.Pow(10, 9) + 7));
    }

    public class Comparasion : IComparer<int[]>
    {
        public int Compare(int[] a, int[] b)
        {
            if (a[0] > b[0])
            {
                return 1;
            }
            else if (a[0] < b[0])
            {
                return -1;
            }
            return 0;
        }
    }
}
