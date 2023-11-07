// topics = ["位运算"]

/**
 * 模拟 time O(n), space O(1)
 */
int xorOperation(int n, int start)
{
    int res = 0;
    for (int i = 0; i < n; i++)
    {
        res ^= start + 2 * i;
    }

    return res;
}