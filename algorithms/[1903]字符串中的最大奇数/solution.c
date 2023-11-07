// topics = ["字符串", "贪心算法"]

/**
 * 原地修改
 * time O(n), space O(1), n 为 num 长度
 */
char *largestOddNumber(char *num)
{
    int n = strlen(num);
    int i;
    for (i = n - 1; i >= 0; i--)
    {
        if ((num[i] - '0') % 2)
        {
            num[i + 1] = '\0';
            break;
        }
    }

    if (i == -1)
    {
        return "";
    }

    return num;
}

/**
 * 返回新字符串
 * time O(n), space O(1), n 为 num 长度
 */
char *largestOddNumber2(char *num)
{
    int n = strlen(num);
    int i;
    for (i = n - 1; i >= 0; i--)
    {
        if ((num[i] - '0') % 2)
        {
            num[i + 1] = '\0';
            break;
        }
    }

    if (i == -1)
    {
        return "";
    }

    char *ps = (char *)malloc((i + 2) * sizeof(char));
    strncpy(ps, num, i + 1);
    ps[i + 1] = '\0';

    return ps;
}