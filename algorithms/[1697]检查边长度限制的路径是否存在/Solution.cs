// topics = ["图", "并查集"]

using System;

public class UnionFind
{
    private int[] parent;

    private int[] rank;

    public int SetCount
    { get; private set; }

    public UnionFind(int n)
    {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
            rank[i] = 1;
        }
        SetCount = n;
    }

    public void Union(int i, int j)
    {
        int x = Find(i);
        int y = Find(j);

        if (x == y)
        {
            return;
        }

        if (rank[x] <= rank[y])
        {
            parent[x] = y;
        }
        else
        {
            parent[y] = x;
        }

        if (rank[x] == rank[y])
        {
            rank[y] += 1;
        }

        SetCount -= 1;
    }

    public int Find(int x)
    {
        if (parent[x] != x)
        {
            parent[x] = Find(parent[x]);
        }
        return parent[x];
    }

}

public class Solution
{
    public bool[] DistanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries)
    {
        int el = edgeList.Length;
        int ql = queries.Length;

        int[] index = new int[ql];
        for (int i = 0; i < ql; i++)
        {
            index[i] = i;
        }

        Array.Sort(edgeList, (a, b) => a[2] - b[2]);
        Array.Sort(index, (a, b) => queries[a][2] - queries[b][2]);

        UnionFind uf = new UnionFind(n);
        bool[] res = new bool[ql];
        int k = 0;

        // 按 limit 递增, 遍历 queries 下标
        foreach (int i in index)
        {
            // 依次将剩余长度小于 limit 的边的顶点加入到并查集中
            while (k < el && edgeList[k][2] < queries[i][2])
            {
                uf.Union(edgeList[k][0], edgeList[k][1]);
                k += 1;
            }
            // 判断 queries[i] 两点是否连通
            res[i] = uf.Find(queries[i][0]) == uf.Find(queries[i][1]);
        }

        return res;
    }
}
