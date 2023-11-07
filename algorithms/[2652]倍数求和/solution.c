// topics = ["数学"]

/**
 * 解法一 枚举 time O(n), space O(1)
 */
int sumOfMultiples(int n)
{
    int res = 0;
    for (int i = 1; i <= n; i++)
    {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0)
        {
            res += i;
        }
    }
    return res;
}

/**
 * 解法二 高斯求和 + 容斥原理, time O(1), space O(1)
 */
int sum(int n, int m)
{
    int a1 = m, an = n / m * m;
    int cnt = n / m;
    return (a1 + an) * cnt / 2;
}

int sumOfMultiples(int n)
{
    return sum(n, 3) + sum(n, 5) + sum(n, 7) - sum(n, 3 * 5) - sum(n, 3 * 7) - sum(n, 5 * 7) + sum(n, 3 * 5 * 7);
}