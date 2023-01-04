// topics = ["设计"]

using System.Collections.Generic;

/// <summary>
/// 排序集合
/// time seat():O(n), leave(): O(logn)
/// space O(n)
/// </summary>
public class ExamRoom
{
    private SortedSet<int> set;

    private int n;

    public ExamRoom(int n)
    {
        this.n = n;
        set = new SortedSet<int>();
    }

    public int Seat()
    {
        if (set.Count == 0)
        {
            set.Add(0);
            return 0;
        }

        int pre = set.Min;
        int ans = set.Min, idx = 0; // ans 代表离最近的人的最大距离, idx 代表对应的位置（初始考虑最左位置）

        // 遍历每个区间 [pre, x] -- 【优化】使用优先队列
        foreach (int x in set)
        {
            if (ans < (x - pre) / 2)
            {
                ans = (x - pre) / 2;
                idx = (x + pre) / 2;
            }
            pre = x;
        }

        // 考虑最右位置
        int d = n - 1 - set.Max;
        if (ans < d)
        {
            ans = d;
            idx = n - 1;
        }

        set.Add(idx);

        return idx;
    }

    public void Leave(int p)
    {
        set.Remove(p);
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom obj = new ExamRoom(n);
 * int param_1 = obj.Seat();
 * obj.Leave(p);
 */