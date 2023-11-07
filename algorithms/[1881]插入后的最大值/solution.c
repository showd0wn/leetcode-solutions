// topics = ["贪心算法", "字符串"]

#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

/**
 * time O(n), time O(1), n 为字符串长度
 */
char *maxValue(char *n, int x)
{
    // 否是是负数
    bool flag = n[0] == '-';

    int len = strlen(n);
    char *res = (char *)malloc(len + 2);

    int i = 0;
    for (i = 0; i < len; i++)
    {
        if ((!flag && x > n[i] - 48) || (flag && x < n[i] - 48))
        {
            break;
        }
    }

    res[i] = x + 48;
    res[len + 1] = '\0';
    memcpy(res, n, i);
    memcpy(res + i + 1, n + i, len - i);

    return res;
}