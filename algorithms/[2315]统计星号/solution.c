// topics = ["数学"]

#include <stdbool.h>

/**
 * 模拟 time O(n), space O(1)
 */
int countAsterisks(char *s)
{
    int res = 0;
    bool f = true;

    char *p = s;
    while (*p != '\0')
    {
        if (*p == '|')
        {
            f = !f;
        }
        else if (f && *p == '*')
        {
            res++;
        }
        p++;
    }

    return res;
}