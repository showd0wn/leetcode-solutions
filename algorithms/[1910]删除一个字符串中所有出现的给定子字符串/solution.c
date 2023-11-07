// topics = ["字符串"]

#include <string.h>

/**
 * 暴力模拟 + 递归
 */
char *removeOccurrences(char *s, char *part)
{
    int m = strlen(s), n = strlen(part);

    if (m < n)
    {
        return s;
    }

    for (int i = 0; i <= m - n; i++)
    {
        if (memcmp(s + i, part, n * sizeof(char)) == 0)
        {
            memmove(s + n, s, i * sizeof(char));
            return removeOccurrences(s + n, part);
        }
    }

    return s;
}