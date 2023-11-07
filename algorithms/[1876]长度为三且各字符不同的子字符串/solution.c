// topics = ["字符串"]

#include <string.h>

/**
 * time O(n), space O(1), n 为字符串长度
 */
int countGoodSubstrings(char *s)
{
    int n = strlen(s);
    int cnt = 0;

    for (int i = 0; i <= n - 3; i++)
    {
        if (s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2])
        {
            cnt++;
        }
    }

    return cnt;
}