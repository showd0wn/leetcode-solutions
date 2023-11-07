// topics = ["贪心算法"]

/**
 * time O(n), space O(1), n = rungsSize
 */
int addRungs(int *rungs, int rungsSize, int dist)
{
    int h = 0;
    int res = 0;

    for (int i = 0; i < rungsSize; i++)
    {
        if (rungs[i] > h + dist)
        {
            // (rungs[i] - h) / dist 向上取整
            int n = (rungs[i] - h + dist - 1) / dist;
            res += n - 1;
        }
        h = rungs[i];
    }

    return res;
}